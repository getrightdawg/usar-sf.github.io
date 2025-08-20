import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export function getLenis() {
  if (!lenis) {
    lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => {
      lenis!.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
  return lenis;
}
