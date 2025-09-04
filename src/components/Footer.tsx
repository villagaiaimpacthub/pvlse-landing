import data from "@/data/pvlse.json";
import PulseIcon from "@/components/PulseIcon";
import Link from "next/link";

export default function Footer() {
  const f = data.content.footer;
  
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <PulseIcon className="h-8" />
              <span className="text-white font-bold text-xl uppercase tracking-widest">PVLSE</span>
            </div>
            <p className="text-textSecondary text-sm leading-relaxed max-w-md">
              Enterprise collective intelligence that transforms how businesses operate by delivering unprecedented visibility, intelligent automation, and expert-level knowledge about your organization.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Links</h3>
            <div className="flex flex-col space-y-3">
              {f.links.map(l => (
                <Link 
                  key={l.label} 
                  href={l.href}
                  className="text-textSecondary hover:text-accent text-sm transition-colors duration-200 uppercase tracking-wide"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col space-y-3">
              {f.social.map(s => (
                <a 
                  key={s.label} 
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent text-sm transition-colors duration-200 uppercase tracking-wide"
                  aria-label={`Visit our ${s.label} page`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-textSecondary text-sm">
              © 2025 PVLSE. All rights reserved.
            </div>
            <div className="text-textSecondary text-sm">
              Built with care • <a href="https://lordicon.com/" className="hover:text-accent transition-colors">Icons by Lordicon.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}