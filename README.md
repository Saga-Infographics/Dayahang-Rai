# Dayahang Rai — Portfolio (Vite + React + Tailwind)

This repository is a small portfolio website for Dayahang Rai — actor and theatre practitioner — built with Vite, React 18 and Tailwind CSS.

The site showcases biography, portfolio items (plays, directing credits and film appearances), media and contact information. The project is a lightweight static SPA using client-side routing.

---

## Quick overview

- Framework: React 18 (Vite)
- CSS: Tailwind CSS
- Routing: react-router-dom
- Build tool: Vite

This project is set up for local development using `npm run dev` and production build with `npm run build`.

## SEO setup (what I added)

- Per-page meta component: `src/components/SEO/SEO.tsx` — use this at the top of each page component to set title/description/og image/canonical.
- Site config: edit `src/lib/seo.ts` and set `siteUrl` to your production domain (important for canonical and sitemap).
- Sitemap: `scripts/generate-sitemap.js` writes `public/sitemap.xml`. It's called automatically by the `build` script. Replace the site URL parameter in `package.json` scripts if needed.
- Robots: `public/robots.txt` already references `/sitemap.xml`.

## Short bio (from site)

Dayahang Rai — Actor • Theatre Practitioner • Director

Born on April 13, 1980, in Khawa, Bhojpur District, Eastern Nepal. Dayahang Rai is one of Nepal's most popular and accomplished actors with over 50 films to his credit. He is a recipient of three National Awards and is affiliated with Mandala Theatre, Nepal, which he co-founded with Rajan Khatiwada and Dhiren Raja (Limbu).

**Notable Films:**
- Loot (2012) — His career breakthrough, iconic character Gofle, co-wrote dialogues, won Popular Award
- Kabaddi series (2013, 2015, 2019) — Established him as leading actor, won multiple awards
- White Sun / Seto Surya (2016) — Critically acclaimed, Nepal's submission to 2018 Oscars for Best Foreign Language Film
- Dasdhunga (2009) — Won first National Award for Best Supporting Actor
- Sambodhan (2014) & Kabaddi Kabaddi (2015) — Won National Awards for Best Actor

**Theatre:**
- Joined Actors' Studio in 2007
- Co-founded Mandala Theatre, Nepal in 2008
- Has performed in and directed multiple theatrical productions

These details are based on the portfolio data in `src/screens/Portfolio/Portfolio.tsx` and biographical content from Wikipedia.

## Project structure (key files)

- `index.html` — app entry HTML
- `src/index.tsx` — React entry
- `src/screens/Home/Home.tsx` — Home / hero / about sections
- `src/screens/Portfolio/Portfolio.tsx` — Portfolio page and portfolio items array
- `src/components/Header/*` and `src/components/Footer/*` — site header and footer
- `src/components/ui/*` — small UI components (button, card, separator, etc.)
- `public/images/` — static images used by the site (hero photos, thumbnails)
- `package.json` — scripts and dependencies

## Run locally

Prerequisite: Node.js (recommended LTS) and npm.

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) to view the site.

3. Create a production build:

```powershell
npm run build
```

## Where to edit content

- Portfolio items: `src/screens/Portfolio/Portfolio.tsx` — the `portfolioItems` array contains each item (title, category, year, role, description). Edit or add entries there.
- Home copy (bio and buttons): `src/screens/Home/Home.tsx` — headings and paragraphs are editable here.
- Images:
  - Hero and portrait images live in `public/images/`.
  - The site references `/images/pkdai.png` and a fallback `/images/pkdai2.jpg` (configured in the Home screen). Add or replace files there. Example path:

```
project/public/images/pkdai2.jpg
```

You can add images by copying them to that folder or using the PowerShell command:

```powershell
# copy from Downloads to project images folder (example)
Copy-Item -Path $env:USERPROFILE\Downloads\pkdai2.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\pkdai2.jpg'
```

If you'd like to add the attached poster image (Jhimke Mama) so it appears on the Home page's Featured Work card, copy it into `public/images/` with this command (example):

```powershell
# copy the poster into the project images folder and name it for the site
Copy-Item -Path $env:USERPROFILE\Downloads\jhimke-mama-poster.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\jhimke-mama-poster.jpg'
```

The Home page expects the file at `/images/jhimke-mama-poster.jpg`. If the image is missing, the site will automatically show a gradient placeholder instead.

To add the Kaalaa Patthar Maathi poster from the Mandala Theatre production page, copy it into `public/images/` with this command (example):

```powershell
Copy-Item -Path $env:USERPROFILE\Downloads\kaalaa-patthar-maathi.jpg -Destination 'd:\project-bolt-sb1-uccdtguz\project\public\images\kaalaa-patthar-maathi.jpg'
```

The Home page renders `/images/kaalaa-patthar-maathi.jpg` for the "Kaalaa Patthar Maathi" card. If the poster file isn't present the card will show the gradient fallback.

## Accessibility and behavior notes

- Buttons in the Home screen use the `Button` component with `asChild` so they can wrap `react-router`'s `<Link>` for client-side navigation.
- Footer social icons are SVGs located in `public/` and were styled with a CSS filter for visibility on dark backgrounds; replacing them with white SVGs is recommended for crisp rendering.

## Recommended next steps / improvements

- Add optimized WebP or resized images for faster loads and smaller bundles (use `sharp` or Vite image plugins).
- Replace dark-filled SVGs with properly colored white SVGs in `public/` for the footer icons so we don't rely on CSS filters.
- Add unit or integration tests (e.g., React Testing Library) for critical UI pieces (filtering portfolio, link navigation).
- Add a modal or detail page for portfolio items if you want richer presentation per project.

## License & credits

This repository contains the source code for Dayahang Rai's personal portfolio website. Content (text and images) belongs to Dayahang Rai (as provided). The codebase uses open-source libraries; check `package.json` for dependency licenses.

**About Dayahang Rai:**
Award-winning Nepali actor, director, and playwright known for transformative performances in film and theatre. For more information, visit his official website or follow him on social media.

---

If you'd like, I can:
- run a quick build/typecheck now and fix any immediate issues,
- add an optimized `pkdai2.jpg` placeholder file into `public/images/` so the About section shows immediately, or
- export a simple deployment instruction for hosting (Vercel, Netlify).

Happy to update the README text if you want a different bio tone or more personal details.# Anima Project

Welcome! This project has been automatically generated by [Anima](https://animaapp.com/).

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)


If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```
