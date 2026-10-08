# Dhineshkumar M, portfolio (HTML, CSS, JavaScript)

Static site. No build step, no dependencies. Blue glass theme inspired by the relaunched takeUforward identity (dark by default, light toggle).

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000      # then open http://localhost:8000
```
In VS Code you can use the Live Server extension.

## Deploy (all free)
- **GitHub Pages:** push the folder to a repository, Settings, Pages, deploy from the `main` branch, root.
- **Netlify or Vercel:** drag the folder in, or import the repository. No build command; publish directory is the root.
- **Neocities:** upload the files, keeping the folder structure.
After deploying, change `og:image` and `twitter:image` in `index.html` to the full URL of `assets/img/og-image.png` (for example https://yourname.github.io/assets/img/og-image.png) so link previews work.

Upload `assets/img/banner-dk.png` as your LinkedIn banner (1584x396).

## Structure
```
index.html            shell, SEO meta, JSON-LD
css/style.css         theme tokens at the top (edit colours here)
js/data-core.js       profile, links, stats, slides, flashcards, skills
js/data-work.js       featured projects, top 50 repositories, videos
js/data-copy.js       Home and About text, roadmap, architecture flows, now/next/later
js/data-projects.js   65 project cards (generated from repo review) and 19 console programs
js/data-growth.js     real commit history: commits per month, repos over time, technology adoption
js/data-posts.js      LinkedIn posts (filled by tools/import_linkedin.py)
js/data-site.js       portfolio tour, reading paths, FAQ, build notes, open-source programmes, achievements
js/data-profile.js    internships, events, open source, LeetCode, TUF, LinkedIn, papers, achievements, education
js/snapshot.js        offline GitHub snapshot (live API is used when reachable)
js/ui.js              helpers, GitHub data layer, theme
js/pages.js           one renderer per section
js/app.js             router, navigation, events
assets/img            logo, banners (SVG), banner-dk.png (LinkedIn size), og-image.png, hero art, photo, favicon
tools/make_images.py  regenerates banner-dk.png, og-image.png and favicon.png (needs Pillow)
tools/make_art.py     regenerates the section illustrations assets/img/art-*.svg
tools/import_linkedin.py  turns your LinkedIn data export into the post library
assets/certs          certificate and screenshot images
docs/CONTENT_AUDIT.md what is verified, and what was left out
```

## Sections
Home, About, Skills, Projects, Experience (internships, events, open source, leadership), LeetCode, GitHub (top 50), TakeUForward, YouTube, LinkedIn, Publications, Achievements, Education, Contact. Press Ctrl+K to jump anywhere.

## Updating
- New project: add it to `DATA.featured` or `DATA.top50` (repository name must match GitHub).
- New video: add `[videoId, title, description]` to `DATA.videos`.
- LinkedIn posts: fill `DATA.linkedin.posts` with `{title, url, date, tag}`.
- New certificate: put a JPG in `assets/certs` and reference its filename (without `.jpg`).
- Resume: see `assets/resume/README.txt`.
- Refresh the GitHub snapshot occasionally; the live count updates by itself, cached for one hour.

## Notes
Fonts load from Google Fonts with system fallbacks. YouTube thumbnails load from YouTube; videos use the privacy-enhanced embed and only load when clicked. GitHub data is fetched in the browser; if the API is rate-limited the site shows the snapshot.

## LinkedIn posts
LinkedIn does not expose post data to websites, so the site reads a file you generate from your own export:
1. LinkedIn: Settings > Data privacy > Get a copy of your data > Posts. Download and unzip when it arrives.
2. `python tools/import_linkedin.py path/to/Shares.csv` (newest 50 posts; use `--limit 30` to change).
3. Optional: to rank by reactions, make a CSV with columns `title,url,date,tag,likes,comments`, copy the counts from each post, and run the same command on that file.
The page then shows search, tag filters and sorting automatically.

## Layout
Content uses up to 1480px. On screens wider than 1240px a side rail shows a profile card, an "On this page" list, a commits sparkline and the evidence labels. Below that width the rail is hidden.

## Adding a project
Add an entry in `js/data-projects.js` (the file is generated; edit the object directly or re-run your own generator). The `repo` must match a GitHub repository name. Cards show problem, solution, stack, engineering points, an architecture flow if `DATA.flows` has one for the repository (in `js/data-copy.js`), a demo video if `video` is a YouTube ID, and facts from git history.
