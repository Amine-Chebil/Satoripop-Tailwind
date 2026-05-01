# Satoripop Tailwind

## Description
A modern web project built with Tailwind CSS, Vite, and Glide.js carousel library.

Check it out from this link: https://satoripop-tailwind.vercel.app

## Project Structure
```
├── index.html              # Main HTML file
├── style.css               # Base Tailwind stylesheet
├── main.js                 # Main JavaScript entry point
├── counter.js              # Counter component logic
├── tailwind.config.js      # Tailwind CSS configuration
├── fonts/                  # Custom font files
├── img/                    # Image assets
├── public/                 # Static assets
├── outputcss/              # Generated CSS output
├── defaultTW/              # Default Tailwind utilities
└── node_modules/           # Project dependencies
```

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

## Installation Guide
```bash
# Clone and navigate to the project directory
git clone https://github.com/Amine-Chebil/Satoripop-Tailwind.git
cd Satoripop-Tailwind

# Install dependencies
npm install
```

## How to Run It

### Development Mode
```bash
# Start Tailwind CSS watch mode
npm start

# In another terminal, start Vite dev server
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Dependencies
- **tailwindcss** (^3.3.3) - Utility-first CSS framework
- **vite** (^4.4.5) - Fast build tool and dev server
- **@glidejs/glide** (^3.6.0) - Carousel/slider library
- **tw-elements** (^1.0.0-beta2) - Tailwind CSS components library
