import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useActiveSection() {
  const [active, setActive] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();
  const last = useRef<string | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          if (!id || last.current === id) return;

          last.current = id;
          setActive(id);

          // Only navigate after initial page load
          if (hasInitialized.current) {
            navigate(`#${id}`, { replace: true });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ["hero-section", "product-viewer", "page-section"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    // Mark as initialized after a short delay
    setTimeout(() => {
      hasInitialized.current = true;
    }, 100);

    return () => {
      observer.disconnect();
      hasInitialized.current = false;
    };
  }, [location.pathname, navigate]);

  return active;
}
