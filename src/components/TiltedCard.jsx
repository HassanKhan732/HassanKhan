// TiltedCard.jsx
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltedCard({ children, rotateAmplitude = 30, scaleOnHover = 1.12 }) {
  const ref = useRef(null);

  // Motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useSpring(1, { stiffness: 150, damping: 20 });

  // Mouse move handler
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    // Stronger tilt and smoother transition
    const rotateXValue = ((y - middleY) / middleY) * -rotateAmplitude;
    const rotateYValue = ((x - middleX) / middleX) * rotateAmplitude;

    // Clamp rotation so it never gets too extreme
    const maxTilt = 30;
    rotateX.set(Math.max(-maxTilt, Math.min(maxTilt, rotateXValue)));
    rotateY.set(Math.max(-maxTilt, Math.min(maxTilt, rotateYValue)));
  };

  const handleMouseEnter = () => scale.set(scaleOnHover);
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      style={{
        perspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
