# Product Landing (Cinematic Portfolio)

Interactive, scroll-driven portfolio/landing page built with Next.js App Router, TypeScript, GSAP, and HeroUI.

## Feature Highlights

- Cinematic hero intro with layered parallax and masked text reveal
- Pinned video timeline section (core experience)
- Scroll-synced video playback behavior + milestone overlay text states
- Animated Skills, Specs, and CTA sections with staggered reveals
- Foreground/depth layering for game-landing-page style motion
- Smooth scrolling integration with Lenis
- Reusable section/component architecture
- Responsive layout and reduced-motion support

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- GSAP + ScrollTrigger
- HeroUI
- Tailwind CSS v4
- Framer Motion
- Lenis

## Project Structure

- `app/` app router entry, layout, and global styles
- `components/layout/` shared page chrome (e.g. navbar)
- `components/sections/` page sections (Hero, VideoTimeline, Skills, Projects, CTA)
- `components/ui/` reusable UI atoms (e.g. NumberFlow, wordmark)
- `hooks/` scroll, video, and motion-related hooks
- `lib/` gsap setup and product/content data

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` start development server (webpack mode)
- `npm run build` create production build
- `npm run start` run production server
- `npm run lint` run ESLint
