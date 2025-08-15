export default function Pricing({ plans }: { plans: { name: string; price: string; period: string; features: string[]; cta: string; badge?: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <div key={p.name} className="card p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            {p.badge && <span className="text-accent bg-[rgba(124,92,255,0.18)] px-3 py-1 rounded-pill text-sm">{p.badge}</span>}
          </div>
          <div className="mt-4"><span className="text-4xl font-bold">{p.price}</span> <span className="text-muted">{p.period}</span></div>
          <ul className="mt-4 space-y-2 text-textSecondary">{p.features.map(f => <li key={f}>• {f}</li>)}</ul>
          <a href="#demo" className="button-primary mt-6 self-start">{p.cta}</a>
        </div>
      ))}
    </div>
  );
}