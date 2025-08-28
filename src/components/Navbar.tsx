import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import data from "@/data/pvlse.json";
import PulseIcon from "@/components/PulseIcon";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const nav = data.content.nav;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (navRef.current && itemRefs.current[activeIndex]) {
      const activeItem = itemRefs.current[activeIndex];
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        setLineStyle({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeIndex]);

  const handleNavClick = (index: number, href: string) => {
    // Update the active nav animation
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      const currentItem = itemRefs.current[activeIndex];
      const newItem = itemRefs.current[index];
      
      if (currentItem && newItem) {
        const currentPos = currentItem.offsetLeft;
        const currentWidth = currentItem.offsetWidth;
        const newPos = newItem.offsetLeft;
        const newWidth = newItem.offsetWidth;

        if (newPos >= currentPos) {
          setLineStyle({ left: currentPos, width: (newPos - currentPos) + newWidth });
          setTimeout(() => {
            setLineStyle({ left: newPos, width: newWidth });
            setActiveIndex(index);
            setTimeout(() => setIsAnimating(false), 150);
          }, 300);
        } else {
          setLineStyle({ left: newPos, width: (currentPos - newPos) + currentWidth });
          setTimeout(() => {
            setLineStyle({ left: newPos, width: newWidth });
            setActiveIndex(index);
            setTimeout(() => setIsAnimating(false), 150);
          }, 300);
        }
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (href === '#product') {
      // Scroll to exact position to match screenshot  
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        const scrollUpOffset = 57; // Adjust to match screenshot positioning
        
        window.scrollTo({
          top: absoluteTop - scrollUpOffset,
          behavior: 'smooth'
        });
      }
    } else if (href === '#why') {
      // Special positioning for Why PVLSE section - position "Wellbeing isn't a perk" heading in top third
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const heading = targetElement.querySelector('h2');
        if (heading) {
          const rect = heading.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + rect.top;
          const viewportPosition = window.innerHeight / 4.5; // Position heading in top area
          
          window.scrollTo({
            top: absoluteTop - viewportPosition,
            behavior: 'smooth'
          });
        }
      }
    } else if (href === '#pricing') {
      // Adjusted positioning for Pricing section after heading structure change
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        const scrollUpOffset = 5; // Less offset due to larger headings
        
        window.scrollTo({
          top: absoluteTop - scrollUpOffset,
          behavior: 'smooth'
        });
      }
    } else if (href === '#faq') {
      // Adjusted positioning for FAQ section after heading structure change
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        const scrollUpOffset = 5; // Less offset due to larger headings
        
        window.scrollTo({
          top: absoluteTop - scrollUpOffset,
          behavior: 'smooth'
        });
      }
    } else if (href === '#moments') {
      // Special positioning for PVLSE Effect section - scroll down 30px from standard position
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        const scrollUpOffset = 30; // Scroll up 30px from current position
        
        window.scrollTo({
          top: absoluteTop - scrollUpOffset,
          behavior: 'smooth'
        });
      }
    } else {
      // Standard smooth scroll for other sections
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-[100] backdrop-blur-md bg-black/50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 focus-ring">
          <PulseIcon className="h-6" />
          <span className="text-white no-underline uppercase font-semibold text-sm tracking-widest">PVLSE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center relative">
            <div 
              className="absolute bottom-0 h-0.5 transition-all duration-300 ease-out"
              style={{
                left: `${lineStyle.left}px`,
                width: `${lineStyle.width}px`,
                backgroundColor: '#7C5CFF',
                transform: 'translateY(8px)'
              }}
            />
            <ul ref={navRef} className="flex items-center gap-10 text-textSecondary list-none p-0 m-0">
              {nav.map((item, index) => (
                <li 
                  key={item.label}
                  ref={el => { itemRefs.current[index] = el; }}
                  className={`transition-opacity duration-400 ease-out cursor-pointer ${
                    index === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  onClick={() => handleNavClick(index, item.href)}
                >
                  <a 
                    href={item.href} 
                    className="text-white no-underline uppercase font-semibold text-sm tracking-widest block"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Login/Preview Buttons - Hidden */}
          <div className="hidden">
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-5 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-md bg-black/90 border-t border-white/10 z-[110]">
          <div className="container py-4">
            <nav className="space-y-4 mb-8">
              {nav.map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block text-white hover:text-accent no-underline uppercase font-semibold text-sm tracking-widest py-2"
                  onClick={(e) => {
                    handleLinkClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}