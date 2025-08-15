export default function Quote({ text, author }: { text: string; author?: string }) {
  return (
    <div className="card p-8">
      <blockquote className="text-2xl leading-snug">"{text}"</blockquote>
      {author && <div className="mt-4 text-muted">— {author}</div>}
    </div>
  );
}