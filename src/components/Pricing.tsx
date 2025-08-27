import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pricing({ plans }: { plans: { name: string; price: string; period: string; features: string[]; cta: string; badge?: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <Card key={p.name} className="group flex flex-col bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
          <CardHeader className="pb-4 transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-textPrimary transition-all duration-300 ease-out group-hover:text-accent group-hover:drop-shadow-lg">{p.name}</h3>
              {p.badge && (
                <Badge 
                  variant="secondary" 
                  className="text-accent bg-[rgba(124,92,255,0.18)] border-transparent hover:bg-[rgba(124,92,255,0.25)] text-sm px-3 py-1 rounded-pill transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-accent/30 group-hover:bg-[rgba(124,92,255,0.3)] group-hover:ring-2 group-hover:ring-accent/40"
                >
                  {p.badge}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-0 transition-all duration-300 ease-out group-hover:translate-y-[-1px]">
            <div className="mb-4">
              <span className="text-4xl font-bold text-textPrimary transition-all duration-300 ease-out group-hover:text-accent group-hover:drop-shadow-lg">{p.price}</span>{" "}
              <span className="text-muted transition-all duration-300 ease-out group-hover:text-textSecondary">{p.period}</span>
            </div>
            <ul className="space-y-2 text-textSecondary">
              {p.features.map((f, index) => (
                <li key={f} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90 group-hover:translate-x-1" style={{ transitionDelay: `${index * 50}ms` }}>• {f}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-0 transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
            <Button 
              asChild 
              className="w-full bg-accent hover:bg-accentHover text-textPrimary font-semibold px-6 py-3 rounded-pill shadow-hard transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/40 hover:bg-gradient-to-r hover:from-accent hover:to-accentHover hover:ring-2 hover:ring-accent/50"
            >
              <a href="#demo">{p.cta}</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}