import { useEffect, useRef, useState } from "react";

function AnimationTrigger({
  children,
  animationClass = "animate-fade-in",
  delay = 0,
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [delay, threshold]);

  return (
    <div ref={elementRef} className={`${isVisible ? animationClass : ""}`}>
      {children}
    </div>
  );
}

export default AnimationTrigger;
