import React, { useEffect, useState, useRef } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(120000);
  const [pause, setPause] = useState(false);
  const timerRef = useRef(null);

 
  useEffect(() => {
    if (!pause) {
    timerRef.current = setInterval(() => {
      setTime((time) => {
        if (time <= 10) {
          clearInterval(timerRef.current);
          return 0;
        } else return time - 10;
      });
    }, 10); 
}
return () => clearInterval(timerRef.current);
  });
  
  function handlePauseToggle(event) {
    event.preventDefault();
    console.log("handle pause toggle triggered");
    setPause(!pause);
  }
  
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000 / 1000));
  const hundredths = Math.floor((time % 1000) / 10);

  return (
    <div className="CountdownTimer">
      <p>
        Time left: {`${minutes}`.padStart(2, 0)}:
        {`${seconds}`.padStart(2, 0)}:{`${hundredths}`.padStart(2, 0)}
      </p>
      <button onClick={handlePauseToggle}>{pause ? 'Resume' : 'Pause'}</button>
    </div>
  );
}