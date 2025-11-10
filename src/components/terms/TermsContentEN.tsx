import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FileText, Shield, AlertTriangle, Scale } from 'lucide-react';

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

export default function TermsContentEN() {
  return (
    <>
      {/* Key Points */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Key Terms Overview
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Essential points covered in our terms and conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction and Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  These Terms constitute a legally binding agreement between you and COBA regarding your use of our website, platform, and services related to COBA tokens.
                </p>
                <p>
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound 
                  by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                  to our website. Your continued use of our services after any such changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card>
              <CardHeader>
                <CardTitle>2. Definitions</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <ul>
                  <li><strong>"COBA":</strong> The ERC-20 token issued by our company, backed by financial reserves.</li>
                  <li><strong>"Platform":</strong> Our website, applications, and related services</li>
                  <li><strong>"User" or "You":</strong> Any individual or entity using services provided by COBA, including token exchanges and related activities.</li>
                  <li><strong>"Services":</strong> All services provided by COBA, including token exchanges and related activities</li>
                  <li><strong>"Reserves":</strong> COBA replenishes and maintains the financial reserves.</li>
                  <li><strong>"KYC":</strong> Know Your Customer verification procedures</li>
                  <li><strong>"AML":</strong> Supports anti-money laundering compliance requirements.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle>3. Eligibility and Account Registration</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h4>Eligibility Requirements</h4>
                <p>To use our services, you must:</p>
                <ul>
                  <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Not be a resident of any jurisdiction where our services are prohibited</li>
                  <li>Comply with all applicable laws and regulations.</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized account access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </CardContent>
            </Card>

            {/* Token Information */}
            <Card>
              <CardHeader>
                <CardTitle>4. COBA Token Information</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h4>Token Characteristics</h4>
                <ul>
                  <li>COBA is an ERC-20 token on the Ethereum blockchain</li>
                  <li>Each token reflects the value of 9.6 grams of gold</li>
                  <li>Tokens have 3 decimal places with KOH as the smallest unit</li>
                  <li>Total supply is capped at 33 billion tokens</li>
                  <li>Annual emission rate is 9 billion tokens per year (subject to backing)</li>
                </ul>

                <h4>Backing</h4>
                <ul>
                  <li>Reserves are stored in certified, insured vaults</li>
                  <li>Independent audits are conducted monthly</li>
                  <li>Audit reports are published quarterly</li>
                  <li>Reserves may only be used to back issued tokens</li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Disclosures */}
            <Card>
              <CardHeader>
                <CardTitle>5. Risk Disclosures</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="font-bold text-red-600 dark:text-red-400">
                  IMPORTANT: Investments in other cryptocurrencies carry significant risks. You should carefully consider these risks before purchasing tokens:
                </p>

                <h4>Market Risks</h4>
                <ul>
                  <li>The value of other tokens can fluctuate significantly.</li>
                  <li>Gold prices are less susceptible to market volatility</li>
                  <li>Liquidity may be limited in certain market conditions.</li>
                  <li>Exchanges may be paused during extreme market events.</li>
                </ul>

                <h4>Technology Risks</h4>
                <ul>
                  <li>Blockchain technology is relatively new and evolving.</li>
                  <li>Other smart contracts may contain bugs or vulnerabilities.</li>
                  <li>Network congestion may affect transaction processing.</li>
                  <li>Private key loss may result in permanent token loss.</li>
                </ul>

                <h4>Regulatory Risks</h4>
                <ul>
                  <li>Cryptocurrency regulations are evolving globally.</li>
                  <li>Future regulatory changes may affect token utility.</li>
                  <li>Some jurisdictions may prohibit activities related to cryptocurrency.</li>
                  <li>Compliance requirements may change over time.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card>
              <CardHeader>
                <CardTitle>6. Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
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
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>7. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  All content, trademarks, service marks, logos, and intellectual property on our platform are owned by or 
                  licensed to COBA Token. You may not use, reproduce, or distribute any such content without our express 
                  written permission.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="font-bold uppercase">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, COBA TOKEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE.
                </p>
                <p>
                  Our total liability to you for all claims arising from or relating to these Terms or our services shall 
                  not exceed the amount you paid to us in the twelve months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>9. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration in 
                  accordance with the rules of the applicable arbitration organization.
                </p>
                <p>
                  You waive your right to participate in class action lawsuits or class-wide arbitration against COBA Token.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  We may terminate or suspend access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will cease immediately.
                </p>
                <p>
                  You may discontinue your activity at any time by following the closure process on our platform.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, 
                  without regard to its conflict of law principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

