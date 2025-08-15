export default function Steps({ steps }: { steps: { title: string; body: string; media?: string }[] }) {
  return (
    <ol className="grid md:grid-cols-3 gap-6 counter-reset">
      {steps.map((s, i) => (
        <li key={s.title} className="card p-6 space-y-3">
          <div className="text-accent font-semibold">Step {i + 1}</div>
          <h3 className="text-xl font-semibold">{s.title}</h3>
          <p className="text-textSecondary">{s.body}</p>
          {s.media && <img src={`/assets/${s.media}.png`.replace("/assets/ui", "/assets/ui")} alt="" className="rounded-xl border border-hairline" />}
        </li>
      ))}
    </ol>
  );
}