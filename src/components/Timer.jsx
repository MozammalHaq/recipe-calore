import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(0); // Initial minutes input
  const [secondsRemaining, setSecondsRemaining] = useState(null); // Time remaining in seconds
  const [message, setMessage] = useState(""); // Message to display

  // Convert minutes to seconds and start countdown
  const startTimer = () => {
    const totalSeconds = minutes * 60; // Convert minutes to seconds
    setSecondsRemaining(totalSeconds); // Set total seconds in state
    setMessage(""); // Reset message
  };

  // useEffect to handle the countdown logic
  useEffect(() => {
    if (secondsRemaining !== null && secondsRemaining > 0) {
      const timer = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);

      // Cleanup the interval on unmount
      return () => clearInterval(timer);
    } else if (secondsRemaining === 0) {
      setMessage("Time's up! Triggered!");
    }
  }, [secondsRemaining]);

  // Convert remaining seconds to minutes and seconds format
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`; // Format time as mm:ss
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          placeholder="Enter minutes"
          className="border rounded px-4 py-2"
        />
        <button
          onClick={startTimer}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Countdown
        </button>
      </div>

      {secondsRemaining !== null && (
        <div className="text-2xl font-bold">
          {secondsRemaining > 0 ? formatTime(secondsRemaining) : message}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
