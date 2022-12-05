import { execute } from "../../../src/database/manager";
import { getVideos, getTrending, getTrendingIds } from "../../../src/database/queries";
import { generateUrl } from "../../../src/helper.js/generateUrl";

const getUrls = async () => {
  const videos = await getAllVideos();
  const urls = videos.map(video => generateUrl(video.title));
  return urls;
};

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
  let response = [];

  if (req.query.trending) response = await getTrendingVideos();
  else if (req.query.urls) response = await getUrls();
  else response = await getAllVideos();

  res.status(200).json(response);
}