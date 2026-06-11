import { useEffect, useRef } from "react";

const lightSurfaceSelector = [
  ".paper-section",
  ".journey-closing",
  ".homepage-beliefs",
  ".homepage-journey",
].join(",");

const CursorHalo = () => {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halo = haloRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!halo || !finePointer.matches || reducedMotion.matches) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      halo.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const isOverLightSurface =
        event.target instanceof Element && Boolean(event.target.closest(lightSurfaceSelector));
      halo.dataset.visible = String(
        document.visibilityState === "visible" && !isOverLightSurface,
      );

      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const handlePointerLeave = () => {
      halo.dataset.visible = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div ref={haloRef} className="cursor-halo" aria-hidden="true" />;
};

export default CursorHalo;
