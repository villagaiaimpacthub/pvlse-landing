import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE privacy policy and data handling practices." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-8">
                Privacy Policy
              </h1>
              
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
                  Last updated: January 2025
                </p>

                <Card className="bg-accent/10 border-accent/20">
                  <CardHeader>
                    <h2 className="text-xl md:text-2xl font-semibold text-textPrimary">
                      Your Data, Your Control
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary leading-relaxed">
                      PVLSE is built on principles of data minimization, user control, and transparent practices. 
                      We collect only what's necessary to provide our enterprise AI services.
                    </p>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Information We Collect</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-4 text-textSecondary">
                        <li><strong className="text-textPrimary">Business Data:</strong> Anonymized workforce analytics, productivity metrics, and operational insights</li>
                        <li><strong className="text-textPrimary">Account Information:</strong> Name, email, company details for enterprise accounts</li>
                        <li><strong className="text-textPrimary">Usage Data:</strong> Platform interactions to improve our AI models (anonymized)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">How We Protect Your Data</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Encryption</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">All data encrypted at rest and in transit using AES-256 encryption</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Access Controls</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Role-based permissions with multi-factor authentication</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Data Residency</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Choose where your data is stored and processed</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-textPrimary">Retention</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-textSecondary">Configurable data retention policies per enterprise needs</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">Your Rights</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-textSecondary mb-4 leading-relaxed">
                        Under GDPR, CCPA, and other privacy regulations, you have the right to:
                      </p>
                      <ul className="space-y-3 text-textSecondary">
                        <li>• Access your personal data</li>
                        <li>• Correct inaccurate information</li>
                        <li>• Delete your data</li>
                        <li>• Port your data to another service</li>
                        <li>• Object to certain processing activities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl md:text-2xl font-semibold text-textPrimary">Questions About Privacy?</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary mb-4 leading-relaxed">
                      Our privacy team is available to address any questions about data handling, 
                      compliance, or your privacy rights.
                    </p>
                    <Button asChild variant="link" className="text-accent hover:underline p-0">
                      <a href="mailto:privacy@pvlse.com">privacy@pvlse.com</a>
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