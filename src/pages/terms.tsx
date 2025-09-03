import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE terms of service and usage agreement." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Terms of Service
              </h1>
              
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
                  Last updated: January 2025
                </p>

                <Card className="bg-accent/10 border-accent/20">
                  <CardHeader>
                    <h2 className="text-xl md:text-2xl font-semibold text-textPrimary">
                      Enterprise Agreement
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary leading-relaxed">
                      These terms govern your use of PVLSE's enterprise AI platform and related services. 
                      By using our platform, you agree to these terms.
                    </p>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Service Description</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-textSecondary leading-relaxed">
                        PVLSE provides predictive workforce analytics, burnout prevention, and productivity optimization 
                        through AI-powered insights and automation.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Enterprise Responsibilities</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-4 text-textSecondary">
                        <li><strong className="text-textPrimary">Data Accuracy:</strong> Provide accurate workforce and operational data</li>
                        <li><strong className="text-textPrimary">Access Management:</strong> Maintain appropriate user access controls</li>
                        <li><strong className="text-textPrimary">Compliance:</strong> Ensure data sharing complies with local regulations</li>
                        <li><strong className="text-textPrimary">Security:</strong> Follow prescribed security protocols and best practices</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Service Level Agreement</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Availability</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">99.9% uptime guarantee with 24/7 monitoring</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Support</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Enterprise support with dedicated success manager</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Data Processing</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Real-time insights with under 4 hour data refresh</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Response Time</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Priority support with 2-hour response guarantee</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Intellectual Property</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-textSecondary leading-relaxed">
                        Your business data remains your property. PVLSE retains rights to aggregated, 
                        anonymized insights for platform improvement. AI models trained on your data 
                        remain exclusive to your organization.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Limitation of Liability</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-textSecondary leading-relaxed">
                        PVLSE provides predictive insights to support decision-making but does not guarantee 
                        specific business outcomes. Ultimate workforce decisions remain with your organization.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl md:text-2xl font-semibold text-textPrimary">Questions About Terms?</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary mb-4 leading-relaxed">
                      Our legal team can provide clarification on terms, custom enterprise agreements, 
                      or specific compliance requirements.
                    </p>
                    <Button asChild variant="link" className="text-accent hover:underline p-0">
                      <a href="mailto:legal@pvlse.com">legal@pvlse.com</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Theme>
    </>
  );
}