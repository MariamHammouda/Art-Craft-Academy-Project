import { useState, useEffect } from 'react';
import { fetchChannelVideos, fetchCategorizedVideos } from '../services/youtubeApi';
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
 * Hook for fetching latest videos from multiple channels
 * @param {number} maxResults - Maximum results
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useLatestVideos = (maxResults = 20) => {
  // Define your channel configuration here
  const channels = [
    {
      channelId: import.meta.env.VITE_ORIGAMI_CHANNEL_ID || 'UC_default_origami',
      categoryId: 1,
      categoryTitleKey: 'categories.origamiWorld'
    },
    {
      channelId: import.meta.env.VITE_DRAWING_CHANNEL_ID || 'UC_default_drawing',
      categoryId: 2,
      categoryTitleKey: 'categories.drawing'
    },
    {
      channelId: import.meta.env.VITE_CRAFTS_CHANNEL_ID || 'UC_default_crafts',
      categoryId: 3,
      categoryTitleKey: 'categories.beadsJewelry'
    }
  ];

  return useYouTubeVideos(channels, Math.ceil(maxResults / channels.length));
};

/**
 * Hook for fetching videos by category
 * @param {number} categoryId - Category ID
 * @param {number} maxResults - Maximum results
 * @returns {Object} { videos, loading, error, refetch }
 */
export const useVideosByCategory = (categoryId, maxResults = 10) => {
  const { videos: allVideos, loading, error, refetch } = useLatestVideos(50);
  
  const [categoryVideos, setCategoryVideos] = useState([]);
  
  useEffect(() => {
    const filtered = allVideos.filter(video => video.categoryId === categoryId);
    setCategoryVideos(filtered.slice(0, maxResults));
  }, [allVideos, categoryId, maxResults]);
  
  return {
    videos: categoryVideos,
    loading,
    error,
    refetch
  };
};
