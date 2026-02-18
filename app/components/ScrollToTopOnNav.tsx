'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const docHeightRef = useRef(0);

    useEffect(() => {
        // Calculate dimensions
        const updateDimensions = () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            docHeightRef.current = Math.max(docHeight, 1);
        };

        // Initial measurement
        updateDimensions();

        // Use ResizeObserver to detect height changes instead of polling
        const resizeObserver = new ResizeObserver(() => {
            window.requestAnimationFrame(updateDimensions);
        });

        resizeObserver.observe(document.body);

        // Also handle window resize
        window.addEventListener('resize', updateDimensions);

        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Use ref value
            const scrollPercent = (scrollTop / docHeightRef.current) * 100;

            // Show button after scrolling 300px
            setIsVisible(scrollTop > 300);
            setScrollProgress(Math.min(scrollPercent, 100));
        };

        // Add scroll event listener with throttling via RAF
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener, { passive: true });

        return () => {
            window.removeEventListener('resize', updateDimensions);
            window.removeEventListener('scroll', scrollListener);
            resizeObserver.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed !bottom-[100px] right-4 sm:right-24 sm:bottom-5 z-50 group transition-all duration-500 ease-out ${isVisible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-0 pointer-events-none'
                }`}
        >
            {/* Progress Ring */}
            <div className="relative w-14 h-14">
                {/* Background Circle */}
                <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 56 56"
                >
                    <circle
                        cx="28"
                        cy="28"
                        r="26"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        opacity="0.3"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="28"
                        cy="28"
                        r="26"
                        fill="none"
                        stroke="#4241ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 26}`}
                        strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
                        className="transition-all duration-300"
                    />
                </svg>

                {/* Button Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4241ff] to-[#0353a4] rounded-full shadow-lg group-hover:shadow-xl group-hover:shadow-[#4241ff]/30 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                        <ChevronUp
                            size={18}
                            className="text-white group-hover:translate-y-[-2px] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </button>
    );
}
