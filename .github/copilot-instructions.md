# Copilot Instructions for AI Coding Agents

## Project Overview
This is a static web project for an assisted living facility (asilo) information site. The codebase consists of three main files:
- `index.html`: Main HTML structure and content
- `style.css`: All styling rules for the site
- `script.js`: Handles interactive behaviors (e.g., slideshows, QR code logic)
- `images/`: Contains all image assets used in the site

## Architecture & Data Flow
- **Single-page structure**: All content is rendered in `index.html`. There are no subpages or routing.
- **Styling**: All CSS is in `style.css`. No frameworks (e.g., Bootstrap) are used; styles are custom and direct.
- **JavaScript**: All scripts are in `script.js`. No external libraries (e.g., jQuery) are used. Interactivity is handled with vanilla JS.
- **Images**: Referenced directly from the `images/` folder in HTML and CSS.

## Developer Workflows
- **No build step**: Files are served directly. No bundlers, transpilers, or package managers are present.
- **Testing**: No automated tests or test frameworks are present. Manual browser testing is required.
- **Debugging**: Use browser dev tools (F12) to inspect, debug, and test changes.
- **Live reload**: Not configured. Refresh browser manually after changes.

## Project-Specific Conventions
- **File naming**: All files use lowercase and hyphens. Images are named descriptively (e.g., `slide1.png`).
- **CSS**: Classes and IDs are named in English, using kebab-case. Avoid inline styles in HTML.
- **JavaScript**: Functions and variables use camelCase. All logic is in a single file; avoid splitting into modules.
- **Accessibility**: Basic alt text is provided for images. No advanced ARIA or accessibility patterns.

## Integration Points
- **QR Code**: The image `qrcode-localizacao.png` is used for location sharing. Any logic for QR code display is in `script.js`.
- **Slideshow**: Images `slide1.png`, `slide2.jpg`, and `slide3.jpg` are used for a homepage slideshow, controlled by JS.

## Examples
- To add a new image: Place it in `images/`, then reference it in `index.html` or `style.css`.
- To add a new interactive feature: Implement in `script.js` and link any new event handlers in `index.html`.
- To update styles: Edit `style.css` directly. Use classes for reusable styles.

## Key Files
- `index.html`: Entry point and main content
- `style.css`: All site styles
- `script.js`: All site logic
- `images/`: All static assets

---
For questions about project structure or conventions, review this file and the main source files. If anything is unclear or missing, ask for clarification or examples from the user.
