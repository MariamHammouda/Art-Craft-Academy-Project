import React from 'react'

const VideoCard = ({ url, title, categoryTitle }) => {
 return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2">{title}</h4>
        {categoryTitle && (
          <p className="text-sm text-gray-500">{categoryTitle}</p>
        )}
      </div>
    </div>
  );
}

export default VideoCard