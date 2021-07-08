import React from "react";

import Video from "./Video";

const PlayList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
      <div>
        <h3
        >
          Play List
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default PlayList;