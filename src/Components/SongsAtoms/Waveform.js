import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#cfcfcf",
  progressColor: "#cd0000",
  cursorColor: "#cd0000",
  cursorWidth: 0,
  barGap: 2,
  barWidth: 1,
  barRadius: 1,
  responsive: true,
  height: 175,
  normalize: true,
  partialRender: true,
});

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [volume, setVolume] = useState(1);

  // create new WaveSurfer instance on component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    // wavesurfer.current.on("ready", function () {
    //   wavesurfer.current.play();
    //   setPlay(true);

    //   if (wavesurfer.current) {
    //     wavesurfer.current.setVolume(volume);
    //     setVolume(volume);
    //   }
    // });

    // wavesurfer.current.on("audioprocess", () => {
    //   if (wavesurfer.current) {
    //     wavesurfer.current.setCurrentTime(0);
    //     setCurrentTime(wavesurfer.getCurrentTime());
    //   }
    // });

    // Removes events, elements and disconnects Web Audio nodes when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  // const onVolumeChange = (e) => {
  //   const { target } = e;
  //   const newVolume = +target.value;

  //   if (newVolume) {
  //     setVolume(newVolume);
  //     wavesurfer.current.setVolume(newVolume || 1);
  //   }
  // };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
        {/* <input
          type="range"
          id="volume"
          name="volume"
          max="1"
          step="0.025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
        <label htmlFor="volume">Volume</label> */}
        {/* <div>{currentTime}</div> */}
      </div>
    </div>
  );
}
