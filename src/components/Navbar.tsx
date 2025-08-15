import Link from "next/link";
import data from "@/data/pvlse.json";

export default function Navbar() {
  const nav = data.content.nav;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 focus-ring">
          <img src="/assets/pvlse-logo-light.svg" alt="PVLSE" className="h-6" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-textSecondary">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-textPrimary transition-colors">{item.label}</a>
          ))}
        </nav>
        <a href="#demo" className="button-primary focus-ring hidden sm:inline-flex">{data.components.Button?.cta?.label || "Get a Demo"}</a>
      </div>
    </header>
  );
}