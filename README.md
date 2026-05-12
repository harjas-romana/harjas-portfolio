# Portfolio v3

A modern, high-performance personal portfolio website showcasing software engineering expertise, projects, and technical leadership. Built with React, Vite, and Tailwind CSS with smooth animations and dark/light theme support.

## 🌐 Live Demo

Visit the deployed portfolio: (https://harjas-portfolio-ilhz.onrender.com)

## 📋 Overview

This portfolio features:

- **Hero Section**: System-status themed introduction with tech stack marquee
- **Philosophy**: Engineering ethos and core focus areas
- **Experience**: Internship at QuantAI with detailed project breakdowns
- **Projects Grid**: 6+ production-grade projects spanning distributed systems, e-commerce, AI/ML, and DSP
- **Presence**: GitHub contribution calendar and social links
- **Technical Arsenal**: Curated tech stack across core languages, backend/distributed systems, data engineering, and infrastructure
- **Academic Rigor**: Education, research publications, and industry awards
- **Leadership**: Campus organization involvement and team leadership
- **Theme Toggle**: Seamless dark/light mode switching

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI component library
- **Vite 8** - Lightning-fast build tool with HMR
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Clean icon library
- **React GitHub Calendar** - Git contribution visualization

### Development
- **ESLint** - Code quality analysis
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
portfolio-v3/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation and routing
│   │   ├── Hero.jsx         # Hero section with system logs
│   │   ├── Philosophy.jsx   # Engineering philosophy
│   │   ├── Experience.jsx   # Work experience
│   │   ├── ProjectsGrid.jsx # Projects showcase
│   │   ├── Arsenal.jsx      # Tech stack display
│   │   ├── AcademicRigor.jsx# Education & awards
│   │   ├── Leadership.jsx   # Leadership roles
│   │   ├── Presence.jsx     # Social links & calendar
│   │   ├── Background.jsx   # Animated background
│   │   ├── ThemeToggle.jsx  # Dark/light mode
│   │   └── Footer.jsx       # Footer section
│   ├── context/
│   │   └── ThemeContext.jsx # Global theme state
│   ├── data/
│   │   └── portfolioData.js # Content & configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── styles/              # Global CSS
├── public/                  # Static assets
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── eslint.config.js        # ESLint rules
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harjas-romana/harjas-portfolio
cd portfolio-v3

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The app will run at `http://localhost:5173` with hot module replacement enabled.

### Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Check code quality
npm run lint
```

## 📝 Customization

### Update Personal Information

Edit [src/data/portfolioData.js](src/data/portfolioData.js) to customize:
- Personal details (name, email, social links)
- Hero section content and tech marquee
- Experience details and projects
- Tech stack and skills
- Academic information and awards
- Leadership roles

### Styling

- **Global styles**: [src/index.css](src/index.css)
- **Component styles**: [src/App.css](src/App.css)
- **Tailwind config**: [src/tailwind.config.js](src/tailwind.config.js)

### Theme Colors

Modify the color scheme in [src/tailwind.config.js](src/tailwind.config.js):
- `arctic-bg` / `dark-bg` - Background colors
- `arctic-primary` / `dark-primary` - Text colors
- `arctic-accent` - Accent colors

## 🎨 Features

✨ **Smooth Animations** - Framer Motion for polished transitions  
🌙 **Dark/Light Mode** - Context-based theme switching  
📱 **Responsive Design** - Mobile-friendly layout  
⚡ **Performance** - Optimized Vite build for fast loading  
🎯 **Semantic HTML** - Accessible structure  
♿ **Theme Toggle** - Easy dark mode switching with persistent state

## 🔗 Navigation

The Header component provides smooth scroll navigation to:
- `/hero` - Introduction
- `/philosophy` - Engineering philosophy
- `/experience` - Work experience
- `/projects` - Project showcase
- `/presence` - Social presence

## 📦 Deployment

This project is ready for deployment on:
- **Vercel** - Zero-config deployment from Git
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Static hosting
- **AWS Amplify** - Full-stack hosting

```bash
# Build for production
npm run build

# Outputs to dist/ directory
```

## 🤝 Contributing

This is a personal portfolio. For improvements or suggestions, feel free to open an issue or fork the repository.

## 📄 License

This project is personal and not licensed for public use.

## 👤 About

**Harjas Partap Singh Romana**  
B.Tech CSE '26

- 📧 [harjasr@myyahoo.com](mailto:harjasr@myyahoo.com)
- 🐙 [GitHub](https://github.com/harjas-romana)
- 💼 [LinkedIn](https://linkedin.com/in/harjas04)

```
v4
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ hero1.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components
│  │  ├─ AcademicRigor.jsx
│  │  ├─ Achievements.jsx
│  │  ├─ Arsenal.jsx
│  │  ├─ Background.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Leadership.jsx
│  │  ├─ Philosophy.jsx
│  │  ├─ Presence.jsx
│  │  ├─ ProjectsGrid.jsx
│  │  ├─ SkillsTicker.jsx
│  │  └─ ThemeToggle.jsx
│  ├─ context
│  │  └─ ThemeContext.jsx
│  ├─ data
│  │  └─ portfolioData.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ tailwind.config.js
│  └─ utils
└─ vite.config.js

```