import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Moments from "@/components/Moments";
import Section from "@/components/Section";
import LogoStrip from "@/components/LogoStrip";
import FeatureList from "@/components/FeatureList";
import Steps from "@/components/Steps";
import Quote from "@/components/Quote";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import data from "@/data/pvlse.json";

export default function Home() {
  const c = data.content;
  return (
    <Theme>
      <Navbar />
      <main>
        <Hero />
        <Moments />

        <Section id="why" title={c.why.title}>
          <p>{c.why.body}</p>
        </Section>

        <Section title={c.wellbeingProductivity.title}>
          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6">
            {c.wellbeingProductivity.bullets.map((b: string) => <li key={b}>{b}</li>)}
          </ul>
          <p className="mt-4 text-muted">{c.wellbeingProductivity.note}</p>
        </Section>


        <Section title={c.benefits.title}>
          <div className="grid md:grid-cols-2 gap-6">
            {c.benefits.columns.map((col: any) => (
              <div key={col.heading} className="card p-6">
                <h3 className="text-xl font-semibold mb-3">{col.heading}</h3>
                <ul className="space-y-2 text-textSecondary">{col.items.map((i: string) => <li key={i}>• {i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <FeatureList />

        <Section title={c.roi.title}>
          <p>{c.roi.body}</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {c.roi.stats.map((s: any) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-4xl font-bold">{s.number}</div>
                <div className="text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" title={c.pricing.title}>
          <Pricing plans={c.pricing.plans} />
        </Section>

        <LogoStrip items={data.content.logos?.items} />

        <Section id="faq" title={c.faq.title}>
          <FAQ items={c.faq.items} />
        </Section>

        <Section title={c.ctaFinal.title}>
          <p>{c.ctaFinal.body}</p>
          <div className="mt-6 flex gap-4">
            <a href={c.ctaFinal.primaryCta.href} className="button-primary">{c.ctaFinal.primaryCta.label}</a>
            <a href={c.ctaFinal.secondaryCta.href} className="button-secondary">{c.ctaFinal.secondaryCta.label}</a>
          </div>
        </Section>
      </main>
      <Footer />
    </Theme>
  );
}