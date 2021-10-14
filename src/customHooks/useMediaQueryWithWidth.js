import { useCallback, useEffect, useState } from "react";

export const useMediaQueryWithWidth = (breakpoint) => {
  const [MatchQuerie, setMatchQuerie] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth < breakpoint) setMatchQuerie(true);
    else setMatchQuerie(false);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return [MatchQuerie, handleResize];
};
