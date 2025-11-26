"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

type Props = { title: string }

function CTAButton({ title }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className="relative flex items-center justify-between pl-8 pr-2 py-2 rounded-full cursor-pointer overflow-hidden group"
            style={{
                width: '200px',
                height: '64px',
                backgroundColor: '#000000', // Default Black Background
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                className="absolute top-0 bottom-0 right-0 bg-white rounded-full pointer-events-none"
                initial={{ width: '0%' }}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1
                }}
                style={{ zIndex: 0 }}
            />

            {/* Text Content */}
            <motion.span
                className="relative z-10 text-base md:text-lg font-medium tracking-wide"
                animate={{ color: isHovered ? '#000000' : '#FFFFFF' }}
                transition={{ duration: 0.3 }}
            >
                {title}
            </motion.span>

            {/* Icon Container Circle */}
            <motion.div
                className="relative z-10 flex items-center justify-center rounded-full"
                style={{
                    width: '48px',
                    height: '48px',
                }}
                animate={{
                    backgroundColor: isHovered ? '#000000' : '#FFFFFF',
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Icon Animation */}
                <AnimatePresence mode="wait">
                    {isHovered ? (
                        <motion.div
                            key="arrow-hover"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowUpRight size={24} color="#FFFFFF" strokeWidth={2.5} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="arrow-default"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowUpRight size={24} color="#000000" strokeWidth={2.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
}

export default CTAButton