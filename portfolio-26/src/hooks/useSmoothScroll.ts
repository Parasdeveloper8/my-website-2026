import { useEffect } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with refined physics properties
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Request Animation Frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intercept all anchor link clicks for fluid link navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the closest anchor tag if clicking an inner element
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault(); // Prevent native browser instant jump
          
          // Animate the scroll to the target section smoothly
          lenis.scrollTo(targetElement as HTMLAnchorElement, {
            offset: -80, // Accounts for your sticky navbar height
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    // Attach listener to the document to handle all present and future links
    document.addEventListener("click", handleAnchorClick);

    // Clean up event listener and destroy instance on unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);
};