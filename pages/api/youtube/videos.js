import { execute } from "../../../src/database/manager";
import { getVideos, getTrending, getTrendingIds } from "../../../src/database/queries";

const getAllVideos = async () => {
  const key = 'videoId';
  const result = await execute(getVideos);

  return [...new Map(result.map(item => [item[key], item])).values()];
};

const getTrendingVideos = async () => {
  const trendingIds = await execute(getTrendingIds);
  const ids = trendingIds.map(e => e.videoId);
  const trendingVideos = await execute(getTrending, [ids]);
  const lastUpdatedTime = trendingVideos?.length > 0 ? trendingVideos[0]?.videoId : null;

  return { lastUpdatedTime, trendingVideos };
};

export default async function handler(req, res) {
  let videos = [];
  if (req.query.trending) videos = await getTrendingVideos();
  else videos = await getAllVideos();

  res.status(200).json(videos);
}