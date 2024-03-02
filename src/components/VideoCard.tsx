import React from "react";

function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.img} className="rounded-lg" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1 m-auto">
          <img
            src={props.thumb}
            alt=""
            className="rounded-full w-12 h-12 md:w-10 md:h-10"
          />
        </div>
        <div className="col-span-11">
          <div>{props.title}</div>
          <div className="text-gray-400 text-base">{props.author}</div>
          <div className="text-gray-400 text-base">
            {props.view} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
