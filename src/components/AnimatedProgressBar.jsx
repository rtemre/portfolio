import { useEffect, useRef, useState } from "react";

function AnimatedProgressBar({ percentage, color = "bg-accent", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const node = progressRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [delay]);

  return (
    <div ref={progressRef} className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: isVisible ? `${percentage}%` : "0%" }}
      ></div>
    </div>
  );
}

export default AnimatedProgressBar;
