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

              {item.isSold ? (
                <small
                  style={{
                    color: "red",
                    fontSize: "0.95rem",
                    letterSpacing: "1px",
                  }}
                >
                  sold
                </small>
              ) : (
                <small
                  style={{
                    color: "lime",
                    fontSize: "0.95rem",
                    letterSpacing: "1px",
                  }}
                >
                  still mine
                </small>
              )}
            </div>
          </li>
        );
      })}
      <li className="honeycomb-cell honeycomb__placeholder"></li>
    </ul>
  );
};

export default GuitarsMap;
