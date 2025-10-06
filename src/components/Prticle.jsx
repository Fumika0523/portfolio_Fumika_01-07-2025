"use client";

import { useEffect } from "react";
import React from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ import theme

export default function Particle() {
  const { isDarkMode } = useTheme(); // ✅ get current theme

  useEffect(() => {
    const particlesConfig = {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: isDarkMode ? "#F0FFFF" : "#f56d05" }, // ✅ adapt color
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 180,
          color: isDarkMode ? "#088F8F" : "#FFFF00", // ✅ adapt link color too
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    };

    let addedScript = null;

    const initParticles = () => {
      const container = document.getElementById("particles-js");
      if (!container) return;
      if (!window.particlesJS) return;

      window.particlesJS("particles-js", particlesConfig);
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      addedScript = document.createElement("script");
      addedScript.src =
        "https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.min.js";
      addedScript.async = true;
      addedScript.onload = initParticles;
      document.body.appendChild(addedScript);
    }
  }, [isDarkMode]); // ✅ re-run when theme changes

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
