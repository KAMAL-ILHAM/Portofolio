# Kamal Ilham — Portfolio

Personal portfolio website for Kamal Ilham, Informatics Engineering student at UMKT.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations & transitions
- **Lucide React** — Icon system

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Glassmorphism navbar with scroll effect
│   ├── Hero.jsx         # Kinetic hero with parallax & animated word cycle
│   ├── About.jsx        # About section with floating cards
│   ├── Skills.jsx       # Skill groups with animated progress bars
│   ├── Projects.jsx     # Project showcase with hover animations
│   ├── Experience.jsx   # Timeline & certifications
│   ├── Contact.jsx      # Contact links & availability CTA
│   └── Footer.jsx       # Footer with social links
├── hooks/
│   └── useScrollReveal.js  # Scroll-triggered animation utilities
├── App.jsx
├── main.jsx
└── index.css            # Glassmorphism utilities & global styles
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel — it will auto-detect Vite and deploy.

## Customization

- Update personal info in each component (name, email, GitHub, links)
- Add/remove projects in `Projects.jsx`
- Update certifications in `Experience.jsx`
- Modify color palette in `tailwind.config.js` and `index.css`
