import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, UserCheck, Calendar, Mail } from "lucide-react";
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
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
                  Privacy Policy
                </h1>
                <div className="flex items-center gap-2 text-textSecondary">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 2025</span>
                </div>
              </div>
              
              <div className="space-y-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary leading-relaxed">
                      This Privacy Policy describes how PVLSE Enterprise AI ("we," "our," or "us") collects, 
                      uses, and protects your information when you use our enterprise AI platform and related services.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-accent" />
                      1. Information We Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.1 Business Information</h4>
                      <p className="text-textSecondary">We collect anonymized workforce analytics, productivity metrics, and operational insights necessary for our AI services.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.2 Account Information</h4>
                      <p className="text-textSecondary">Name, email address, company details, and contact information for enterprise account management.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.3 Usage Data</h4>
                      <p className="text-textSecondary">Platform interactions, feature usage, and system logs (anonymized) to improve our services.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-accent" />
                      2. How We Use Your Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.1 Service Delivery</h4>
                      <p className="text-textSecondary">To provide enterprise AI insights, analytics, and platform functionality.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.2 Platform Improvement</h4>
                      <p className="text-textSecondary">To enhance our AI models and platform capabilities using aggregated, anonymized data.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.3 Communication</h4>
                      <p className="text-textSecondary">To provide customer support, account updates, and service notifications.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      3. Data Protection & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.1 Encryption</h4>
                      <p className="text-textSecondary">All data is encrypted at rest and in transit using AES-256 encryption standards.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.2 Data Isolation</h4>
                      <p className="text-textSecondary">Complete company data sandboxing ensures no cross-contamination between enterprise clients.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.3 Access Controls</h4>
                      <p className="text-textSecondary">Role-based permissions with multi-factor authentication and audit logging.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-accent" />
                      4. Your Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.1 Access & Portability</h4>
                      <p className="text-textSecondary">Request access to your personal data and receive it in a portable format.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.2 Correction & Deletion</h4>
                      <p className="text-textSecondary">Request correction of inaccurate data or deletion of your personal information.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.3 Processing Objection</h4>
                      <p className="text-textSecondary">Object to certain processing activities or withdraw consent where applicable.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-accent" />
                      5. Contact Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary mb-4">
                      For questions about this Privacy Policy or to exercise your rights, contact our privacy team.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link href="/#demo">Contact Privacy Team</Link>
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