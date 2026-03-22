import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleField = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 max-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 40,
          interactivity: {
            events: {
              onHover: { enable: false },
            },
          },
          particles: {
            color: { value: "#10b981" },
            links: {
              color: "#34d399",
              distance: 160,
              enable: true,
              opacity: 0.12,
              width: 0.8,
            },
            move: {
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 35 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
};

export default ParticleField;
