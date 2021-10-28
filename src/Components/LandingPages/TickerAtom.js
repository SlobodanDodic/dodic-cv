import React from "react";
import Ticker from "react-ticker";

const TickerAtom = () => {
  return (
    <div className="line">
      <Ticker speed={3}>
        {({ index }) => (
          <p>The sun is the same in a relative way but I'm older. . .</p>
        )}
      </Ticker>
    </div>
  );
};

export default TickerAtom;
