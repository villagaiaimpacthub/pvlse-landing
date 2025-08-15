import type { PropsWithChildren } from "react";

export default function Theme({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_100%_at_50%_0%,rgba(124,92,255,0.22)_0%,rgba(124,92,255,0)_60%),#0B0B0C]">
      {children}
    </div>
  );
}