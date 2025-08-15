import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it, idx) => <Item key={idx} {...it} />)}
    </div>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-4">
      <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(!open)}>
        <span className="font-medium">{q}</span>
        <span className="text-muted">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-textSecondary">{a}</p>}
    </div>
  );
}