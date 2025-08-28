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
        <h2 className="text-center text-2xl font-semibold text-textPrimary mb-8">Trusted by innovative organizations</h2>
        <div className="overflow-hidden opacity-60">
          <div 
            className="flex gap-16 will-change-transform items-center"
            style={{
              animation: 'logoScroll 30s linear infinite',
            }}
          >
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
      <style jsx global>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}