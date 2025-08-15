import data from "@/data/pvlse.json";

export default function Footer() {
  const f = data.content.footer;
  return (
    <footer className="mt-24 border-t border-hairline bg-[#0A0A0B]">
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        <div className="text-muted">© 2025 PVLSE. All rights reserved.</div>
        <nav className="flex gap-6 text-textSecondary">
          {f.links.map(l => <a key={l.label} href={l.href} className="hover:text-textPrimary">{l.label}</a>)}
        </nav>
        <div className="flex gap-6 justify-start md:justify-end text-textSecondary">
          {f.social.map(s => <a key={s.label} href={s.href} className="hover:text-textPrimary">{s.label}</a>)}
        </div>
      </div>
    </footer>
  );
}