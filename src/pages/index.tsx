import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Moments from "@/components/Moments";
import Section from "@/components/Section";
import LogoStrip from "@/components/LogoStrip";
import Steps from "@/components/Steps";
import Quote from "@/components/Quote";
import PricingSlider from "@/components/PricingSlider";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroCTA from "@/components/HeroCTA";
import BenefitsToggle from "@/components/BenefitsToggle";
import DemoForm from "@/components/DemoForm";
import data from "@/data/pvlse.json";

export default function Home() {
  const c = data.content;
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
      </Head>
      <Theme>
        <Navbar />
        <main>
          <Hero heroData={data.content.hero} />
          <HeroCTA />
        
        <Moments />

        <BenefitsToggle />

        <Section id="product">
          <div className="max-w-6xl mx-auto">
            {/* Main heading */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Wellbeing isn't a perk<br />
                <span className="text-accent">It's a performance multiplier</span>
              </h1>
            </div>

            {/* Combined feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group">
                <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-accent mb-2 transition-colors duration-300">
                    Automate standard procedures
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    AI executes your SOPs consistently, reducing manual oversight and human error.
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
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-accent mb-2 transition-colors duration-300">
                    Workforce wellness management
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    Monitor workloads in real time and trigger proactive interventions before burnout occurs.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-6 h-full bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300 mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-accent mb-2 transition-colors duration-300">
                    Smart calendar coordination
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    The PVLSE meeting bot auto-schedules meetings across all team calendars and optimizes timing for productivity.
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
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-accent mb-2 transition-colors duration-300">
                    Real-time business intelligence
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    AI trained on your data delivers live financial metrics and operational insights—no guessing, just facts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Enterprise Security Trust Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Built on <span className="text-accent">enterprise-grade</span> technology
              </h1>
              <h2 className="text-xl md:text-2xl text-textSecondary leading-relaxed mb-12">
                Your data stays secure and isolated. Each company gets its own sandboxed AI that never shares data with other organizations.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Secure & Private</h4>
                <p className="text-sm text-textSecondary">Your data is encrypted and isolated</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Sandboxed AI</h4>
                <p className="text-sm text-textSecondary">Dedicated AI models for your company only</p>
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

        <section id="demo" className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <DemoForm />
            </div>
          </div>
        </section>

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

        </main>
        <Footer />
      </Theme>
    </>
  );
}