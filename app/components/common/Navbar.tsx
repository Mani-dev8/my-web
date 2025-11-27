"use client"
import {
    AnimatePresence,
    LayoutGroup,
    motion,
    useMotionValueEvent,
    useScroll
} from "framer-motion";
import {
    Activity,
    ArrowRight,
    Box,
    Layers,
    Moon,
    Sun,
    Zap
} from "lucide-react";
import React, { useState } from "react";
import MagneticItem from "./MagneticItem";

// --- Types ---
type NavItem = {
    id: string;
    label: string;
    icon: React.ElementType;
};

// --- Data ---
const NAV_ITEMS: NavItem[] = [
    { id: "about-us", label: "About Us", icon: Box },
    { id: "blog", label: "Blog", icon: Activity },
    { id: "contact-us", label: "Contact Us", icon: Layers },
];

// --- Sub-Component: Mobile Menu Overlay ---
const MobileMenu = ({
    isOpen,
    setIsOpen,
    activeId,
}: {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    activeId: string | null;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                    animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                    exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl"
                >
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                            open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                        }}
                        className="flex flex-col gap-8 text-center"
                    >
                        {NAV_ITEMS.map((item) => (
                            <motion.a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                variants={{
                                    open: { y: 0, opacity: 1 },
                                    closed: { y: 20, opacity: 0 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-4xl font-bold tracking-tight ${activeId === item.id
                                    ? "text-indigo-600"
                                    : "text-slate-800"
                                    }`}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- Main Component: Advanced Navbar ---
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [activeNav, setActiveNav] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const shouldBeScrolled = latest > 50;
        if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
        }
    });

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <LayoutGroup>
            <motion.nav
                initial={{ y: -100 }}
                animate={{
                    y: 0,
                    height: isScrolled ? 64 : 88,
                    backgroundColor: isScrolled
                        ? isDark
                            ? "rgba(0, 0, 0, 0.8)"
                            : "rgba(255, 255, 255, 0.8)"
                        : "transparent",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 
        ${isScrolled ? "backdrop-blur-md shadow-sm border-b border-slate-200/50" : ""}`}
            >
                <motion.div
                    className="flex items-center gap-2 cursor-pointer"
                    layout
                    animate={{ scale: isScrolled ? 0.9 : 1, x: isScrolled ? -10 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg shadow-lg">
                    </div>
                </motion.div>

                <div className="hidden md:flex items-center gap-2" onMouseLeave={() => setHoveredNav(null)}>
                    {NAV_ITEMS.map((item) => (
                        <MagneticItem key={item.id} className="relative z-10 group">
                            <button
                                onClick={() => setActiveNav(item.id)}
                                onMouseEnter={() => setHoveredNav(item.id)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeNav === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {item.label}
                                </span>

                                {hoveredNav === item.id && (
                                    <motion.div
                                        layoutId="navbar-pill"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        className="absolute inset-0 rounded-full bg-slate-100 -z-10"
                                    />
                                )}

                                {activeNav === item.id && (
                                    <motion.div
                                        layoutId="navbar-active-dot"
                                        className="absolute bottom-1 left-1/2 w-1 h-1 bg-indigo-500 rounded-full -translate-x-1/2"
                                    />
                                )}
                            </button>
                        </MagneticItem>
                    ))}
                </div>

                <div className="md:hidden relative z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-800 focus:outline-none"
                    >
                        <motion.div
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            className="w-6 h-6 flex flex-col justify-center gap-[5px]"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 7 }
                                }}
                                className="w-full h-0.5 bg-current block rounded-full origin-center"
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                className="w-full h-0.5 bg-current block rounded-full"
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -7 }
                                }}
                                className="w-full h-0.5 bg-current block rounded-full origin-center"
                            />
                        </motion.div>
                    </button>
                </div>
            </motion.nav>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
                activeId={activeNav}
            />
        </LayoutGroup>
    );
};


export default Navbar