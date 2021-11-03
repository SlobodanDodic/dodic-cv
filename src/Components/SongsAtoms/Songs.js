import React, { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import PlayList from "./PlayList";
import Waveform from "./Waveform";
import { tracks } from "./SongsData";

const Songs = () => {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="work-page">
      <div className="intro-block">
        <div className="monitor">
          <svg
            version="1.1"
            viewBox="0 0 500 200"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              className="ekg"
              points="486.6 113.8 328.2 113.8 310.3 132.3 296 70.7 246.8 127.4 241.6 120.2 233.9 166.4 227 27.6 213.2 118.3 211.8 112.3 205.1 126.1 198.2 108.5 194.1 124.4 184.5 92.9 174.1 113 4.3 113"
            />
          </svg>
        </div>
      </div>

      {selectedTrack.url ? (
        <div className="div-player">
          <Waveform url={selectedTrack.url} />
          <br />
          <div className="playlist-text">playlist (click on title):</div>
          <PlayList
            tracks={tracks}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
          />
        </div>
      ) : (
        <div className="loader-container">
          <h1>Loading...</h1>
          <ScaleLoader
            color="#858585"
            height="95px"
            width="7px"
            radius={7}
            margin={7}
          />
        </div>
      )}
    </div>
  );
};

export default Songs;
