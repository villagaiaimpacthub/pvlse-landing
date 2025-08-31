import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import data from "@/data/pvlse.json";
import PulseIcon from "@/components/PulseIcon";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const nav = data.content.nav;
  const [activeIndex, setActiveIndex] = useState(-1); // -1 represents logo/hero active
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeIndex === -1) {
      // Hide underline when logo/hero is active
      setLineStyle({ left: 0, width: 0 });
    } else if (navRef.current && itemRefs.current[activeIndex]) {
      const activeItem = itemRefs.current[activeIndex];
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        setLineStyle({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeIndex]);

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If near top of page, activate logo
      if (scrollY < windowHeight * 0.5) {
        if (activeIndex !== -1) setActiveIndex(-1);
        return;
      }

      // Check which section is in view
      nav.forEach((item, index) => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          const currentPosition = scrollY + windowHeight * 0.5;
          
          if (currentPosition >= elementTop && currentPosition < elementBottom) {
            if (activeIndex !== index) setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [nav, activeIndex]);

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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex(-1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      const navbarHeight = 64; // navbar height (h-16 = 64px)
      const viewportHeight = window.innerHeight;
      const sectionHeight = (targetElement as HTMLElement).offsetHeight;
      
      // Sections that need positioning adjustments
      const productAndFAQ = ['#product', '#faq'];
      const shouldMoveUp = productAndFAQ.includes(href);
      const isPricing = href === '#pricing';
      const isWhy = href === '#why';
      const isMoments = href === '#moments';
      
      let scrollPosition;
      if (shouldMoveUp) {
        // Position section slightly higher than center (more space below)
        const upperPosition = (viewportHeight * 0.42) + navbarHeight; // 42% from top
        const sectionMiddle = absoluteTop + (sectionHeight / 2);
        scrollPosition = sectionMiddle - upperPosition;
      } else if (isPricing) {
        // Position pricing section in the center of viewport
        const pricingPosition = (viewportHeight * 0.5) + navbarHeight; // 50% from top (center)
        const sectionMiddle = absoluteTop + (sectionHeight / 2);
        scrollPosition = sectionMiddle - pricingPosition;
      } else if (isWhy) {
        // Position Why PVLSE 2% lower than product/faq but still above center
        const whyPosition = (viewportHeight * 0.44) + navbarHeight; // 44% from top (42% + 2%)
        const sectionMiddle = absoluteTop + (sectionHeight / 2);
        scrollPosition = sectionMiddle - whyPosition;
      } else if (isMoments) {
        // Position PVLSE Effect 2% lower than center
        const momentsPosition = (viewportHeight * 0.52) + navbarHeight; // 52% from top (50% + 2%)
        const sectionMiddle = absoluteTop + (sectionHeight / 2);
        scrollPosition = sectionMiddle - momentsPosition;
      } else {
        // Standard center positioning for other sections
        const sectionMiddle = absoluteTop + (sectionHeight / 2);
        const viewportMiddle = (viewportHeight * 0.5) + navbarHeight;
        scrollPosition = sectionMiddle - viewportMiddle;
      }
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-[100] backdrop-blur-md bg-black/50">
      <div className="container flex items-center justify-between h-16">
        <Link 
          href="/" 
          ref={logoRef}
          className={`flex items-center gap-3 focus-ring transition-opacity duration-400 ease-out ${
            activeIndex === -1 ? 'opacity-100' : 'opacity-70 hover:opacity-90'
          }`}
          onClick={handleLogoClick}
        >
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
          className="md:hidden flex flex-col gap-1 p-3 min-w-[44px] min-h-[44px] justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-md bg-black/90 border-t border-white/10 z-[110]">
          <div className="container py-6">
            <nav className="space-y-2 mb-8">
              {nav.map((item, index) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block text-white hover:text-accent no-underline uppercase font-semibold text-sm tracking-widest py-4 px-2 min-h-[44px] flex items-center border-b border-white/5 last:border-b-0"
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