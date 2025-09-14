import React, { useEffect, useState } from "react";

export const GalaxyBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    // Respawn meteors regularly so they don’t all delay
    const meteorInterval = setInterval(() => {
      generateMeteors();
    }, 2000); // every 2s new meteors

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        animationDelay: Math.random() * 5, // randomize start
      });
    }
    setStars(newStars);
  };

const generateMeteors = () => {
  const numberOfMeteors = 4;
  const newMeteors = [];
  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: Math.random(), // unique key
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 0,   // ⚡ almost no waiting (0–0.5s max)
      animationDuration: Math.random() * 3 + 3, // 3–6s for fast falling
    });
  }
  setMeteors(newMeteors);
};


  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
  {/* Background that reacts to theme */}
  <div className="absolute inset-0 bg-background transition-colors duration-500" />

  {/* Galaxy Nebula overlays */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.25),transparent_40%)] animate-[nebula-drift_40s_ease-in-out_infinite]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.20),transparent_45%)] animate-[nebula-drift-2_48s_ease-in-out_infinite]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_55%)]" />

  {/* Stars */}
  {stars.map((star) => (
    <div
      key={star.id}
      className="star animate-pulse-subtle"
      style={{
        width: star.size + "px",
        height: star.size + "px",
        left: star.x + "%",
        top: star.y + "%",
        opacity: star.opacity,
        animationDuration: star.animationDuration + "s",
        animationDelay: star.animationDelay + "s",
      }}
    />
  ))}

  {/* Meteors */}
  {meteors.map((meteor) => (
    <div
      key={meteor.id}
      className="meteor animate-meteor"
      style={{
        width: meteor.size * 50 + "px",
        height: meteor.size * 2 + "px",
        left: meteor.x + "%",
        top: meteor.y + "%",
        animationDelay: meteor.delay + "s",
        animationDuration: meteor.animationDuration + "s",
      }}
    />
  ))}
</div>

  );
};
