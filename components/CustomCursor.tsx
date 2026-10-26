"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
const [isPointer, setIsPointer] = useState(false);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
// Only enable on fine pointer devices (desktop / mouse)
const isFinePointer = window.matchMedia("(pointer: fine)").matches;
if (!isFinePointer) return;

setIsVisible(true);

const updateMouse = (e: MouseEvent) => {
setMousePosition({ x: e.clientX, y: e.clientY });

const target = e.target as HTMLElement | null;
if (target) {
const clickable = target.closest("button, a, input, select, textarea, [role='button']");
setIsPointer(!!clickable);
}
};

const handleMouseLeave = () => setIsVisible(false);
const handleMouseEnter = () => setIsVisible(true);

window.addEventListener("mousemove", updateMouse);
document.addEventListener("mouseleave", handleMouseLeave);
document.addEventListener("mouseenter", handleMouseEnter);

return () => {
window.removeEventListener("mousemove", updateMouse);
document.removeEventListener("mouseleave", handleMouseLeave);
document.removeEventListener("mouseenter", handleMouseEnter);
};
}, []);

if (!isVisible) return null;

return (
<>
{/* Precision Core Dot */}
<motion.div
className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#d4af37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
animate={{
x: mousePosition.x - 5,
y: mousePosition.y - 5,
scale: isPointer ? 1.5 : 1,
}}
transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
/>
{/* Editorial Outer Ring */}
<motion.div
className="fixed top-0 left-0 w-9 h-9 border border-[#d4af37]/60 rounded-full pointer-events-none z-[9998]"
animate={{
x: mousePosition.x - 18,
y: mousePosition.y - 18,
scale: isPointer ? 1.8 : 1,
borderColor: isPointer ? "#ec4899" : "rgba(212, 175, 55, 0.6)",
}}
transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.2 }}
/>
</>
);
}
