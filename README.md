# macOS Style Portfolio

A personal portfolio built with React and Vite that recreates the feel of a macOS desktop. The site opens projects, skills, resume, calendar, terminal, Spotify, and contact views inside draggable desktop windows for a more interactive portfolio experience.

## Preview

- Desktop-inspired navigation bar and dock
- Draggable and resizable app windows
- Projects window with repository and demo links
- Skills window rendered from markdown content
- Embedded resume viewer
- Calendar widget
- Interactive terminal with custom commands
- Spotify playlist embed
- Contact form powered by EmailJS

## Tech Stack

- React 19
- Vite
- SCSS
- Context API
- `react-rnd`
- `react-terminal`
- `react-calendar`
- `react-syntax-highlighter`
- `@emailjs/browser`

## Project Structure

```text
src/
  components/
    context/
    windows/
  assets/
public/
  dock-icons/
  navbar_icon/
  Projects/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add environment variables

Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are used by the Mail window contact form.

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Run lint checks

```bash
npm run lint
```

## Main Windows

### Github Projects

Displays featured work using local JSON data with project tags, repository links, and live demo links.

### Skills

Loads content from `public/skills.md` and presents it in a code-editor-like style.

### Resume

Embeds `public/myResume.pdf` directly inside a window.

### Calendar

Uses `react-calendar` for a native utility-app feel.

### Terminal

Offers commands like `about`, `skills`, `stack`, `projects`, `contact`, and `help`.

### Spotify

Embeds a Spotify playlist in a dedicated window.

### Mail

Provides a contact form that sends messages through EmailJS.

## Why This Project Stands Out

Instead of a typical scrolling portfolio, this project presents your work like a desktop operating system. That makes the experience feel playful, memorable, and much more personal than a standard landing page.

## Suggestions for Improvement

- Add a hero or boot/loading sequence so first-time visitors immediately understand the desktop concept.
- Improve mobile behavior, since multi-window desktop layouts usually need a different interaction model on small screens.
- Add window focus management and stacking order so active windows always come forward cleanly.
- Replace placeholder or unrelated project links and images with only final, polished portfolio pieces.
- Add error feedback in the Mail app when EmailJS fails so visitors know what happened.
- Improve accessibility with better `alt` text, keyboard support, and clearer focus states.
- Consider persisting open windows or theme preferences in local storage.

## Notes

- `npm run lint` currently completes with warnings about unused imports and React fast-refresh context exports.
- In this environment, `npm run build` did not complete because Vite hit a Windows `spawn EPERM` error while loading config. If it builds normally on your machine, you can ignore that environment-specific issue.

## Author

**Saheel Atugade**

- GitHub: [SaheelAtugade](https://github.com/SaheelAtugade)
- LinkedIn: [sahil-atugade](https://www.linkedin.com/in/sahil-atugade/)
