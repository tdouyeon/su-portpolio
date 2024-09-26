"use client";

import { useEffect } from "react";

export default function StartBackground() {
  useEffect(() => {
    const createStars = () => {
      const starContainer = document.getElementById("starfield");
      const numStars = 100;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 3 + "px";
        Object.assign(star.style, {
          left: Math.random() * 100 + "vw",
          top: Math.random() * 2000 + "px",
          width: size,
          height: size,
        });

        fragment.appendChild(star);
      }

      starContainer?.appendChild(fragment);
    };

    createStars();
  }, []);

  return <div id="starfield" className="absolute inset-0 w-full h-full" />;
}
