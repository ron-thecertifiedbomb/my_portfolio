import { useEffect } from "react";

export function useScrollToTopWithHeader() {
  useEffect(() => {
    const main = document.getElementById("app-main-container");
    const header = document.getElementById("app-header");

    if (!main) return;

    const headerHeight = header?.offsetHeight ?? 0;

    // Scroll to top (offset by header height)
    main.scrollTo({
      top: headerHeight,
      behavior: "smooth",
    });
  }, []); 
}
