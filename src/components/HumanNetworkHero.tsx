import { useEffect, useRef, useState } from "react";

const HumanNetworkHero = () => {
  const signalRef = useRef<HTMLDivElement>(null);
  const [portraitFailed, setPortraitFailed] = useState(false);

  useEffect(() => {
    const signal = signalRef.current;
    if (!signal) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const reset = () => {
      signal.style.setProperty("--signal-x", "0px");
      signal.style.setProperty("--signal-y", "0px");
      signal.style.setProperty("--portrait-x", "0px");
      signal.style.setProperty("--portrait-y", "0px");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion.matches || !finePointer.matches) return;

      const rect = signal.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      signal.style.setProperty("--signal-x", `${x * 14}px`);
      signal.style.setProperty("--signal-y", `${y * 10}px`);
      signal.style.setProperty("--portrait-x", `${x * -5}px`);
      signal.style.setProperty("--portrait-y", `${y * -4}px`);
    };

    signal.addEventListener("pointermove", onPointerMove);
    signal.addEventListener("pointerleave", reset);
    reduceMotion.addEventListener("change", reset);

    return () => {
      signal.removeEventListener("pointermove", onPointerMove);
      signal.removeEventListener("pointerleave", reset);
      reduceMotion.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div ref={signalRef} className="human-network" aria-hidden="true">
      <svg className="human-network__svg" viewBox="0 0 720 410">
        <ellipse className="human-network__orbit human-network__orbit--one" cx="360" cy="205" rx="320" ry="150" />
        <ellipse className="human-network__orbit human-network__orbit--two" cx="360" cy="205" rx="250" ry="185" />
        <ellipse className="human-network__orbit human-network__orbit--three" cx="360" cy="205" rx="188" ry="188" />
        <path className="human-network__link" d="M70 94 C210 112 250 164 330 188" />
        <path className="human-network__link" d="M650 126 C526 136 474 168 398 192" />
        <path className="human-network__link" d="M128 342 C232 302 276 260 338 230" />
        <path className="human-network__link human-network__link--warm" d="M604 330 C510 296 466 252 392 226" />
      </svg>

      <span className="human-network__node human-network__node--one" />
      <span className="human-network__node human-network__node--two" />
      <span className="human-network__node human-network__node--three" />
      <span className="human-network__node human-network__node--four" />

      <figure className="human-network__portrait">
        {!portraitFailed ? (
          <img
            src="/profile/portrait-temporary.jpg"
            alt=""
            width="400"
            height="400"
            onError={() => setPortraitFailed(true)}
          />
        ) : (
          <figcaption>راشد صبرة</figcaption>
        )}
      </figure>
    </div>
  );
};

export default HumanNetworkHero;
