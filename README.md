# TaperMe - Liquid Tapering Made Simple

A desktop-only website for TaperMe, a service that provides pre-measured psychiatric medications in liquid form for precise tapering.

## 🚀 Live Demo

Visit the live site: [Coming soon on Vercel]

## 📋 Features

- **Full Medication Catalog**: Browse 18+ psychiatric medications across 7 categories
- **Detailed Product Pages**: Each medication includes concentrations, pricing, and sample taper schedules
- **Provider Network**: Showcasing trusted healthcare providers using TaperMe
- **Educational Resources**: Comprehensive FAQ and How It Works sections
- **Desktop-Optimized**: Professional design optimized for desktop viewing
- **No Analytics**: Privacy-focused with no tracking scripts

## 🛠️ Tech Stack

- **React** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Pure CSS** for styling (no frameworks)
- **Vercel** for deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nathanasimon/taperme.git
cd taperme
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link to your Vercel account

### Option 2: Deploy via GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import your GitHub repository: `nathanasimon/taperme`
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy"

### Build Settings (Auto-detected by Vercel):
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
taperme/
├── src/
│   ├── components/     # Reusable components (Layout)
│   ├── data/          # Medication and provider data
│   ├── pages/         # All page components
│   ├── App.tsx        # Main app component with routing
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vercel.json        # Vercel configuration
└── package.json       # Project dependencies
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#2563eb) with neutral grays
- **Typography**: System fonts for optimal readability
- **Layout**: Fixed 1200px container for desktop viewing
- **Components**: Card-based design with consistent spacing

## 📄 Pages

1. **Home** - Landing page with hero, benefits, and CTAs
2. **Medications** - Full catalog with filtering by class
3. **Medication Detail** - Individual medication information
4. **How It Works** - Process explanation and benefits
5. **Pricing & Insurance** - Transparent pricing and coverage info
6. **Providers** - Healthcare provider testimonials and resources
7. **FAQ** - Comprehensive Q&A
8. **About Us** - Company mission and team
9. **Contact** - Contact form and information

## 🔒 Security

- HIPAA-compliant design considerations
- Security headers configured in `vercel.json`
- No analytics or tracking scripts
- Secure form handling ready for backend integration

## 📝 License

This project is private and proprietary to TaperMe.

## 🤝 Contributing

This is a private repository. Please contact the team for contribution guidelines.

---

Built with ❤️ for better medication tapering
