import { useReveal } from "./Motion";

export default function Section({ id, title, children }: { id?: string; title?: string; children: React.ReactNode }) {
  const ref = useReveal();
  return (
    <section id={id} className="py-24 md:py-28">
      <div ref={ref as any} className="container">
        {title && <h2 className="reveal text-3xl md:text-4xl font-semibold mb-6">{title}</h2>}
        <div className="reveal text-textSecondary text-lg">{children}</div>
      </div>
    </section>
  );
}