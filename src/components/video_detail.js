import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div>
          <div id="title">{video.snippet.title}</div>
          <div id="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
