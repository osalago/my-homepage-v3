# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Portfolio Homepage - Dr. Oliver Sala

A modern, responsive portfolio website built with React, Vite, and Zustand.

## Features

- 🎨 Light/Dark theme with localStorage persistence (Zustand)
- 📍 Scroll-spy navigation that highlights active section
- 🖼️ Animated project cards with hover effects
- 📱 Fully responsive design

## Folder Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectCard.css
│   │   │   └── index.js
│   │   └── index.js
│   ├── features/               # Feature-specific components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── index.js
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   └── index.js
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   └── index.js
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   └── index.js
│   │   └── index.js
│   └── index.js
├── data/                       # Static data
│   ├── projects.js
│   └── index.js
├── hooks/                      # Custom React hooks
│   ├── useScrollSpy.js
│   └── index.js
├── store/                      # State management (Zustand)
│   ├── themeStore.js
│   └── index.js
├── styles/                     # Global styles
│   └── globals.css
├── App.jsx                     # Main app component
└── main.jsx                    # Entry point
```

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.0",
    "zustand": "^4.4.0"
  }
}
```

## Installation

1. Install dependencies:
```bash
npm install react-icons zustand
```

2. Copy the `src/` folder contents into your existing Vite/React project.

3. Import and use `App.jsx` as your root component.

## Customization

### Adding/Modifying Projects

Edit `src/data/projects.js`:

```javascript
{
  id: 7,
  title: "Your Project",
  description: "Description of your project",
  image: "https://your-image-url.com/image.jpg",
  technologies: ["React", "Node.js"],
  link: "https://project-link.com"
}
```

### Changing Colors

Modify CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-primary: #4F7DF3; /* Change to your brand color */
}
```

### Changing Fonts

Update the Google Fonts import and font variables in `globals.css`.

## Architecture Notes

### Why Zustand over Context?

- Simpler API with less boilerplate
- Built-in persistence middleware
- Better performance (no unnecessary re-renders)
- Consistent with your existing state management approach

### Component Organization

- **`ui/`**: Reusable components that could be used anywhere (ProjectCard)
- **`features/`**: Page-specific sections (Header, Hero, Projects, Contact)

## Future: Contact Form API (contact-api)

The contact form currently logs to console. When ready to implement:

1. Create API endpoint in `src/services/contactService.js`
2. Update `Contact.jsx` to call the service
3. Add loading/success/error states

---

Built with ❤️ using React + Vite + Zustand
