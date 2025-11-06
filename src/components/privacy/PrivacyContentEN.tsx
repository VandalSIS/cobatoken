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
            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  We do not collect, and do not use, we protect your information when you visit our website, use our services, 
                  or interact with our platform.
                </p>
                <p>
                  We implement appropriate security measures to protect your personal information.
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Multi-factor authentication for access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                  strive to use commercially acceptable means to protect information, we can guarantee its absolute security 
                  on our part.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
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
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
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
                <CardTitle>International Data Transfers</CardTitle>
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
                <CardTitle>Changes to This Privacy Policy</CardTitle>
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

