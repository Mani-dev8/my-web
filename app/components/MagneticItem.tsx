import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
type Props = {
    children: React.ReactNode;
    className?: string;
}

function MagneticItem({
    children,
    className,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        position.x.set(middleX * 0.2);
        position.y.set(middleY * 0.2);
    };

    const reset = () => {
        position.x.set(0);
        position.y.set(0);
    };

    const { x, y } = position;
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default MagneticItem