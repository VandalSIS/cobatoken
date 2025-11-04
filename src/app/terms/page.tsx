'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Scale, Users, Gavel } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const keyPoints = [
  {
    icon: FileText,
    title: 'Service Agreement',
    description: 'Defines the relationship between you and COBA Token platform.',
  },
  {
    icon: Shield,
    title: 'User Responsibilities',
    description: 'Outlines your obligations when using our services.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Disclosures',
    description: 'Important information about cryptocurrency investment risks.',
  },
  {
    icon: Scale,
    title: 'Legal Compliance',
    description: 'Requirements for regulatory compliance and lawful use.',
  },
];

export default function TermsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms &
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using COBA Token services. These terms govern your use of our platform and services.
            </p>
            <p className="text-sm text-gray-400">
              Последнее обновление: 1 декабря 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Essential points covered in our terms and conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="space-y-12">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>1. Introduction and Acceptance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    These Terms and Conditions ("Terms") constitute a legally binding agreement between you and 
                    COBA Token ("Company," "we," "us," or "our") regarding your use of our website, platform, 
                    and services related to COBA tokens.
                  </p>
                  <p>
                    By accessing or using our services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms. If you do not agree with any part of these Terms, you must not 
                    use our services.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                    upon posting to our website. Your continued use of our services after any such changes 
                    constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>

              {/* Definitions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>2. Definitions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <ul>
                    <li><strong>"COBA Token" or "COBA":</strong> The ERC-20 token issued by our company, backed by physical gold reserves</li>
                    <li><strong>"Platform":</strong> Our website, applications, and related services</li>
                    <li><strong>"User" or "You":</strong> Any individual or entity using our services</li>
                    <li><strong>"Services":</strong> All services provided by COBA Token, including token sales, trading, and related activities</li>
                    <li><strong>"Gold Reserves":</strong> Physical gold held in certified vaults to back COBA tokens</li>
                    <li><strong>"KYC":</strong> Know Your Customer verification procedures</li>
                    <li><strong>"AML":</strong> Anti-Money Laundering compliance requirements</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>3. Eligibility and Account Registration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <h4>Eligibility Requirements</h4>
                  <p>To use our services, you must:</p>
                  <ul>
                    <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Not be a resident of any jurisdiction where our services are prohibited</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Complete our KYC/AML verification process</li>
                  </ul>

                  <h4>Account Registration</h4>
                  <p>When creating an account, you agree to:</p>
                  <ul>
                    <li>Provide accurate, complete, and current information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized account access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Token Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Scale className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>4. COBA Token Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <h4>Token Characteristics</h4>
                  <ul>
                    <li>COBA is an ERC-20 token on the Ethereum blockchain</li>
                    <li>Each token is backed by 9.6 grams of gold</li>
                    <li>Tokens have 3 decimal places with KOH as the smallest unit</li>
                    <li>Total supply is capped at 33 billion tokens</li>
                    <li>Annual emission rate is 9 billion tokens per year (subject to gold backing)</li>
                  </ul>

                  <h4>Gold Backing</h4>
                  <ul>
                    <li>Physical gold reserves are stored in certified, insured vaults</li>
                    <li>Independent audits are conducted monthly</li>
                    <li>Audit reports are published quarterly</li>
                    <li>Gold reserves may only be used to back issued tokens</li>
                  </ul>

                  <h4>Token Redemption</h4>
                  <ul>
                    <li>Qualified users may redeem tokens for physical gold</li>
                    <li>Minimum redemption amounts and fees apply</li>
                    <li>Redemption requests are subject to verification and approval</li>
                    <li>Processing time may vary based on location and amount</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Risk Disclosures */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>5. Risk Disclosures</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p><strong>IMPORTANT:</strong> Cryptocurrency investments carry significant risks. You should carefully consider these risks before purchasing COBA tokens:</p>
                  
                  <h4>Market Risks</h4>
                  <ul>
                    <li>Token value may fluctuate significantly</li>
                    <li>Gold prices are subject to market volatility</li>
                    <li>Liquidity may be limited in certain market conditions</li>
                    <li>Trading may be suspended during extreme market events</li>
                  </ul>

                  <h4>Technology Risks</h4>
                  <ul>
                    <li>Blockchain technology is relatively new and evolving</li>
                    <li>Smart contracts may contain bugs or vulnerabilities</li>
                    <li>Network congestion may affect transaction processing</li>
                    <li>Private key loss may result in permanent token loss</li>
                  </ul>

                  <h4>Regulatory Risks</h4>
                  <ul>
                    <li>Cryptocurrency regulations are evolving globally</li>
                    <li>Future regulatory changes may affect token utility</li>
                    <li>Some jurisdictions may prohibit cryptocurrency activities</li>
                    <li>Compliance requirements may change over time</li>
                  </ul>

                  <h4>Operational Risks</h4>
                  <ul>
                    <li>Gold storage and custody risks</li>
                    <li>Third-party service provider risks</li>
                    <li>Cybersecurity threats and attacks</li>
                    <li>Business continuity and operational disruptions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Prohibited Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Gavel className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                    <span>6. Prohibited Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>You agree not to engage in any of the following prohibited activities:</p>
                  <ul>
                    <li>Money laundering, terrorist financing, or other illegal activities</li>
                    <li>Market manipulation, fraud, or deceptive practices</li>
                    <li>Hacking, phishing, or unauthorized access attempts</li>
                    <li>Creating multiple accounts to circumvent limits or restrictions</li>
                    <li>Using our services in jurisdictions where prohibited</li>
                    <li>Violating any applicable laws, regulations, or third-party rights</li>
                    <li>Attempting to reverse engineer or compromise our systems</li>
                    <li>Distributing malware, viruses, or harmful code</li>
                    <li>Engaging in activities that could harm our reputation or operations</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle>7. Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    All content, trademarks, service marks, logos, and intellectual property on our platform 
                    are owned by or licensed to COBA Token. You may not use, reproduce, or distribute any 
                    such content without our express written permission.
                  </p>
                  <p>
                    You retain ownership of any content you submit to our platform, but grant us a 
                    non-exclusive, worldwide, royalty-free license to use such content for our business purposes.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <CardTitle>8. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, COBA TOKEN SHALL NOT BE LIABLE FOR ANY 
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT 
                    NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY 
                    OF SUCH DAMAGES.
                  </p>
                  <p>
                    Our total liability to you for all claims arising from or relating to these Terms 
                    or our services shall not exceed the amount you paid to us in the twelve months 
                    preceding the claim.
                  </p>
                </CardContent>
              </Card>

              {/* Dispute Resolution */}
              <Card>
                <CardHeader>
                  <CardTitle>9. Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    Any disputes arising from these Terms or our services shall be resolved through 
                    binding arbitration in accordance with the rules of [Arbitration Organization]. 
                    The arbitration shall be conducted in English and located in [Jurisdiction].
                  </p>
                  <p>
                    You waive your right to participate in class action lawsuits or class-wide arbitration 
                    against COBA Token.
                  </p>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardHeader>
                  <CardTitle>10. Termination</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    We may terminate or suspend your account and access to our services at any time, 
                    with or without cause, and with or without notice. Upon termination, your right 
                    to use our services will cease immediately.
                  </p>
                  <p>
                    You may terminate your account at any time by following the account closure process 
                    on our platform. Termination does not relieve you of any obligations incurred prior 
                    to termination.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle>11. Governing Law</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of 
                    [Jurisdiction], without regard to its conflict of law principles. Any legal action 
                    or proceeding arising under these Terms shall be brought exclusively in the courts 
                    of [Jurisdiction].
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>12. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>If you have questions about these Terms, please contact us:</p>
                  <ul>
                    <li><strong>Email:</strong> legal@cobagold.com</li>
                    <li><strong>Address:</strong> 123 Blockchain Avenue, Suite 456, Crypto City, CC 12345</li>
                    <li><strong>Phone:</strong> +1 (555) 123-COBA</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
