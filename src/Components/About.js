import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import aria from "../Assets/about/guitars/aria.png";
import bass from "../Assets/about/guitars/bass.png";
import fenderA from "../Assets/about/guitars/fenderA.png";
import fenderE from "../Assets/about/guitars/fenderE.png";
import gibson from "../Assets/about/guitars/gibson.png";
import ibanez from "../Assets/about/guitars/ibanez.png";
import mustang from "../Assets/about/guitars/mustang.png";
import toronado from "../Assets/about/guitars/toronado.png";

const handleDragStart = (e) => e.preventDefault();

const itemsStill = [
  <img src={fenderE} onDragStart={handleDragStart} alt="fenderE" />,
  <img src={ibanez} onDragStart={handleDragStart} alt="ibanez" />,
  <img src={aria} onDragStart={handleDragStart} alt="aria" />,
  <img src={bass} onDragStart={handleDragStart} alt="bass" />,
  <img src={fenderA} onDragStart={handleDragStart} alt="fenderA" />,
];

const itemsOnce = [
  <img src={gibson} onDragStart={handleDragStart} alt="gibson" />,
  <img src={toronado} onDragStart={handleDragStart} alt="toronado" />,
  <img src={mustang} onDragStart={handleDragStart} alt="mustang" />,
];

const About = () => {
  return (
    <div className="about">
      <div className="text still">
        still{" "}
        <span style={{ color: "#cd0000", borderBottom: "1px solid #cd0000" }}>
          proud
        </span>{" "}
        owner
      </div>

      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={4000}
        keyboardNavigation={true}
        infinite={true}
        mouseTracking
        items={itemsStill}
      />

      {/* Centered text & logo */}
      <div className="text center">
        <span>pride</span>
        <span style={{ color: "#cd0000" }}>&</span>
        <span>joy</span>
      </div>

      <div className="once-alice">
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval={4000}
          keyboardNavigation={true}
          infinite={true}
          mouseTracking
          items={itemsOnce}
        />
      </div>

      <div className="text once">
        once{" "}
        <span style={{ color: "#cd0000", borderBottom: "1px solid #cd0000" }}>
          proud
        </span>{" "}
        owner
      </div>
    </div>
  );
};

export default About;
