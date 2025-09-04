import Head from "next/head";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Database, Award, Clock, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security - PVLSE Enterprise AI</title>
        <meta name="description" content="PVLSE enterprise security, compliance, and data protection measures for AI platform services." />
      </Head>
      <Theme>
        <Navbar />
        <main className="py-20 md:py-24 min-h-screen">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
                  Enterprise Security & Compliance
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
                      <Shield className="w-5 h-5 text-accent" />
                      Security Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary leading-relaxed">
                      PVLSE Enterprise AI is built on enterprise-grade infrastructure with bank-level security. 
                      Our platform provides complete data isolation, ensuring your sensitive business information 
                      remains secure and compliant with international standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-accent" />
                      1. Data Protection & Encryption
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.1 Encryption Standards</h4>
                      <p className="text-textSecondary">All data encrypted at rest and in transit using AES-256 encryption with enterprise-grade key management.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.2 Data Isolation</h4>
                      <p className="text-textSecondary">Complete company data sandboxing ensures zero cross-contamination between enterprise clients.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">1.3 Access Controls</h4>
                      <p className="text-textSecondary">Role-based permissions with multi-factor authentication and comprehensive audit logging.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-accent" />
                      2. Infrastructure Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.1 Enterprise Backend</h4>
                      <p className="text-textSecondary">Built on Supabase enterprise infrastructure with guaranteed multi-tenant isolation and 99.9% uptime SLA.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.2 Network Security</h4>
                      <p className="text-textSecondary">Advanced firewall protection, DDoS mitigation, and secure API endpoints with rate limiting.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">2.3 Monitoring</h4>
                      <p className="text-textSecondary">24/7 security monitoring with real-time threat detection and incident response procedures.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      3. Compliance Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.1 SOC 2 Type II</h4>
                      <p className="text-textSecondary">Annual compliance audits for security, availability, processing integrity, confidentiality, and privacy.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.2 GDPR & CCPA</h4>
                      <p className="text-textSecondary">Full compliance with European GDPR and California CCPA privacy regulations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">3.3 ISO Standards</h4>
                      <p className="text-textSecondary">Adherence to ISO 27001 information security management standards and best practices.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      4. Incident Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.1 Response Time</h4>
                      <p className="text-textSecondary">Critical security incidents addressed within 2 hours with immediate customer notification protocols.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.2 Recovery Procedures</h4>
                      <p className="text-textSecondary">Comprehensive disaster recovery with automated backups and rapid restoration capabilities.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary mb-2">4.3 Communication</h4>
                      <p className="text-textSecondary">Transparent incident reporting with detailed post-mortem analysis and prevention measures.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-accent" />
                      5. Security Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-textSecondary mb-4">
                      Get detailed security documentation, compliance reports, and audit certificates for your enterprise security review.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link href="/#demo">Request Security Documentation</Link>
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