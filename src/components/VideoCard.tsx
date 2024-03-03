import React from "react";
import { Video } from "@/video";

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="p-3">
      <img src={"photo.png"} className="rounded-lg" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1 m-auto">
          <img
            src={video.thumbnail}
            alt=""
            className="rounded-full w-12 h-12 md:w-10 md:h-10"
          />
        </div>
        <div className="col-span-11">
          <div>{video.title}</div>
          <div className="text-gray-400 text-base">{video.description}</div>
          <div className="text-gray-400 text-base">
            {video.viewCount} | {video.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
