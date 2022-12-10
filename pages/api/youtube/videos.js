import { execute } from "../../../src/database/manager";
import { getVideos, getTrending, getTrendingIds, getTotalVideoCount } from "../../../src/database/queries";
import { generateUrl } from "../../../src/helper/generateUrl";

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

const getVideosByPage = async ({ page = 0, count = 0 }) => {
  const key = 'videoId';
  const result = await execute(getVideos);
  let videoData = [...new Map(result.map(item => [item[key], item])).values()];

  if (page && count) return [...videoData?.splice(((page - 1) * count), count)];
  return videoData;
};

const getTrendingVideos = async ({ count = 0 }) => {
  const trendingIds = await execute(getTrendingIds);
  const ids = trendingIds.map(e => e.videoId);
  let trendingVideos = await execute(getTrending, [ids]);
  trendingVideos = trendingVideos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  const lastUpdatedTime = trendingVideos?.length > 0 ? trendingVideos[0]?.videoId : null;

  if (count) trendingVideos = trendingVideos.splice(0, count);
  return { lastUpdatedTime, trendingVideos };
};

const getTotalCount = async () => {
  const videoCount = await execute(getTotalVideoCount);
  return videoCount[0]?.total;
};

export default async function handler(req, res) {
  let response = [];

  if (req.query.trending) response = await getTrendingVideos(req.query);
  else if (req.query.urls) response = await getUrls();
  else if (req.query.videoCount) response = await getTotalCount();
  else if (req.query.page) response = await getVideosByPage(req.query);
  else response = await getAllVideos();

  res.status(200).json(response);
}