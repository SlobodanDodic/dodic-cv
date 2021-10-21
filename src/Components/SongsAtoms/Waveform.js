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

  // create new WaveSurfer instance on component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
      </div>
    </div>
  );
}
