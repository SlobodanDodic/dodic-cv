import React from "react";
import Particles from "react-particles-js";

const ParticlesAtom = () => {
  return (
    <Particles
      className="particles-container"
      params={{
        particles: {
          number: { value: 75 },
          size: { value: 2 },
          move: { speed: 1 },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
            },
            resize: false,
          },
        },
      }}
    />
  );
};

export default ParticlesAtom;
