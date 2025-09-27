import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaEye, FaThumbsUp, FaShare, FaBookmark, FaArrowLeft } from 'react-icons/fa6';
import { useLatestVideos } from '../../hooks/useYouTubeVideos';
import { videosData } from '../../mockData/videosData';
import VideoCard from '../Videos/VideoCard';
import { formatViewCount } from '../../services/youtubeApi';

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { videos: dynamicVideos, loading } = useLatestVideos(20);
  
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    console.log('🔍 VideoDetailPage - Looking for video:', { videoId, dynamicVideosCount: dynamicVideos.length });
    
    // Find video from dynamic videos or fallback to static data
    const allVideos = dynamicVideos.length > 0 ? dynamicVideos : videosData;
    console.log('📹 Available videos:', allVideos.map(v => ({ id: v.id, title: v.title })));
    
    const foundVideo = allVideos.find(v => v.id.toString() === videoId);
    console.log('🎯 Found video:', foundVideo);
    
    if (foundVideo) {
      setVideo(foundVideo);
      
      // Get related videos from same category
      const related = allVideos
        .filter(v => v.id.toString() !== videoId && v.categoryId === foundVideo.categoryId)
        .slice(0, 6);
      setRelatedVideos(related);
    }
  }, [videoId, dynamicVideos]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="aspect-video bg-gray-300 rounded-lg mb-6"></div>
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('videos.notFound')}</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[#59ACBE] text-white rounded-lg hover:bg-[#4a9bb0] transition-colors"
          >
            {t('common.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const videoTitle = video.titleKey ? t(video.titleKey) : video.title;
  const categoryTitle = video.categoryTitleKey ? t(video.categoryTitleKey) : video.categoryTitle;
  const description = video.description || `${t('videos.learnHow')} ${videoTitle.toLowerCase()}. ${t('videos.stepByStep')}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#59ACBE] hover:text-[#4a9bb0] font-medium transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              {/* Title and Category */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#59ACBE]/10 text-[#59ACBE] rounded-full text-sm font-medium mb-3">
                  {categoryTitle}
                </span>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {videoTitle}
                </h1>
              </div>

              {/* Video Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4" />
                  <span>{formatViewCount(video.views || 0)} {t('videos.views')}</span>
                </div>
                {video.likes && (
                  <div className="flex items-center gap-2">
                    <FaThumbsUp className="w-4 h-4" />
                    <span>{formatViewCount(video.likes)} {t('videos.likes')}</span>
                  </div>
                )}
                {video.publishedAt && (
                  <div className="text-sm">
                    {t('videos.published')}: {new Date(video.publishedAt).toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#59ACBE] text-white rounded-lg hover:bg-[#4a9bb0] transition-colors">
                  <FaThumbsUp className="w-4 h-4" />
                  {t('videos.like')}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaShare className="w-4 h-4" />
                  {t('videos.share')}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaBookmark className="w-4 h-4" />
                  {t('videos.save')}
                </button>
              </div>

              {/* Description */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('videos.description')}
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p className={`${!showFullDescription ? 'line-clamp-3' : ''}`}>
                    {description}
                  </p>
                  {description.length > 200 && (
                    <button
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="text-[#59ACBE] hover:text-[#4a9bb0] font-medium mt-2 transition-colors"
                    >
                      {showFullDescription ? t('videos.showLess') : t('videos.showMore')}
                    </button>
                  )}
                </div>
              </div>

              {/* Materials Needed Section */}
              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('videos.materialsNeeded')}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {/* Dynamic materials based on category */}
                  {video.categoryId === 1 && ( // Origami
                    <>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.origamiPaper')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.ruler')}
                      </div>
                    </>
                  )}
                  {video.categoryId === 2 && ( // Drawing
                    <>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.pencils')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.paper')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.eraser')}
                      </div>
                    </>
                  )}
                  {video.categoryId === 3 && ( // Beads
                    <>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.beads')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#59ACBE] rounded-full"></span>
                        {t('materials.string')}
                      </div>
                    </>
                  )}
                  {/* Add more categories as needed */}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('videos.relatedVideos')}
              </h3>
              
              {relatedVideos.length > 0 ? (
                <div className="space-y-4">
                  {relatedVideos.map((relatedVideo) => (
                    <div
                      key={relatedVideo.id}
                      onClick={() => navigate(`/video/${relatedVideo.id}`)}
                      className="cursor-pointer group"
                    >
                      <div className="flex gap-3">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 w-32 aspect-video bg-gray-200 rounded-lg overflow-hidden">
                          <iframe
                            className="w-full h-full pointer-events-none"
                            src={relatedVideo.url}
                            title={relatedVideo.titleKey ? t(relatedVideo.titleKey) : relatedVideo.title}
                            frameBorder="0"
                          ></iframe>
                        </div>
                        
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-[#59ACBE] transition-colors line-clamp-2 text-sm">
                            {relatedVideo.titleKey ? t(relatedVideo.titleKey) : relatedVideo.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {relatedVideo.categoryTitleKey ? t(relatedVideo.categoryTitleKey) : relatedVideo.categoryTitle}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatViewCount(relatedVideo.views || 0)} {t('videos.views')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  {t('videos.noRelatedVideos')}
                </p>
              )}
              
              {/* View All Videos Button */}
              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={() => navigate(`/category/${video.categoryId}`)}
                  className="w-full px-4 py-2 bg-[#59ACBE] text-white rounded-lg hover:bg-[#4a9bb0] transition-colors"
                >
                  {t('videos.viewAllInCategory')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
