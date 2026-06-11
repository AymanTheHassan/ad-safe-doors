# Adsafe Doors Sydney — Website

A fast, modern, fully responsive marketing website for **Adsafe Doors**, Sydney's sliding door repair specialists (since 1992). Built as a dependency-free static site (HTML + CSS + vanilla JS) so it can be hosted anywhere.

## Business details

- **Phone:** 0417 464 743
- **Email:** sales@adsafedoors.com.au
- **Rating:** 4.7★ from 63 Google reviews
- **Services:** Sliding door repairs, door closer specialist, door closers Sydney, door closer installation
- **Service area:** Sydney Metropolitan Area

## Pages (21)

| Section | Pages |
| --- | --- |
| Home | `index.html` |
| Start Here | `start-here.html`, `disaster-problems.html`, `repair-or-replace.html`, `common-door-brands.html`, `identify-your-door.html` |
| Services | `services.html`, `sliding-door-repairs.html`, `door-closer-specialist.html`, `door-closers-sydney.html`, `door-closers-installation.html` |
| Free Quote | `free-quote.html` |
| Videos | `videos.html` |
| FAQs | `faqs.html`, `door-repairs-faq.html`, `sliding-door-repairs-faq.html`, `door-closer-faq.html` |
| Testimonials | `testimonials.html` |
| About | `about.html`, `industry-links.html` |
| Contact | `contact.html` |

## How it's built

- **`assets/css/style.css`** — all styling (design system, responsive layout, components).
- **`assets/js/data.js`** — shared content: the 20 YouTube videos (linked from the Adsafe YouTube channel) and customer reviews.
- **`assets/js/main.js`** — injects the shared header/footer into every page, powers the mobile menu, dropdowns, FAQ accordions, lazy-loaded YouTube video grids, review grids and the demo enquiry forms.
- **`assets/images/`** — logo, favicon and section imagery (sourced from the original Adsafe website).

Each page contains its own unique content and includes the same three asset files plus two mount points (`#site-header` / `#site-footer`) that `main.js` fills in. This keeps the navigation and footer consistent across all pages with zero duplication.

YouTube videos are embedded via the privacy-friendly `youtube-nocookie.com` player and only load the iframe once a visitor clicks a thumbnail (faster initial page loads).

## Run locally

```bash
cd "adsafedoors"
python3 -m http.server 8765
```

Then open <http://localhost:8765/>.

## Customising

- **Phone / email / links:** edit the values at the top of `assets/js/data.js`.
- **Videos & reviews:** add/edit entries in the `videos` and `reviews` arrays in `assets/js/data.js`.
- **Navigation:** edit the `NAV` array in `assets/js/main.js`.
- **Colours & fonts:** edit the CSS variables in `:root` at the top of `assets/css/style.css`.

## Note on the contact / quote forms

The enquiry forms are front-end demos — on submit they show a success message but do not send email. To make them live, connect the `<form>` elements to a form handler (e.g. Formspree, Netlify Forms, or a backend endpoint).
