"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";

interface PricingTier {
  name: string;
  basePrice: number;
  perEmployeePrice: number;
  badge?: string;
  features: string[];
  cta: string;
}

interface SliderConfig {
  minEmployees: number;
  maxEmployees: number;
  defaultEmployees: number;
  step: number;
}

interface PricingSlidersProps {
  pricingTiers: PricingTier[];
  sliderConfig: SliderConfig;
}

export default function PricingSlider({ pricingTiers, sliderConfig }: PricingSlidersProps) {
  const [employeeCount, setEmployeeCount] = useState([sliderConfig.defaultEmployees]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculatePrice = (tier: PricingTier, employees: number) => {
    return tier.basePrice + (employees * tier.perEmployeePrice);
  };
  
  // Calculate prices for both tiers with current employee count
  const currentEmployees = employeeCount[0];
  const growthPrice = calculatePrice(pricingTiers[0], currentEmployees);
  const empirePrice = calculatePrice(pricingTiers[1], currentEmployees);
  
  // Determine which tier is more cost-effective
  const empireBetter = empirePrice < growthPrice;
  const crossoverPoint = Math.ceil((pricingTiers[1].basePrice - pricingTiers[0].basePrice) / (pricingTiers[0].perEmployeePrice - pricingTiers[1].perEmployeePrice));
  
  // Recommendation logic
  const getRecommendation = () => {
    if (currentEmployees >= crossoverPoint) {
      return {
        tier: "Empire",
        reason: `Save ${formatPrice(growthPrice - empirePrice)}/month with Empire`,
        savings: growthPrice - empirePrice
      };
    } else if (currentEmployees >= crossoverPoint * 0.8) {
      return {
        tier: "Empire",
        reason: "You're close to the crossover point - consider Empire for future growth",
        savings: 0
      };
    }
    return null;
  };
  
  const recommendation = getRecommendation();

  const renderPricingCard = (tier: PricingTier, tierIndex: number) => {
    const monthlyPrice = tierIndex === 0 ? growthPrice : empirePrice;
    const annualPrice = monthlyPrice * 12;
    const isRecommended = tierIndex === 1 ? empireBetter : !empireBetter;
    const isBetter = tierIndex === 1 && empireBetter;

    return (
      <div className="flex-1">
        <Card className={`group flex flex-col backdrop-blur-sm transition-all duration-500 h-full ${
          isRecommended 
            ? 'bg-accent/10 border-2 border-accent shadow-xl shadow-accent/20 scale-[1.03] ring-2 ring-accent/30' 
            : 'bg-panel/80 border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02]'
        }`}>
          {isRecommended && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-accent to-accentHover text-textPrimary text-sm font-semibold px-4 py-1 rounded-pill shadow-lg">
                💡 Recommended
              </div>
            </div>
          )}
          
          <CardHeader className="pb-4 transition-all duration-300 ease-out text-center relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h3 className={`text-2xl font-semibold transition-all duration-300 ease-out group-hover:drop-shadow-lg ${
                isRecommended ? 'text-accent' : 'text-textPrimary group-hover:text-accent'
              }`}>
                {tier.name}
              </h3>
              {tier.badge && (
                <Badge 
                  variant="secondary" 
                  className="text-accent bg-[rgba(124,92,255,0.18)] border-transparent hover:bg-[rgba(124,92,255,0.25)] text-sm px-3 py-1 rounded-pill transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-accent/30 group-hover:bg-[rgba(124,92,255,0.3)] group-hover:ring-2 group-hover:ring-accent/40"
                >
                  {tier.badge}
                </Badge>
              )}
            </div>
            
            <div className="mb-6">
              <div className={`text-4xl font-bold mb-2 ${isRecommended ? 'text-accent' : 'text-textPrimary'}`}>
                {formatPrice(monthlyPrice)} <span className="text-lg text-muted">per month</span>
              </div>
              <div className="text-sm text-textSecondary">
                Base: {formatPrice(tier.basePrice)} + {formatPrice(tier.perEmployeePrice)}/employee
              </div>
            </div>

          </CardHeader>

          <CardContent className="flex-1 pt-0 transition-all duration-300 ease-out">
            <ul className="space-y-2 text-textSecondary">
              {tier.features.map((feature, index) => (
                <li key={feature} className="transition-all duration-300 ease-out group-hover:text-textPrimary/90" style={{ transitionDelay: `${index * 50}ms` }}>
                  • {feature}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="pt-4 transition-all duration-300 ease-out">
            <Button 
              asChild 
              className="w-full bg-accent hover:bg-accentHover text-textPrimary font-semibold px-6 py-3 rounded-pill shadow-hard transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/40 hover:bg-gradient-to-r hover:from-accent hover:to-accentHover hover:ring-2 hover:ring-accent/50"
            >
              <a href="#demo">{tier.cta}</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <TooltipProvider>
      <div className="max-w-5xl mx-auto transform scale-[0.85] origin-top">
        {/* Shared Employee Count Slider */}
        <div className="mb-10 px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textPrimary leading-tight mb-3">
              How many employees in your organization?
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-accent">
              {currentEmployees.toLocaleString()} employees
            </div>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="p-4 bg-gradient-to-r from-accent/5 to-accentHover/5 rounded-xl border border-accent/20 shadow-sm">
              <Slider
                value={employeeCount}
                onValueChange={setEmployeeCount}
                max={sliderConfig.maxEmployees}
                min={sliderConfig.minEmployees}
                step={sliderConfig.step}
                className="w-full mb-3"
              />
              <div className="flex justify-between text-xs text-textSecondary">
                <span>1</span>
                <span>1000+</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {renderPricingCard(pricingTiers[0], 0)}
          {renderPricingCard(pricingTiers[1], 1)}
        </div>
      </div>
    </TooltipProvider>
  );
}