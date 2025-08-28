interface LogoItem {
  name: string;
  src: string;
  alt: string;
}

export default function LogoStrip({ items }: { items?: LogoItem[] }) {
  // Add null checking with default empty array
  const logoItems = items || [];
  
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logoItems, ...logoItems];
  
  return (
    <div className="py-8 md:py-12 my-12 md:my-16">
      <div className="container">
        <p className="text-center text-sm text-muted mb-8">Trusted by innovative organizations</p>
        <div className="overflow-hidden opacity-60">
          <div className="flex gap-16 animate-[scroll_30s_linear_infinite] will-change-transform items-center">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-10 w-auto filter brightness-90 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-300 object-contain"
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}