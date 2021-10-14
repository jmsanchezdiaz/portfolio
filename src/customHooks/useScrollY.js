import { useCallback, useEffect, useState } from "react";

const useScrollY = (breakpoint) => {
  const [isMatchWithScroll, setisMatchWithScroll] = useState(true);
  const handleScroll = useCallback(() => {
    if (window.scrollY === breakpoint) setisMatchWithScroll(true);
    else setisMatchWithScroll(false);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return [isMatchWithScroll, handleScroll];
};

export default useScrollY;
