import VideoCard from "./VideoCard";
import { Video, VIDEOS } from "@/video";

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div className="p-2">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};
