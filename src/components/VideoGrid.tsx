import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    img: "photo.png",
    thumb: "logo.png",
    title: "How to Code in 30 Days",
    author: "Lakhan Rajput",
    view: "100k",
    timestamp: "2 days ago",
  },
  {
    img: "photo.png",
    thumb: "logo.png",
    title: "How to Code in 30 Days",
    author: "Lakhan Rajput",
    view: "100k",
    timestamp: "2 days ago",
  },
  {
    img: "photo.png",
    thumb: "logo.png",
    title: "How to Code in 30 Days",
    author: "Lakhan Rajput",
    view: "100k",
    timestamp: "2 days ago",
  },
  {
    img: "photo.png",
    thumb: "logo.png",
    title: "How to Code in 30 Days",
    author: "Lakhan Rajput",
    view: "100k",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            img={video.img}
            thumb={video.thumb}
            title={video.title}
            author={video.author}
            view={video.view}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
