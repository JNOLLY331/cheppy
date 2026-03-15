# Cheppy Eupresian Awuor — Portfolio

Personal portfolio website for **Cheppy Eupresian Awuor** (BCJ/5534/24),  
Bachelor of Communication & Journalism student at Moi University.

---

## Features

- Dark / Light mode toggle
- Smooth scroll & AOS fade-in animations
- Responsive, mobile-first layout
- Typewriter effect in the hero section
- Animated skill progress bars
- Glassmorphism navigation bar
- Project cards with hover overlay
- Material Symbols icons
- Playfair Display + DM Sans typography

---

## Tech Stack

| Layer | Tool |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) + Custom CSS |
| Fonts | Playfair Display, DM Sans, Material Symbols |
| Animation | AOS (Animate On Scroll) |
| Scripting | Vanilla JavaScript |

---

## Project Structure

```
portfolio/
├── index.html
|== Cheppy_Awuor_Resume.pdf
├── style.css
├── index.js
├── images/
│   ├── image.png
│   ├── image copy.png
│   └── image copy 2.png
└── README.md
```

---

## Getting Started

```bash
git clone https://github.com/yourusername/cheppy-portfolio.git
cd cheppy-portfolio
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Customization

**Brand color** — edit the Tailwind config in `index.html`:

```js
colors: {
  primary: "#1754cf",
  accent:  "#e8b44e"
}
```

**Project images** — replace files in `images/`:

| File | Project |
|---|---|
| `image.png` | The Campus Chronicle |
| `image copy.png` | Urban Life Exploration |
| `image copy 2.png` | Truth in Audio |

**Add a project** — duplicate a `.group.relative` card block in `#projects` and update the image, icon, title, and description.

---

## Deployment

Works out of the box on GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

---

## Author

**Cheppy Eupresian Awuor**  
BCJ/5534/24 · Moi University · Eldoret, Kenya  
cheppysita@gmail.com · 0758 686 755

---

*Made with care in Eldoret, Kenya — 2025/2026*