export default function PageBG() {
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 top-0 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="h-full bg-[url('/bg-gradient.jfif')] bg-top bg-no-repeat opacity-[0.3] z-50"></div>
      </div>
    </>
  );
}
