import React from "react";

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
  return (
    <div className="playlist">
      {tracks.map((track) => (
        <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item"
              : "playlist-item selected"
          }
          onClick={() => setSelectedTrack(track)}
        >
          {track.id}. {track.title} - <span className="tale">{track.tale}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayList;
