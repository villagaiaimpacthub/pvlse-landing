import data from "@/data/pvlse.json";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const f = data.content.footer;
  
  return (
    <>
      <Separator className="bg-hairline" />
      <footer className="bg-[#0A0A0B] pt-12 pb-8">
        <div className="container">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Copyright section */}
            <div className="flex flex-col space-y-4">
              <div className="text-muted text-sm">
                © 2025 PVLSE. All rights reserved.
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
              <div className="text-textSecondary text-sm font-medium mb-2">Links</div>
              <div className="flex flex-col space-y-2">
                {f.links.map(l => (
                  <a 
                    key={l.label} 
                    href={l.href} 
                    className="text-textSecondary hover:text-textPrimary text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Social links */}
            <div className="flex flex-col space-y-3">
              <div className="text-textSecondary text-sm font-medium mb-2">Social</div>
              <div className="flex flex-col space-y-2">
                {f.social.map(s => (
                  <a 
                    key={s.label} 
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-textPrimary text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                    aria-label={`Visit our ${s.label} page`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom separator and additional info */}
          <div className="border-t border-hairline pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="text-muted text-xs">
                Built with care for modern teams
              </div>
              <div className="text-muted text-xs">
                Version 1.0.0
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}