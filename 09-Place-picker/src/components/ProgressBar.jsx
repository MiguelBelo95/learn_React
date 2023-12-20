import { useState, useEffect } from "react";



export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL")
      setRemainingTime(prevTime => prevTime - 10)
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("INTERVAL CLEARED");
    }
  }, []);

  return <progress value={remainingTime} max={timer} />
}
