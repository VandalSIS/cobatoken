import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'COBA Token - Gold-Backed Cryptocurrency',
  description: 'COBA is a revolutionary gold-backed ERC-20 cryptocurrency that combines the stability of precious metals with the innovation of blockchain technology. Each token is backed by 9.6 grams of physical gold.',
  keywords: 'COBA, cryptocurrency, gold-backed, ERC-20, blockchain, digital assets, stable token, precious metals',
  authors: [{ name: 'COBA Team' }],
  creator: 'COBA Token',
  publisher: 'COBA Token',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cobatoken.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'COBA Token - Gold-Backed Cryptocurrency',
    description: 'Revolutionary gold-backed ERC-20 cryptocurrency combining stability with blockchain innovation.',
    url: 'https://cobatoken.com',
    siteName: 'COBA Token',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'COBA Token - Gold-Backed Cryptocurrency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COBA Token - Gold-Backed Cryptocurrency',
    description: 'Revolutionary gold-backed ERC-20 cryptocurrency combining stability with blockchain innovation.',
    images: ['/og-image.png'],
    creator: '@cobatoken',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
