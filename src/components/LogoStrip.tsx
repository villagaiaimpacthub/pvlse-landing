interface LogoItem {
  name: string;
  src: string;
  alt: string;
  href?: string;
}

export default function LogoStrip({ items }: { items?: LogoItem[] }) {
  // Add null checking with default empty array
  const logoItems = items || [];
  
  // Triple the logos for seamless infinite scroll
  const tripleLogos = [...logoItems, ...logoItems, ...logoItems];
  
  return (
    <div className="py-8 md:py-12 my-12 md:my-16">
      <div className="container">
        <h1 className="text-center text-2xl font-semibold text-textPrimary mb-8">Trusted by innovative organizations</h1>
        <div className="overflow-hidden opacity-60 relative">
          <div 
            className="flex gap-4 sm:gap-8 will-change-transform items-center animate-scroll"
            style={{
              width: 'max-content'
            }}
          >
            {tripleLogos.map((logo, index) => {
              let logoSize = { width: '160px', height: '88px', maxHeight: '88px', maxWidth: '160px' };
              let marginRight = '';
              
              // Adjust sizes for specific logos with mobile optimizations
              if (logo.name === 'SGAIA') {
                logoSize = { width: '80px', height: '45px', maxHeight: '45px', maxWidth: '80px' };
              } else if (logo.name === 'Metaluck') {
                logoSize = { width: '120px', height: '70px', maxHeight: '70px', maxWidth: '120px' };
              } else if (logo.name === 'Fvtura') {
                logoSize = { width: '140px', height: '80px', maxHeight: '80px', maxWidth: '140px' };
              } else if (logo.name === 'GaiaNet') {
                logoSize = { width: '100px', height: '55px', maxHeight: '55px', maxWidth: '100px' };
              } else {
                logoSize = { width: '100px', height: '55px', maxHeight: '55px', maxWidth: '100px' };
              }
              
              // Use responsive classes instead of JavaScript to avoid hydration mismatch
              
              // Add spacing after SGAIA before it loops back to Fvtura
              if (logo.name === 'SGAIA') {
                marginRight = 'mr-8';
              }
              
              // Add spacing after GaiaNet before TechBricks
              if (logo.name === 'GaiaNet') {
                marginRight = 'mr-8';
              }
              
              // Special hover effects for TechBricks and SGAIA
              let hoverClasses = "hover:grayscale-0 hover:brightness-100";
              if (logo.name === 'TechBricks' || logo.name === 'SGAIA') {
                hoverClasses = "hover:grayscale-0 hover:brightness-200 hover:contrast-200";
              }
              
              // Create responsive class names for different logo sizes
              let responsiveClasses = '';
              if (logo.name === 'SGAIA') {
                responsiveClasses = 'max-h-[45px] max-w-[80px] md:max-h-[56px] md:max-w-[100px]';
              } else if (logo.name === 'Metaluck') {
                responsiveClasses = 'max-h-[70px] max-w-[120px] md:max-h-[100px] md:max-w-[180px]';
              } else if (logo.name === 'Fvtura') {
                responsiveClasses = 'max-h-[80px] max-w-[140px] md:max-h-[110px] md:max-w-[200px]';
              } else if (logo.name === 'GaiaNet') {
                responsiveClasses = 'max-h-[55px] max-w-[100px] md:max-h-[78px] md:max-w-[140px]';
              } else {
                responsiveClasses = 'max-h-[55px] max-w-[100px] md:max-h-[88px] md:max-w-[160px]';
              }

              const logoContent = (
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className={`w-auto filter brightness-90 grayscale ${hoverClasses} transition-all duration-300 object-contain ${responsiveClasses}`}
                />
              );
              
              return (
                <div key={`${logo.name}-${index}`} className={`flex-shrink-0 flex items-center justify-center ${marginRight}`} style={{ width: logoSize.width, height: logoSize.height }}>
                  {logo.href ? (
                    <a 
                      href={logo.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      {logoContent}
                    </a>
                  ) : (
                    logoContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-33.333%)); 
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}