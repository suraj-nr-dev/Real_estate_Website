# KBHECS React Website

A clean React/Vite conversion of the supplied KBHECS Webflow export.

## Main tools

- React 18
- Vite
- React Router
- Lucide React
- Plain CSS (no Tailwind)

## Why plain CSS?

Every component keeps its CSS in a separate file. This makes the project easier to read and customize while learning React.

## Run the project

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── PageHero.jsx
│   │   ├── PageHero.css
│   │   ├── WhatsAppButton.jsx
│   │   └── WhatsAppButton.css
│   └── sections/
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── PlotCard.jsx
│       ├── PlotCard.css
│       ├── PlotCategories.jsx
│       ├── PlotCategories.css
│       ├── LocationAdvantages.jsx
│       ├── LocationAdvantages.css
│       ├── Services.jsx
│       ├── Services.css
│       ├── Testimonials.jsx
│       ├── Testimonials.css
│       ├── ContactForm.jsx
│       └── ContactForm.css
├── hooks/
│   └── useSmoothScroll.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── About.css
│   ├── LocationPricing.jsx
│   ├── LocationPricing.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Blog.jsx
│   └── Blog.css
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

The original image assets have been extracted into `public/assets` so the site does not depend on the original Webflow asset IDs.
