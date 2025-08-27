import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import data from "@/data/pvlse.json";
import PulseIcon from "@/components/PulseIcon";

export default function Navbar() {
  const nav = data.content.nav;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
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
      // Special handling for product section - scroll to show only features
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        const offset = 150; // Adjust this value to hide the next section
        
        window.scrollTo({
          top: absoluteTop - offset,
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 focus-ring">
          <PulseIcon className="h-6" />
          <span className="text-white no-underline uppercase font-semibold text-sm tracking-widest">PVLSE</span>
        </Link>
        <nav className="hidden md:flex items-center relative pb-3">
          <div 
            className="absolute bottom-0 h-0.5 transition-all duration-300 ease-out"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
              backgroundColor: '#7C5CFF',
              marginTop: '10px'
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
      </div>
    </header>
  );
}