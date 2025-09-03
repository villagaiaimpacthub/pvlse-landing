import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE privacy policy and data handling practices for enterprise AI services." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Privacy Policy & Data Protection
              </h1>
              
              <div className="space-y-16">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                    🔒 Your Data, Your Control
                  </h2>
                  <p className="text-textSecondary mb-8 leading-relaxed text-lg">
                    PVLSE is built on principles of data minimization, user control, and transparent practices. 
                    We collect only what's necessary to provide our enterprise AI services with complete data isolation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">Zero</div>
                      <div className="text-textSecondary">Data Sharing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">GDPR</div>
                      <div className="text-textSecondary">Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">You</div>
                      <div className="text-textSecondary">Own Your Data</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      📊 Information We Collect
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• Business Data: Anonymized workforce analytics</li>
                      <li>• Account Information: Enterprise contact details</li>
                      <li>• Usage Data: Platform interactions (anonymized)</li>
                      <li>• Performance Metrics: Productivity insights only</li>
                      <li>• No personal employee data collection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      🛡️ How We Protect Your Data
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• End-to-end encryption (AES-256)</li>
                      <li>• Complete company data sandboxing</li>
                      <li>• Role-based access controls</li>
                      <li>• Configurable data retention policies</li>
                      <li>• Choose your data residency location</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">Your Privacy Rights</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📋</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Data Access</h4>
                      <p className="text-textSecondary">View all data we have about you</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">✏️</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Data Correction</h4>
                      <p className="text-textSecondary">Update inaccurate information</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🗑️</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Data Deletion</h4>
                      <p className="text-textSecondary">Complete data removal</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">Privacy Compliance</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🇪🇺</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">GDPR Ready</h4>
                      <p className="text-textSecondary">European privacy standards</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🇺🇸</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">CCPA Compliant</h4>
                      <p className="text-textSecondary">California privacy rights</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🔐</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">SOC 2 Type II</h4>
                      <p className="text-textSecondary">Security & availability audit</p>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4">
                    Questions About Privacy?
                  </h3>
                  <p className="text-textSecondary mb-8 leading-relaxed max-w-2xl mx-auto">
                    Our privacy team is available to address any questions about data handling, compliance, or your privacy rights.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/#demo">Request Privacy Consultation</Link>
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