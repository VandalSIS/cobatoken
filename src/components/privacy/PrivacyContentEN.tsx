import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-leading security measures to protect your personal information.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We clearly communicate what data we collect and how we use it.',
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'Your data is encrypted and stored using enterprise-grade security protocols.',
  },
  {
    icon: Users,
    title: 'User Control',
    description: 'You have full control over your data and can request deletion at any time.',
  },
];

export default function PrivacyContentEN() {
  return (
    <>
      {/* Privacy Principles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our Privacy Principles
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            The core values that guide how we handle your personal information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  COBA Token ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our website, use our services, 
                  or interact with our platform.
                </p>
                <p>
                  By accessing or using our services, you agree to the collection and use of information in accordance with 
                  this policy. If you do not agree with our policies and practices, do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <h4>Personal Information</h4>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>Account credentials and authentication data</li>
                  <li>Identity verification documents (KYC/AML compliance)</li>
                  <li>Payment and transaction information</li>
                  <li>Communication preferences and history</li>
                </ul>

                <h4>Technical Information</h4>
                <ul>
                  <li>IP address, browser type, and device information</li>
                  <li>Usage data and website analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and error reports</li>
                </ul>

                <h4>Blockchain Information</h4>
                <ul>
                  <li>Wallet addresses and transaction history</li>
                  <li>Token holdings and trading activity</li>
                  <li>Smart contract interactions</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>We use the collected information for the following purposes:</p>
                <ul>
                  <li><strong>Service Provision:</strong> To provide, maintain, and improve our services</li>
                  <li><strong>Account Management:</strong> To create and manage your account</li>
                  <li><strong>Transaction Processing:</strong> To process transactions and token transfers</li>
                  <li><strong>Compliance:</strong> To comply with legal and regulatory requirements</li>
                  <li><strong>Communication:</strong> To send important updates and respond to inquiries</li>
                  <li><strong>Security:</strong> To detect and prevent fraud and security threats</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns and improve user experience</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>4. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you have given explicit consent to share specific information</li>
                  <li><strong>Security:</strong> To protect our rights, property, or safety, and that of our users</li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>5. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and employee training</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                  strive to use commercially acceptable means to protect your information, we cannot guarantee its 
                  absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                </ul>
                <p>
                  To exercise these rights, please use the contact form on our website. We will respond to your request 
                  within 30 days.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can 
                  control cookie preferences through your browser settings.
                </p>
                <p>Types of cookies we use:</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place for such transfers, including:
                </p>
                <ul>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Certification schemes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                  posting the new policy on our website and updating the "Last updated" date. Your continued use of our 
                  services after such modifications constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

