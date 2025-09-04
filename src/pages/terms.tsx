import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building2, Shield, Gavel, Clock, Mail, Calendar } from "lucide-react";
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
        <main className="py-24 md:py-32 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
                  Terms of Service
                </h1>
                <div className="flex items-center gap-2 text-textSecondary">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 2025</span>
                </div>
              </div>
              
              <div className="space-y-12">
                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent" />
                      Acceptance of Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary leading-relaxed">
                      By accessing or using PVLSE Enterprise AI ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                      If you disagree with any part of these terms, you may not access the Service.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-accent" />
                      1. Service Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.1 Platform Services</h4>
                      <p className="text-textSecondary">PVLSE provides enterprise AI platform services including predictive workforce analytics, burnout prevention, and productivity optimization through AI-powered insights.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.2 Service Availability</h4>
                      <p className="text-textSecondary">Services are provided on a Software-as-a-Service (SaaS) basis with 99.9% uptime guarantee and 24/7 monitoring.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.3 Updates & Modifications</h4>
                      <p className="text-textSecondary">We may update, modify, or discontinue features with reasonable notice to enterprise clients.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      2. User Responsibilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.1 Account Security</h4>
                      <p className="text-textSecondary">Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.2 Data Accuracy</h4>
                      <p className="text-textSecondary">Provide accurate workforce and operational data necessary for AI insights and platform functionality.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.3 Compliance</h4>
                      <p className="text-textSecondary">Ensure your use of the Service complies with applicable laws and regulations in your jurisdiction.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gavel className="w-5 h-5 text-accent" />
                      3. Intellectual Property
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.1 Your Data Ownership</h4>
                      <p className="text-textSecondary">You retain all rights, title, and interest in your business data. PVLSE claims no ownership rights to your data.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.2 Service IP</h4>
                      <p className="text-textSecondary">PVLSE retains all rights to the Service, including AI models, algorithms, and platform technology.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.3 Licensed Use</h4>
                      <p className="text-textSecondary">We grant you a limited, non-exclusive, non-transferable license to use the Service per your subscription terms.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      4. Service Level Agreement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.1 Uptime Guarantee</h4>
                      <p className="text-textSecondary">99.9% monthly uptime with service credits for any downtime exceeding this threshold.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.2 Support Response</h4>
                      <p className="text-textSecondary">Enterprise support with dedicated success manager and 2-hour response time for priority issues.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.3 Data Processing</h4>
                      <p className="text-textSecondary">Real-time insights delivery with maximum 4-hour data refresh cycles for analytics updates.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-accent" />
                      5. Contact & Legal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary mb-4">
                      For questions about these Terms of Service or to request custom enterprise agreements, contact our legal team.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link href="/#demo">Contact Legal Team</Link>
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