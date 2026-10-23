# Achraf El Boumashouli — Portfolio

A modern, professional developer portfolio built with React + Vite + Tailwind CSS.

---

## Tech stack

| Tool | Version | Role |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 5.3 | Build tool / dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Lucide React | 0.383 | Icons |
| Framer Motion | 11 | Available for animations |

---

## Getting started

### Prerequisites
- Node.js 18 or newer
- npm 9 or newer

### Install & run locally

```bash
# 1. Navigate into the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Build for production

```bash
npm run build
```

The compiled output lands in `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## Deployment

### Vercel (recommended — zero config)
1. Push the project to a GitHub repository.
2. Go to vercel.com → New Project → Import that repo.
3. Vercel detects Vite automatically. Click **Deploy**.

### Netlify
1. Run `npm run build`.
2. Drag the `dist/` folder into netlify.com/drop.
   — or connect your GitHub repo for continuous deployment.

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```
Run `npm run deploy`.

---

## Customizing your content

All personal content lives in one file:

```
src/data/index.js
```

### `personal` — your contact info and links
```js
export const personal = {
  name: "Achraf El Boumashouli",
  email: "your@email.com",
  phone: "+212 ...",
  github: "https://github.com/YOUR_USERNAME",   // ← update this
  linkedin: "https://linkedin.com/in/YOUR_HANDLE", // ← update this
  ...
};
```

### `skills` — technical categories and items
Add, remove, or rename skill items inside each category. The icon names map to Lucide icons: `Brain`, `BarChart2`, `Cloud`, `Code2`, `Globe`, `Wrench`.

### `experiences` — internships and jobs
Each entry takes: `role`, `project`, `company`, `period`, `type`, `description`, `stack`.

### `projects` — personal and academic projects
Each entry takes: `title`, `subtitle`, `period`, `description`, `stack`, `type`, `color`.
Available colors: `indigo`, `violet`, `purple`, `sky`, `emerald`.

### `education` — degrees
Set `current: true` on the degree you are currently enrolled in.

### `languages` — spoken languages
Each entry: `name`, `level` (display string), `pct` (0–100, controls the bar width).

---

## File structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx         # Sticky navigation + mobile menu
│   │   ├── Hero.jsx        # Landing / intro section
│   │   ├── About.jsx       # About me + language bars
│   │   ├── Skills.jsx      # Skill categories grid
│   │   ├── Projects.jsx    # Project cards grid
│   │   ├── Experience.jsx  # Timeline of internships
│   │   ├── Education.jsx   # Degree cards
│   │   ├── Contact.jsx     # Contact details + email CTA
│   │   └── Footer.jsx      # Footer with links
│   ├── data/
│   │   └── index.js        # ← ALL content lives here
│   ├── hooks/
│   │   └── useScrollSpy.js # Active nav-link tracking
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + custom utilities
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Adding a real project screenshot

To add a thumbnail to a project card, put the image in `public/projects/` and reference it in `src/data/index.js`:

```js
{
  title: "DataMind AI",
  image: "/projects/datamind.png", // add this field
  ...
}
```

Then update `Projects.jsx` to render an `<img>` tag when the field is present.

---

## Important: update your social links

The GitHub and LinkedIn URLs in `src/data/index.js` are placeholder patterns. Replace them with your real profile URLs before deploying.
