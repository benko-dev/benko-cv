import React from "react";
import gsap from "gsap";

export default function GsapMagnetic({ children }) {
  const magnetic = React.useRef(null);

  React.useEffect(() => {
    if (!magnetic.current) return null;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.35)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.35)",
    });

    const handleMouseMove = (e) => {
      if (!magnetic.current) return null;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 3);
      const y = clientY - (top + height / 3);
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      if (!magnetic.current) return null;
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!magnetic.current) return null;
      magnetic.current.removeEventListener("mousemove", handleMouseMove);
      magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
