import { useRef, useState } from "react";
import "./style.css";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);

  let timeId = useRef();
  let count = useRef(0);
  const startHandler = () => {
    setSeconds(0);
    if (!timeId.current) {
      timeId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const resetHandler = () => {
    setSeconds(0);
    console.log(timeId.current);
    clearInterval(timeId.current);
  };

  const pauseHadler = () => {
    console.log(count.current, "count");

    if (count.current > 2) {
      alert("you are thrown out");
      clearInterval(timeId.current);
      setSeconds(0);
      count.current = 0;
      return;
    }
    if (timeId.current) {
      clearInterval(timeId.current);
      timeId.current = null;
      count.current++;
    } else {
      timeId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopHadler = () => {
    clearInterval(timeId.current);
    // setSeconds(0);
    timeId.current = null;
  };

  return (
    <div className="container">
      <h1 className="title">stop watch</h1>

      <div className="watch-wrapper">
        <p className="watch">{seconds}</p>
        <div className="button-wrappers">
          <button className="buttons" onClick={startHandler}>
            start
          </button>
          <button className="buttons" onClick={stopHadler}>
            stop
          </button>
          <button className="buttons" onClick={resetHandler}>
            reset
          </button>
          <button className="buttons" onClick={pauseHadler}>
            pouse
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
