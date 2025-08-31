import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Moments from "@/components/Moments";
import Section from "@/components/Section";
import LogoStrip from "@/components/LogoStrip";
import FeatureList from "@/components/FeatureList";
import Steps from "@/components/Steps";
import Quote from "@/components/Quote";
import PricingSlider from "@/components/PricingSlider";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroCTA from "@/components/HeroCTA";
import BenefitsToggle from "@/components/BenefitsToggle";
import data from "@/data/pvlse.json";

export default function Home() {
  const c = data.content;
  return (
    <Theme>
      <Navbar />
      <main>
<Hero heroData={data.content.hero} />
        <HeroCTA />
        
        <Moments />

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8"
                dangerouslySetInnerHTML={{ 
                  __html: "AI is here, and we have <span class='text-accent'>two choices</span>"
                }}
              />
              <p 
                className="text-xl md:text-2xl text-textSecondary leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: "We can squeeze more out of people — faster, longer, until they burn out. Or we can use AI to give people back their focus, energy, and creativity. We built PVLSE for the second path. Because <span class='text-accent'>when people thrive, so do organizations</span>."
                }}
              />
            </div>
          </div>
        </section>

        <BenefitsToggle />

        <Section id="why">
          <div className="max-w-6xl mx-auto">
            {/* Main heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
                Wellbeing isn't a perk<br />
                <span className="text-accent">It's a performance multiplier</span>
              </h2>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <p className="text-textPrimary font-medium text-lg leading-relaxed">
                    Clear the work no human was meant to do.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="text-textPrimary font-medium text-lg leading-relaxed">
                    Balance workloads in real time.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-textPrimary font-medium text-lg leading-relaxed">
                    Nudge rest before burnout hits.
                  </p>
                </div>
              </div>

            </div>

            {/* Second row - centered */}
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="group">
                  <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-textPrimary font-medium text-lg leading-relaxed">
                      Suggest skill-building that fits real interests.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-textPrimary font-medium text-lg leading-relaxed">
                      Balance productivity with human wellbeing for sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <FeatureList />

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                <span className="text-accent">Enterprise-grade ROI</span> that justifies the investment
              </h1>
              <h2 className="text-xl md:text-2xl text-textSecondary leading-relaxed mb-12">
                PVLSE delivers measurable returns that far exceed the investment. One prevented executive departure saves $500,000+ in replacement costs. Reduced turnover, improved productivity, and predictive wellness analytics create millions in value for enterprise clients.
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {c.roi.stats.map((s: any) => (
                  <div key={s.label} className="card p-6 text-center bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                    <div className="text-4xl font-bold text-accent">{s.number}</div>
                    <div className="text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
                Team size: <span className="text-accent" id="dynamic-employee-count">employees</span>
              </h1>
            </div>
            <PricingSlider pricingTiers={c.pricing.pricingTiers} sliderConfig={c.pricing.sliderConfig} />
          </div>
        </section>

        <LogoStrip items={data.content.logos?.items} />

        <section id="faq" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                <span className="text-accent">FAQs</span>
              </h1>
            </div>
            <FAQ items={c.faq.items} />
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                <span className="text-accent">Protect your enterprise,</span> secure your competitive advantage
              </h1>
              <h2 className="text-xl md:text-2xl text-textSecondary leading-relaxed mb-12">
                PVLSE is enterprise-grade AI Insurance — delivering measurable ROI through predictive workforce intelligence and mission-critical human capital protection.
              </h2>
              <div className="mt-6 flex gap-4 justify-center">
                <a href={c.ctaFinal.primaryCta.href} className="button-primary">{c.ctaFinal.primaryCta.label}</a>
                <a href={c.ctaFinal.secondaryCta.href} className="button-secondary">{c.ctaFinal.secondaryCta.label}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Theme>
  );
}