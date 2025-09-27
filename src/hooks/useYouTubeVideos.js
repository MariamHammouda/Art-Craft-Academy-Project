import { useState, useEffect } from 'react';
import { fetchChannelVideos, fetchCategorizedVideos, fetchPlaylistVideos, fetchCategorizedPlaylistVideos } from '../services/youtubeApi';
import { resetForNewApiKey } from '../services/cacheManager'; // Import the reset function
import { videosData } from '../mockData/videosData'; // Fallback data

/**
 * Custom hook for fetching and managing YouTube videos
 * @param {string|Array} channels - Channel ID string or array of channel objects
 * @param {number} maxResults - Maximum results per channel
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useYouTubeVideos = (channels, maxResults = 10) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let fetchedVideos = [];
      
      if (typeof channels === 'string') {
        // Single channel
        fetchedVideos = await fetchChannelVideos(channels, maxResults);
      } else if (Array.isArray(channels)) {
        // Multiple channels with categories
        fetchedVideos = await fetchCategorizedVideos(channels, maxResults);
      }
      
      // If no videos fetched (API error, no key, etc.), use fallback data
      if (fetchedVideos.length === 0) {
        console.log('Using fallback video data');
        setVideos(videosData);
      } else {
        setVideos(fetchedVideos);
      }
      
    } catch (err) {
      console.error('Error in useYouTubeVideos:', err);
      setError(err.message);
      // Use fallback data on error
      setVideos(videosData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [channels, maxResults]);

  return {
    videos,
    loading,
    error,
    refetch: fetchVideos
  };
};

/**
 * Hook for fetching latest videos from main channel or playlists
 * @param {number} maxResults - Maximum results
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useLatestVideos = (maxResults = 20) => {
  // Try YouTube API with smart caching and quota management
  const playlists = [
    {
      playlistId: 'PL4CiQqug4-YOWDWbMf4avDF8ONuZTmN4-',
      categoryId: 1,
      categoryTitleKey: 'categories.origamiWorld'
    }
  ];

  return usePlaylistVideos(playlists, maxResults);
};

/**
 * Custom hook for fetching and managing YouTube playlist videos
 * @param {Array} playlists - Array of playlist objects
 * @param {number} maxResults - Maximum results per playlist
 * @returns {Object} { videos, loading, error, refetch }
 */
export const usePlaylistVideos = (playlists, maxResults = 10) => {
  useEffect(() => {
    // TEMPORARY: Reset cache and quota data for the new API key.
    // This will be removed after confirming the fix.
    console.log('🔑 TEMPORARILY RESETTING API KEY DATA...');
    resetForNewApiKey();
  }, []); // Run only once on mount
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      console.log('🚀 usePlaylistVideos: Starting fetch...');
      console.log('📋 Playlists to fetch:', playlists);
      
      setLoading(true);
      setError(null);
      
      let fetchedVideos = [];
      
      if (Array.isArray(playlists)) {
        console.log('📡 Fetching from playlists...');
        // Multiple playlists with categories
        fetchedVideos = await fetchCategorizedPlaylistVideos(playlists, maxResults);
        console.log('✅ Fetched videos count:', fetchedVideos.length);
      }
      
      // If no videos fetched (API error, no key, etc.), use fallback data
      if (fetchedVideos.length === 0) {
        console.log('⚠️ No videos fetched, using fallback data');
        console.log('📊 Fallback data count:', videosData.length);
        setVideos(videosData);
      } else {
        console.log('✅ Using fetched videos:', fetchedVideos.length);
        setVideos(fetchedVideos);
      }
      
    } catch (err) {
      console.error('❌ Error in usePlaylistVideos:', err);
      setError(err.message);
      // Use fallback data on error
      console.log('🔄 Using fallback data due to error');
      setVideos(videosData);
    } finally {
      setLoading(false);
      console.log('🏁 usePlaylistVideos: Fetch complete');
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [playlists, maxResults]);

  return {
    videos,
    loading,
    error,
    refetch: fetchVideos
  };
};

/**
 * Hook for fetching videos by category
 * @param {number} categoryId - Category ID
 * @param {number} maxResults - Maximum results
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useVideosByCategory = (categoryId, maxResults = 10) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategoryVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let fetchedVideos = [];
      
      // Map category IDs to their respective playlists
      const categoryPlaylistMap = {
        1: import.meta.env.VITE_ORIGAMI_PLAYLIST_ID, // Origami
        2: import.meta.env.VITE_DRAWING_PLAYLIST_ID, // Drawing
        3: import.meta.env.VITE_CRAFTS_PLAYLIST_ID, // Crafts
        // Add more categories as needed
      };
      
      const playlistId = categoryPlaylistMap[categoryId];
      
      if (playlistId) {
        console.log(`🎯 Fetching videos for category ${categoryId} from playlist ${playlistId}`);
        fetchedVideos = await fetchPlaylistVideos(playlistId, maxResults);
        
        // Ensure videos have the correct category ID
        fetchedVideos = fetchedVideos.map(video => ({
          ...video,
          categoryId: categoryId
        }));
      } else {
        console.log(`⚠️ No playlist configured for category ${categoryId}, using fallback data`);
        // Fallback: use mock data for this category
        fetchedVideos = [];
      }
      
      // If no videos fetched, use fallback data
      if (fetchedVideos.length === 0) {
        console.log('Using fallback video data for category', categoryId);
        const fallbackVideos = videosData.filter(video => video.categoryId === categoryId);
        setVideos(fallbackVideos.slice(0, maxResults));
      } else {
        setVideos(fetchedVideos);
      }
      
    } catch (err) {
      console.error('Error in useVideosByCategory:', err);
      setError(err.message);
      // Use fallback data on error
      const fallbackVideos = videosData.filter(video => video.categoryId === categoryId);
      setVideos(fallbackVideos.slice(0, maxResults));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryVideos();
  }, [categoryId, maxResults]);
  
  return {
    videos,
    loading,
    error,
    refetch: fetchCategoryVideos
  };
};
