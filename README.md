# Luminvue Medical website

Static site for [www.luminvuehk.com](https://www.luminvuehk.com), hosted on GitHub Pages.

- `index.html`: Home
- `technology.html`: Technology (platform, core technology, imaging, patents, specifications)
- `about.html`: About us (story, team, roadmap)
- `assets/css/site.css`, `assets/js/site.js`: shared styles and script for all pages
- `assets/`: favicon and images

The header, contact section and footer are repeated in each page, so change them in all three files.
- `CNAME`: the custom domain for GitHub Pages

To update the site, edit the files, commit and push to `main`. GitHub Pages republishes in about a minute.

Preview locally:

```
python -m http.server 8765
```
