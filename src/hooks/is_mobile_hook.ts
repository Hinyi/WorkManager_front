import { useEffect, useState } from "react";

export function IsMobile(): boolean {
  // Check using media query
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return isMobile;
}
