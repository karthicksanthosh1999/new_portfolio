import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  targetNumber: number;
  duration?: number; // in ms (default: 2000ms = 2s)
};

export default function AnimatedCounter({
  targetNumber,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const incrementTime = 30; // ms per frame
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span className="text-5xl">{count}</span>;
}
