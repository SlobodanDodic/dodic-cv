import React from "react";
import { GuitarsData } from "./GuitarsData";

const GuitarsMap = () => {
  return (
    <ul className="honeycomb">
      {GuitarsData.map((item) => {
        return (
          <li className="honeycomb-cell" key={item.id}>
            <img
              className="honeycomb-cell__image"
              src={item.src}
              alt="gitara"
            />
            <div className="honeycomb-cell__title">
              {item.title}
              <small>{item.small}</small>
              <small style={{ color: "red", fontSize: "0.75rem" }}>
                {item.isSold}
              </small>
            </div>
          </li>
        );
      })}
      <li className="honeycomb-cell honeycomb__placeholder"></li>
    </ul>
  );
};

export default GuitarsMap;
