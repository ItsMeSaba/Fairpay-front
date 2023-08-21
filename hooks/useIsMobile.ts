import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function check() {
      if (window.innerWidth < 835 && !isMobile) return setIsMobile(true);
      if (window.innerWidth > 835 && isMobile) return setIsMobile(false);
    }

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, [])

  return isMobile;
}