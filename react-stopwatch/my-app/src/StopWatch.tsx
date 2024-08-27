import { FaPlay, FaPause } from 'react-icons/fa';
import { useState } from 'react';

export function StopWatch() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [isRunning, setIsRunning] = useState(false);

  function handlePlayClick() {
    setIsRunning(!isRunning);
    const watchId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    setIntervalId(watchId);
  }

  function handlePauseClick() {
    setIsRunning(!isRunning);
    clearInterval(intervalId);
  }

  function handleResetClick() {
    setCounter(0);
    setIntervalId((prev) => prev);
    console.log(counter);
  }

  return (
    <div className="main-div">
      <a href="#">
        <div className="watch" onClick={handleResetClick}>
          <p>{counter}</p>
        </div>
      </a>
      <div className="buttons">
        {!isRunning && (
          <a href="#">
            <FaPlay
              className={`fa play ${isRunning ? 'hidden' : ''}`}
              size="40px"
              onClick={handlePlayClick}
            />
          </a>
        )}
        {isRunning && (
          <a href="#">
            <FaPause
              className={`fa pause ${isRunning ? '' : 'hidden'}`}
              size="40px"
              onClick={handlePauseClick}
            />
          </a>
        )}
      </div>
    </div>
  );
}
