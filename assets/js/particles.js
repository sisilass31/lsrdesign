document.addEventListener("DOMContentLoaded", () => {
  if (!window.FinisherHeader) return;

  // Par défaut -> dark mode
  let colors = ["#ffffff", "#ff8600", "#ffffff"];
  let blending = "overlay";

  // Détection light mode
  const isLight = document.body.classList.contains("light") || window.matchMedia("(prefers-color-scheme: light)").matches;

  if (isLight) {
    colors = ["#131313", "#ff8600", "#131313"];
    blending = "none";
  }

  new FinisherHeader({
    count: 80,
    size: { min: 2, max: 4, pulse: 0 },
    speed: { x: { min: 0, max: 0.2 }, y: { min: 0, max: 0.2 } },
    colors: { particles: colors },
    blending: blending,
    opacity: { center: 1, edge: 0 },
    skew: 0,
    shapes: ["c"]
  });
});
