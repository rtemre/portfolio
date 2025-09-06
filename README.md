# Portfolio Reimagined

A modern React application built with Vite, utilizing Tailwind CSS for building responsive web applications with component-based architecture.

## 🚀 Features

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Component Architecture** - Modular, reusable React components
- **Responsive Design** - Mobile-first approach for all screen sizes
- **Hot Module Replacement** - Instant updates during development

## 📋 Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Start the development server:

```bash
npm start
# or
npm run dev
```

## 📁 Project Structure

```
portfolio-reimagined/
├── public/              # Static assets
│   ├── favicon.svg
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Homepage.jsx
│   │   └── ...
│   ├── styles/          # CSS files
│   │   ├── tailwind.css
│   │   └── main.css
│   ├── App.jsx          # Main app component
│   └── index.jsx        # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling with custom utility classes and components:

- **Global Styles**: Imported in `src/index.jsx`
- **Component Classes**: Pre-built classes for buttons, cards, forms
- **Custom CSS Variables**: Defined in `src/styles/tailwind.css`

## 🧩 Customization

To customize the Tailwind configuration, edit the `tailwind.config.js` file:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Your customizations
    },
  },
  plugins: [],
};
```

## 📦 Build for Production

Build the application for production:

```bash
npm run build
```

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints:

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## 🏗️ Architecture

- **Component-Based**: Each UI element is a reusable React component
- **Routing**: React Router for navigation between pages
- **State Management**: React hooks for local state
- **Styling**: Tailwind CSS with custom utilities
- **Build Tool**: Vite for fast development and optimized builds

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Components inspired by modern design systems

Built with ❤️ using modern web technologies
