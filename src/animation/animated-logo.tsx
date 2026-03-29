
import { motion, useAnimation, useCycle } from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#1f8d93", "#f59e42", "#a855f7", "#f43f5e", "#facc15"];

export default function AnimatedLogo() {
    // Color cycling
    const [fill, cycleFill] = useCycle(...COLORS);
    useEffect(() => {
        const interval = setInterval(() => cycleFill(), 2200);
        return () => clearInterval(interval);
    }, [cycleFill]);

    // Controls for entrance and floating
    const controls = useAnimation();
    useEffect(() => {
        controls.start({
            scale: [0.7, 1.1, 1],
            rotate: [-20, 8, 0],
            opacity: [0, 1],
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 14,
                duration: 1.2,
            },
        });
        // Floating loop
        controls.start({
            y: [0, -8, 0, 8, 0],
            transition: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
            },
        });
    }, [controls]);

    return (
        <motion.svg viewBox="0 0 600 400" className="h-full w-full">
            <motion.text
                x="-30"
                y="120"
                fontSize="200"
                fontFamily="cursive"
                width={400}
                fill="transparent"
                stroke={fill}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 6px #1f8d9388)" }}
            >
                Rishu
            </motion.text>
        </motion.svg>
    );
}
