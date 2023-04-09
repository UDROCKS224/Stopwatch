import React, { useState, useRef } from "react";
import "./Stopwatch.css"; 

function Stopwatch() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 

  
  const incrementTime = () => {
    setTime(prevTime => prevTime + 1);
  };

  
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(incrementTime, 1000); 
    }
  };

  
  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current); 
  };

  
  const reset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current); 
  };

  
  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    const milliseconds = (time % 1000).toString().padStart(3, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="time">{formatTime()}</div>
      <div className="buttons">
        {!isRunning ? (
          <button className="start" onClick={start}>
            Start
          </button>
        ) : (
          <button className="stop" onClick={stop}>
            Stop
          </button>
        )}
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
