import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;
