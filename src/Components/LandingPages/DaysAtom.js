import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

const DaysAtom = () => {
  const bDay = new Date("June 8, 1979, 01:25:00");
  const today = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  const diffDays = (today - bDay) / oneDay;
  const miliSec = diffDays * 1000 * 60 * 60 * 24;

  const [counter, setCounter] = useState(miliSec);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="days">
      <NumberFormat
        className="numbers"
        value={Math.round(diffDays)}
        displayType={"text"}
        format="##.####"
      />
      <p>days on Earth</p>
    </div>
  );
};

export default DaysAtom;
