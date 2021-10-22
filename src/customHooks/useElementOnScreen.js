import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(entry.isIntersecting);

      console.log(entry.target);
    }
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback, options);
    let curTarget = containerRef.current;
    if (curTarget) observer.observe(curTarget);

    return () => {
      if (curTarget) observer.unobserve(curTarget);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};

export { useElementOnScreen };
