# Agency Website

A modern, animated agency website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Stunning Design**: Dark theme with purple-to-cyan gradients and smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **High Performance**: Optimized with React 18 and Vite
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🎯 **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- ♿ **Accessible**: ARIA labels and keyboard navigation
- 🧩 **Component Library**: Built with shadcn/ui components
- 📝 **Form Validation**: React Hook Form with Zod schemas

## Pages

- **Home** - Hero section with animated gradients and service cards
- **Services** - Comprehensive list of offerings with process timeline
- **Work** - Portfolio showcase with project cards
- **Pricing** - Pricing tiers with FAQ section
- **Blog** - Blog post grid (ready for MDX integration)
- **Contact** - Contact form with validation

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:8080](http://localhost:8080) in your browser

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with animations
│   ├── ServiceCard.tsx  # Service display card
│   ├── SectionHeader.tsx # Reusable section headers
│   ├── Footer.tsx       # Footer with links
│   ├── SEO.tsx          # SEO meta tags component
│   └── ScrollToTop.tsx  # Auto scroll on route change
├── pages/
│   ├── Index.tsx        # Home page
│   ├── Services.tsx     # Services page
│   ├── Work.tsx         # Portfolio page
│   ├── Pricing.tsx      # Pricing page
│   ├── Blog.tsx         # Blog page
│   ├── Contact.tsx      # Contact page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Root component
├── index.css            # Global styles & design tokens
└── main.tsx             # App entry point
```

## Design System

The design system is defined in `src/index.css` and `tailwind.config.ts`:

- **Colors**: HSL-based with semantic tokens
- **Primary**: Purple (`hsl(263 70% 60%)`)
- **Secondary**: Cyan (`hsl(191 91% 50%)`)
- **Background**: Dark navy (`hsl(224 71% 4%)`)
- **Gradients**: Animated purple-to-cyan
- **Shadows**: Glow effects for cards and hover states
- **Animations**: Smooth transitions with cubic-bezier easing

## Customization

### Updating Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 263 70% 60%;      /* Purple */
  --secondary: 191 91% 50%;    /* Cyan */
  --background: 224 71% 4%;    /* Dark navy */
  /* ... other variables */
}
```

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Animations

Animation variants are defined in components using Framer Motion. Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## SEO

Each page uses the `<SEO>` component for meta tags:

```tsx
<SEO
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
/>
```

Update `public/sitemap.xml` with your actual domain and pages.

## Contact Form

The contact form is configured with validation. To enable email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Add API keys to environment variables
3. Implement the email sending logic in the form submission handler

## Deployment

Build the project:

```bash
npm run build
# or
pnpm build
```

The `dist/` folder is ready to deploy to any static hosting service:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## 🧑‍💻Author

**GitHub:** [@andi-nugroho](https://github.com/andi-nugroho)

## License

MIT License - feel free to use this project for your own agency!

## Support

For issues or questions, please open an [issue](https://github.com/andi-nugroho/aero-agency/issues) on GitHub.

---
