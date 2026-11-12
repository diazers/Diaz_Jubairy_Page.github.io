# Data Analyst & BI Developer Portfolio

A responsive, static portfolio website inspired by the content architecture of the reference portfolio at <https://beingbrute.github.io/>. This implementation uses original markup, styling, and project descriptions; it does not copy the reference site's source code or branding.

## Files

- `index.html` — page structure and content sections.
- `styles.css` — responsive layout, typography, components, and visual styling.
- `script.js` — project cards, category filters, interactive skills matrix, navigation, and social links.
- `site-config.js` — personal details, portrait image path, role ticker labels, and external links.
- `assets/favicon.svg` — site favicon.

## Preview locally

You can open `index.html` directly in a browser. For a local web server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Personalize before publishing

1. Open `site-config.js` and update `name`, `initials`, `role`, `location`, `availability`, `email`, `linkedinUrl`, `githubUrl`, and `resumeUrl`.
2. Put your own professional headshot in `assets/profile-photo.jpg` and set `portraitUrl` to `assets/profile-photo.jpg`. Until then, the hero displays an initials-based placeholder.
3. Put your PDF CV in `assets/` and update `resumeUrl` to match its filename.
4. Open `script.js` and update each project's `links` array with the correct public dashboard, GitHub repository, and documentation URLs.
5. Verify every project description, tool, and outcome. Do not claim an implementation or result you have not completed and validated.
6. Review the site on mobile and desktop.

### Important portfolio-content notes

- The FMCG project is described at a sanitized, high level. Do not publish confidential employer data, internal dashboards, customer or distributor information, or non-public performance figures.
- The Jakarta AQI project description uses the 2010–2025 daily dataset context. Add verified findings, exact data sources, and the correct published dashboard links before making quantitative claims.
- The Microsoft Fabric project description is based on the architecture and components discussed during development. Distinguish implemented components from planned or experimental parts in your final write-up.
- The four project thumbnails are original CSS illustrations, not screenshots of real dashboards. Replace them with approved screenshots only when you have the right to publish those images.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `data-analyst-portfolio`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for the Pages deployment to complete and open the URL shown in the Pages settings.

GitHub may take a few minutes to publish a new or updated site. No build step or backend server is required.

## Accessibility and browser support

The site includes semantic sections, keyboard-friendly links and buttons, a skip link, responsive navigation, visible focus behavior from browser defaults, and reduced-motion handling. Test with current Chrome, Edge, Firefox, and Safari before sharing it with recruiters.


### Hero profile section

The hero now includes an availability label, name, role, location, positioning statement, rotating specialization label, a profile card, and two professional highlights. The profile image is intentionally left as an initials placeholder until you add your own photo; no other person's photograph is included.
