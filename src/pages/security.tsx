import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE enterprise security, compliance, and data protection measures." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Enterprise Security & Compliance
              </h1>
              
              <div className="space-y-16">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                    🛡️ Built on Supabase Enterprise Infrastructure
                  </h2>
                  <p className="text-textSecondary mb-8 leading-relaxed text-lg">
                    PVLSE leverages Supabase's enterprise-grade platform, providing bank-level security 
                    with complete data isolation. Each company operates in its own sandboxed environment 
                    with dedicated AI models.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">100%</div>
                      <div className="text-textSecondary">Data Isolation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">SOC 2</div>
                      <div className="text-textSecondary">Type II Certified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">Zero</div>
                      <div className="text-textSecondary">Cross-Company Data</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      🔐 Data Protection
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• End-to-end encryption (AES-256)</li>
                      <li>• Complete company data sandboxing</li>
                      <li>• SOC 2 Type II compliance via Supabase</li>
                      <li>• GDPR & CCPA compliant infrastructure</li>
                      <li>• Dedicated AI models per company</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      🏢 Enterprise Architecture
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• Supabase enterprise backend</li>
                      <li>• Multi-tenant isolation guaranteed</li>
                      <li>• Role-based access control</li>
                      <li>• Real-time audit logging</li>
                      <li>• 99.9% uptime SLA</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">Security Certifications</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">SOC 2 Type II</h4>
                      <p className="text-textSecondary">Annual compliance audit</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🔒</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">ISO 27001</h4>
                      <p className="text-textSecondary">Information security standard</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">GDPR Ready</h4>
                      <p className="text-textSecondary">Data privacy compliance</p>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4">
                    Need a Security Whitepaper?
                  </h3>
                  <p className="text-textSecondary mb-8 leading-relaxed max-w-2xl mx-auto">
                    Get detailed security documentation for your compliance team.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/#demo">Request Security Documentation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Theme>
    </>
  );
}