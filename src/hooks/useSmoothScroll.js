import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useSmoothScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = useCallback(
    (id) => {
      const section = document.getElementById(id);

      if (section) {
        const headerHeight = 84;
        const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
        return;
      }

      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      }
    },
    [location.pathname, navigate]
  );

  return goTo;
}
