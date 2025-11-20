'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the first section element
      const firstSection = document.getElementById('home');
      if (firstSection) {
        // Show button when scrolled past the first section
        const firstSectionBottom = firstSection.offsetTop + firstSection.offsetHeight;
        setIsVisible(window.scrollY > firstSectionBottom);
      }
    };

    // Check on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="!fixed !bottom-8 !cursor-pointer !right-8 !z-50 !bg-[#023E8A] hover:!bg-[#023E8A] !text-white !p-4 !rounded-full !shadow-lg !transition-all !duration-300 hover:!scale-110 !flex !items-center !justify-center"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} className="!text-white" />
    </button>
  );
}

