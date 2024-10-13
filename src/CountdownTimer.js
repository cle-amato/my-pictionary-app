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
    setPause(!pause);
  }
  
  const minutes = `${Math.floor(time / 60000)}`.padStart(2, 0);
  const seconds = `${Math.floor((time % 60000 / 1000))}`.padStart(2,0);
  const hundredths = `${Math.floor((time % 1000) / 10)}`.padStart(2,0);
  const timeLeft = `${minutes}:${seconds}:${hundredths}`

  if (timeLeft != `00:00:00`) {
    return (
      <div className="CountdownTimer">
        <p>
          Time left: {timeLeft}
        </p>
        <button onClick={handlePauseToggle} className="pause-button">{pause ? 'Resume' : 'Pause'}</button>
        <div><button className="restart-button">Restart game</button></div>
      </div>
    );
  } else {
    return <div>
      <h2>time is up!</h2>
    <button className="restart-button">Restart game</button>
    </div>
  }
  
}
