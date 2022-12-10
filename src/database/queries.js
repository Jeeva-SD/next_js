// YOUTUBE
export const getVideos = `select v.id, v.videoId, v.title, v.thumbnail, v.duration, d.description, d.tags, v.channelTitle, v.publishedAt 
    from videos v, description d where v.id = d.id order by publishedAt desc;`;

export const getTrendingIds = 'select videoId, updatedTime from trending_videos;';

export const getTrending = `select v.id, v.videoId, v.title, v.thumbnail, v.duration, d.description, d.tags, v.channelTitle, v.publishedAt
    from description d, videos v where videoId in (?) and v.id = d.id;`;

export const getTotalVideoCount = `select count(id) as total from videos;`;