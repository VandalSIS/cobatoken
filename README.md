# COBA Token - Gold-Backed Cryptocurrency Website

A modern, professional website for COBA token - a revolutionary gold-backed ERC-20 cryptocurrency that combines the stability of precious metals with the innovation of blockchain technology.

## 🌟 Features

- **Modern Design**: Clean, professional interface with gold and blue color scheme
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Comprehensive**: Complete website with all essential pages and sections
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessible**: WCAG 2.1 compliant with proper semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth transitions
- **Charts**: Recharts for data visualizations
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel optimized

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coba-token-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   ├── tokenomics/        # Tokenomics page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and constants
│   ├── constants.ts      # App constants and data
│   └── utils.ts          # Utility functions
└── types/                # TypeScript type definitions
```

## 📄 Pages

- **Homepage**: Hero, token metrics, how it works, roadmap, team, testimonials, FAQ, news
- **About**: Company information, mission, vision, values, team, milestones
- **Tokenomics**: Token distribution, emission schedule, utility, staking rewards, price charts
- **Contact**: Contact form, multiple contact methods, social media links
- **Privacy Policy**: Comprehensive privacy policy with GDPR compliance
- **Terms & Conditions**: Legal terms and conditions with risk disclosures

## 🎨 Design System

### Colors
- **Primary Gold**: #F59E0B, #D97706
- **Secondary Blue**: #1E3A8A, #3730A3
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary**: Inter (body text)
- **Display**: Poppins (headings)

### Components
- Glassmorphism effects
- Gradient backgrounds
- Subtle shadows and animations
- Consistent spacing and border radius

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://cobatoken.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
```

### Deployment
The project is optimized for Vercel deployment with:
- `vercel.json` configuration
- Automatic builds from Git
- Environment variables setup
- Custom domain support

## 📊 Token Information

- **Name**: COBA
- **Symbol**: COBA
- **Type**: ERC-20 (Ethereum)
- **Gold Backing**: 9.6 grams per token
- **Decimals**: 3
- **Smallest Unit**: KOH (1 COBA = 1,000 KOH)
- **Total Supply**: 9 billion COBA
- **Max Supply**: 33 billion COBA
- **Annual Emission**: 9 billion COBA per year

## 🛠️ Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode
- Husky for git hooks (optional)

## 🚀 Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image
- **Code splitting** and lazy loading
- **Bundle analysis** and optimization
- **SEO optimization** with meta tags

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔒 Security

- **CSP headers** for security
- **HTTPS only** in production
- **Input validation** with Zod
- **XSS protection** built-in
- **CSRF protection** via Next.js

## 📈 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- XML sitemap generation
- Robots.txt configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved by COBA Token.

## 📞 Support

For questions or support:
- **Email**: support@cobatoken.com
- **Website**: https://cobatoken.com
- **Documentation**: See `/docs` folder

---

Built with ❤️ by the COBA Token team
