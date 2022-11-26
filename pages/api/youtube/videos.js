import { execute } from "../../../database/manager";
import { getVideos } from "../../../database/queries";

export default async function handler(req, res) {
  const key = 'videoId';
  const result = await execute(getVideos);
  const videos = [...new Map(result.map(item => [item[key], item])).values()];
  res.status(200).json(videos);
}