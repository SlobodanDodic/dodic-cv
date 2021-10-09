import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import aria from "../Assets/about/guitars/aria.jpg";
import bass from "../Assets/about/guitars/bass.jpg";
import fenderA from "../Assets/about/guitars/fenderA.jpg";
import stagg from "../Assets/about/guitars/stagg.jpg";
import fenderE from "../Assets/about/guitars/fenderE.jpg";
import fender1 from "../Assets/about/guitars/fender1.jpg";
import gibson from "../Assets/about/guitars/gibson.jpg";
import ibanez from "../Assets/about/guitars/ibanez.jpg";
import mustang from "../Assets/about/guitars/mustang.jpg";
import toronado from "../Assets/about/guitars/toronado.jpg";

const About = () => {
  return (
    <div className="about">
      <ul className="honeycomb">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={fenderE} alt="gitara" />
          <div className="honeycomb-cell__title">
            Fender Strat
            <small>MIM</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={ibanez} alt="gitara" />
          <div className="honeycomb-cell__title">
            Ibanez Talman
            <small>302-IV</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={aria} alt="gitara" />
          <div className="honeycomb-cell__title">
            Aria Nashville
            <small>615-MK2</small>
          </div>
        </li>

        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={fenderA} alt="gitara" />
          <div className="honeycomb-cell__title">
            Fender CF140
            <small>SCE NAT</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={stagg} alt="gitara" />
          <div className="honeycomb-cell__title">
            Stagg
            <small>Acoustic</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={bass} alt="gitara" />
          <div className="honeycomb-cell__title">
            Harley Benton
            <small>Standard</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={gibson} alt="gitara" />
          <div className="honeycomb-cell__title">
            Gibson LesPaul
            <small>Copy Standard</small>
            <small style={{ color: "red", fontSize: "0.75rem" }}>SOLD</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={toronado} alt="gitara" />
          <div className="honeycomb-cell__title">
            Fender Squier
            <small>Toronado</small>
            <small style={{ color: "red", fontSize: "0.75rem" }}>SOLD</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={mustang} alt="gitara" />
          <div className="honeycomb-cell__title">
            Fender Squier
            <small>Mustang</small>
            <small style={{ color: "red", fontSize: "0.75rem" }}>SOLD</small>
          </div>
        </li>

        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={fender1} alt="gitara" />
          <div className="honeycomb-cell__title">
            Fender Strat
            <small>copy</small>
            <small style={{ color: "red", fontSize: "0.75rem" }}>SOLD</small>
          </div>
        </li>

        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
    </div>
  );
};

export default About;
