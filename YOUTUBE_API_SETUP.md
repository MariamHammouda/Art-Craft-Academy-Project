# 🎥 YouTube API Integration Guide

## 🚀 Overview

Your website now supports **dynamic video loading** directly from YouTube channels! This means:
- ✅ **Automatic updates** when you upload new videos
- ✅ **Real view counts** and statistics
- ✅ **Multiple channel support** for different categories
- ✅ **Fallback to static data** if API is unavailable

## 🔑 Setup Instructions

### 1. **Get YouTube Data API Key**

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select existing one
3. Enable **YouTube Data API v3**
4. Create credentials → API Key
5. Copy your API key

### 2. **Configure Environment Variables**

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your API key and channel IDs to `.env`:
   ```env
   VITE_YOUTUBE_API_KEY=your_actual_api_key_here
   VITE_ORIGAMI_CHANNEL_ID=UC1234567890abcdef
   VITE_DRAWING_CHANNEL_ID=UC0987654321fedcba
   VITE_CRAFTS_CHANNEL_ID=UCabcdef1234567890
   ```

### 3. **Find Your Channel IDs**

**Method 1: From Channel URL**
- If your channel URL is: `https://www.youtube.com/channel/UC1234567890abcdef`
- Channel ID is: `UC1234567890abcdef`

**Method 2: From Custom URL**
- Go to your channel → About tab → Copy channel ID

**Method 3: Using API**
- Use: `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=YOUR_USERNAME&key=YOUR_API_KEY`

## 📁 Files Created

### **API Service** (`src/services/youtubeApi.js`)
- `fetchChannelVideos()` - Get videos from single channel
- `fetchCategorizedVideos()` - Get videos from multiple channels
- `searchVideos()` - Search videos by keyword
- Auto-categorization based on video titles
- View count and duration formatting

### **Custom Hooks** (`src/hooks/useYouTubeVideos.js`)
- `useLatestVideos()` - Fetch latest videos from all channels
- `useVideosByCategory()` - Filter videos by category
- `useYouTubeVideos()` - Generic video fetching hook
- Built-in loading states and error handling

### **Updated Components**
- ✅ **LatestVideos** - Now uses dynamic data with loading states
- ✅ **VideosByCategory** - Ready for dynamic integration
- ✅ **VideoCard** - Supports both static and dynamic data

## 🎯 Features

### **Smart Categorization**
Videos are automatically categorized based on title keywords:
- **Origami**: "origami", "paper fold"
- **Drawing**: "draw", "sketch", "paint"
- **Beads**: "bead", "jewelry", "bracelet"
- **Clay**: "clay", "pottery", "ceramic"
- **Preschool**: "preschool", "kids", "children"
- **Science**: "science", "experiment", "diy"
- **Recycling**: "recycle", "upcycle", "bottle"
- **Popsicle**: "popsicle", "stick", "wood"

### **Loading States**
- Beautiful skeleton loading animations
- Error handling with fallback to static data
- Graceful degradation when API is unavailable

### **Performance**
- Caching support ready
- Configurable result limits
- Efficient API usage

## 🔧 Usage Examples

### **Basic Usage**
```jsx
import { useLatestVideos } from '../hooks/useYouTubeVideos';

const MyComponent = () => {
  const { videos, loading, error } = useLatestVideos(10);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>{video.title}</div>
      ))}
    </div>
  );
};
```

### **Category-Specific Videos**
```jsx
import { useVideosByCategory } from '../hooks/useYouTubeVideos';

const OrigimiVideos = () => {
  const { videos, loading } = useVideosByCategory(1, 5); // Category 1 = Origami
  // ... render videos
};
```

## 🛡️ Fallback System

If YouTube API is unavailable:
1. **No API Key** → Uses static `videosData.js`
2. **API Error** → Falls back to static data
3. **Network Issues** → Shows cached data or static data
4. **Rate Limits** → Graceful degradation

## 📊 API Limits

**YouTube Data API v3 Quotas:**
- **Free tier**: 10,000 units/day
- **Typical costs**:
  - Channel videos: ~3 units per request
  - Video statistics: ~1 unit per video
  - Search: ~100 units per request

**Optimization Tips:**
- Cache results in localStorage
- Use reasonable `maxResults` limits
- Consider implementing request throttling

## 🚀 Next Steps

1. **Set up API key** and test with your channels
2. **Customize categorization** logic in `youtubeApi.js`
3. **Add caching** for better performance
4. **Implement search** functionality
5. **Add video upload notifications**

## 🎉 Benefits

- ✅ **Always fresh content** - New videos appear automatically
- ✅ **Real statistics** - Actual view counts and engagement
- ✅ **Multiple channels** - Support different content creators
- ✅ **Bilingual support** - Works with your localization system
- ✅ **Professional look** - Loading states and error handling
- ✅ **SEO friendly** - Dynamic meta tags and descriptions

Your website is now ready for **dynamic YouTube integration**! 🎬
