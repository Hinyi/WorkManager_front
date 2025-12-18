import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useActiveSection() {
  const [active, setActive] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();
  const last = useRef<string | null>(null);

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
          navigate(`#${id}`, { replace: true });
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ["hero", "product-viewer", "page-section"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname, navigate]);

  return active;
}
