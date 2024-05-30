import { useEffect, useState } from "react";

const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => (time > 0 ? time - 100 : 0));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return [time, setIsActive, setTime];
};

export default useTimer;
