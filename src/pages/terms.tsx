import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE enterprise terms of service and usage agreement for AI platform services." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Enterprise Terms of Service
              </h1>
              
              <div className="space-y-16">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                    📋 Enterprise Agreement Overview
                  </h2>
                  <p className="text-textSecondary mb-8 leading-relaxed text-lg">
                    These terms govern your use of PVLSE's enterprise AI platform and related services. 
                    Our agreement ensures mutual protection while delivering powerful workforce analytics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                      <div className="text-textSecondary">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-textSecondary">Enterprise Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">Your</div>
                      <div className="text-textSecondary">Data Ownership</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      🚀 Service Description
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• Predictive workforce analytics</li>
                      <li>• Burnout prevention & early detection</li>
                      <li>• Productivity optimization insights</li>
                      <li>• AI-powered automation tools</li>
                      <li>• Real-time performance dashboards</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                      🏢 Enterprise Responsibilities
                    </h3>
                    <ul className="space-y-3 text-textSecondary">
                      <li>• Provide accurate workforce data</li>
                      <li>• Maintain appropriate user access controls</li>
                      <li>• Ensure regulatory compliance</li>
                      <li>• Follow security protocols</li>
                      <li>• Designate authorized administrators</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">Service Level Agreement</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">99.9% Uptime</h4>
                      <p className="text-textSecondary">24/7 monitoring & alerting</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎧</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Enterprise Support</h4>
                      <p className="text-textSecondary">Dedicated success manager</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">📊</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Real-time Data</h4>
                      <p className="text-textSecondary">4-hour refresh guarantee</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">Data & Intellectual Property</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🏗️</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Your Data Ownership</h4>
                      <p className="text-textSecondary">Business data remains yours</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🧠</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Exclusive AI Models</h4>
                      <p className="text-textSecondary">Custom models for your org</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🔒</div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-2">Data Isolation</h4>
                      <p className="text-textSecondary">Complete company separation</p>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4">
                    Need Custom Terms?
                  </h3>
                  <p className="text-textSecondary mb-8 leading-relaxed max-w-2xl mx-auto">
                    Our legal team can provide clarification on terms, custom enterprise agreements, or specific compliance requirements.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/#demo">Request Legal Consultation</Link>
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