import React from "react";

interface ColoredIconProps {
  src: string;
  alt: string;
  size?: number;
  colorClass?: string; // Tailwind color class, e.g., bg-[#BFA372]
}

// Renders a solid-colored icon using CSS mask so the SVG/PNG shape is tinted crisply without filter artifacts.
export const ColoredIcon = ({ src, alt, size = 20, colorClass = "bg-[#BFA372]" }: ColoredIconProps): JSX.Element => {
  return (
    <span
      role="img"
      aria-label={alt}
      className={`${colorClass} inline-block`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
};

export default ColoredIcon;