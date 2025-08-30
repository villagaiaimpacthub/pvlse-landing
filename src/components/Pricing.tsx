import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Pricing({ plans }: { plans: { name: string; price: string; period: string; features: string[]; cta: string; badge?: string }[] }) {
  return (
    <TooltipProvider>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((p) => (
          <Card key={p.name} className="group flex flex-col bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4 transition-all duration-300 ease-out">
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
            <CardContent className="flex-1 pt-0 transition-all duration-300 ease-out">
              <div className="mb-4">
                <span className="text-4xl font-bold text-textPrimary">{p.price}</span>{" "}
                <span className="text-muted transition-all duration-300 ease-out group-hover:text-textSecondary">{p.period}</span>
              </div>
              <ul className="space-y-2 text-textSecondary">
                {p.features.map((f, index) => {
                  if (f === "Hardware tooltip") {
                    return (
                      <li key={f} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90 flex items-center justify-between" style={{ transitionDelay: `${index * 50}ms` }}>
                        <span>• Dedicated on-premise hardware deployment</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="lucide lucide-info-icon lucide-info cursor-pointer text-accent hover:text-accentHover transition-colors ml-2 flex-shrink-0"
                            >
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4"/>
                              <path d="M12 8h.01"/>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-sm p-3 bg-panel border border-accent/30 shadow-lg">
                            <p className="text-sm text-textPrimary font-medium mb-1">Hardware Specifications:</p>
                            <p className="text-sm text-textSecondary">
                              Intel® Core™ Ultra 9, up to 99 AI TOPS, 96GB DDR5 RAM, Wi-Fi 7. PVLSE pre-configured hardware setup by our technicians. With a minimum 2 year commitment.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    );
                  }
                  if (f === "Cloud deployment tooltip") {
                    return (
                      <li key={f} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90 flex items-center justify-between" style={{ transitionDelay: `${index * 50}ms` }}>
                        <span>• Cloud deployment</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="lucide lucide-info-icon lucide-info cursor-pointer text-accent hover:text-accentHover transition-colors ml-2 flex-shrink-0"
                            >
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4"/>
                              <path d="M12 8h.01"/>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-sm p-3 bg-panel border border-accent/30 shadow-lg">
                            <p className="text-sm text-textPrimary font-medium mb-1">Enterprise Cloud Specifications:</p>
                            <p className="text-sm text-textSecondary">
                              8 vCores, 24 GB RAM, 200 GB SSD NVMe, Daily backup of the previous 24 hours, Unlimited traffic, 1.5 Gbps public bandwidth.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    );
                  }
                  if (f === "Enterprise cloud deployment tooltip") {
                    return (
                      <li key={f} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90 flex items-center justify-between" style={{ transitionDelay: `${index * 50}ms` }}>
                        <span>• Enterprise cloud deployment</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="lucide lucide-info-icon lucide-info cursor-pointer text-accent hover:text-accentHover transition-colors ml-2 flex-shrink-0"
                            >
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4"/>
                              <path d="M12 8h.01"/>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-sm p-3 bg-panel border border-accent/30 shadow-lg">
                            <p className="text-sm text-textPrimary font-medium mb-1">Enterprise Cloud Specifications:</p>
                            <p className="text-sm text-textSecondary">
                              16 vCores, 64 GB RAM, 350 GB SSD NVMe, Daily backup of the previous 24 hours, Unlimited traffic, 2.5 Gbps public bandwidth.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    );
                  }
                  return (
                    <li key={f} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90" style={{ transitionDelay: `${index * 50}ms` }}>• {f}</li>
                  );
                })}
              </ul>
            </CardContent>
            <CardFooter className="pt-0 transition-all duration-300 ease-out">
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
    </TooltipProvider>
  );
}