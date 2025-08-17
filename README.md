# Singapore MBTI Quiz 🇸🇬

A fun, Singapore-flavoured MBTI-style quiz!

## Features
- **15 quick questions** with local humour (Singlish, hawker, MRT, NS/school references).
- **Auto-scoring** to one of the **16 types** (E/I, S/N, T/F, J/P).
- **Viral-friendly result card** with gradient theme + emoji — **downloadable as PNG** (via html2canvas).
- **Separate page** listing all 16 Singapore-style type nicknames & blurbs.
- 100% static. Works on **GitHub Pages** or any static host.

## Files
- `index.html` — main quiz.
- `types.html` — gallery of all types.
- `style.css` — design system.
- `app.js` — quiz logic & download/share.
- `README.md` — this file.

## Run locally
Just open `index.html` in your browser. No build step required.

## Deploy to GitHub Pages
1. Create a new public repo on GitHub (e.g. `sg-mbti-quiz`).
2. Upload all files in this folder.
3. In repo Settings → Pages, set **Source** to `main` branch, root (`/`) folder.
4. Wait a minute; your quiz will be live at `https://<username>.github.io/<repo>/`.

## Notes
- This is a lighthearted, non-scientific quiz inspired by MBTI; it is **not affiliated** with Myers-Briggs®.
- Result card download works best on modern mobile browsers. Desktop works too.
- Tie-breakers default to the first letter in each pair (E over I, S over N, T over F, J over P).
