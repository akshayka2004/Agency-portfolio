import Image from "next/image";

/**
 * The T−0 logo.
 *
 * The source PNG is a 1536×1024 artboard with the mark centred inside a large
 * white margin, so we window in on the mark itself rather than shipping the
 * whitespace. The crop below maps to roughly x:[470,1075], y:[320,660] of the
 * artboard — mark plus the "CODE. DESIGN. AI SOLUTIONS" lockup.
 */
const CROP = {
  artboard: { w: 1536, h: 1024 },
  x: 470,
  y: 320,
  w: 605,
  h: 340,
};

export default function BrandMark({
  height = 36,
  className = "",
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const scale = height / CROP.h;
  const boxWidth = CROP.w * scale;

  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ width: boxWidth, height }}
    >
      <Image
        src="/t0-logo.png"
        alt="T−0 — Code. Design. AI Solutions."
        width={CROP.artboard.w}
        height={CROP.artboard.h}
        priority={priority}
        className="absolute max-w-none"
        style={{
          width: CROP.artboard.w * scale,
          height: CROP.artboard.h * scale,
          left: -CROP.x * scale,
          top: -CROP.y * scale,
        }}
      />
    </span>
  );
}
