import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Steps({ steps }: { steps: { title: string; body: string; media?: string }[] }) {
  return (
    <ol className="grid md:grid-cols-3 gap-6">
      {steps.map((s, i) => (
        <li key={s.title}>
          <Card className="group h-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 hover:bg-gradient-to-br hover:from-accent/10 hover:via-accent/5 hover:to-transparent hover:border-accent/50 hover:ring-2 hover:ring-accent/20">
            <CardHeader className="space-y-3 transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
              <Badge 
                variant="secondary" 
                className="bg-accent text-accent-foreground hover:bg-accent/80 w-fit transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-accent/30 group-hover:ring-2 group-hover:ring-accent/40 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent/80"
              >
                Step {i + 1}
              </Badge>
              <h3 className="text-xl font-semibold transition-all duration-300 ease-out group-hover:text-accent group-hover:drop-shadow-lg">{s.title}</h3>
              <p className="text-textSecondary transition-all duration-300 ease-out group-hover:text-textPrimary/90">{s.body}</p>
            </CardHeader>
            {s.media && (
              <CardContent className="pt-0 transition-all duration-300 ease-out group-hover:translate-y-[-1px]">
                <img 
                  src={`/assets/${s.media}.png`.replace("/assets/ui", "/assets/ui")} 
                  alt="" 
                  className="rounded-xl border border-hairline w-full transition-all duration-300 ease-out group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:scale-[1.02]" 
                />
              </CardContent>
            )}
          </Card>
        </li>
      ))}
    </ol>
  );
}