# ChatViq React App

AI-Powered Chatbot & Automation Platform —  React.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# 1. Navigate to the project folder
cd chatviq

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

## Project Structure

```
chatviq/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── RobotCursor.jsx       # Custom robot cursor
│   │   ├── ScrollProgress.jsx    # Scroll progress bar
│   │   ├── ParallaxBg.jsx        # Animated background blobs
│   │   ├── Navbar.jsx            # Fixed navigation
│   │   ├── Hero.jsx              # Hero with typing animation + counters
│   │   ├── TechSection.jsx       # Technology cards
│   │   ├── AimlSection.jsx       # AIML code window section
│   │   ├── AutomationSection.jsx # Flow steps + metrics
│   │   ├── DemoSection.jsx       # Interactive tabbed demo
│   │   ├── FeaturesSection.jsx   # Features grid
│   │   ├── PricingSection.jsx    # Pricing cards
│   │   ├── CtaSection.jsx        # Call to action
│   │   ├── Footer.jsx            # Footer links
│   │   ├── ChatWidget.jsx        # Floating chat widget
│   │   └── useScrollAnimation.js # Reusable scroll animation hook
│   ├── styles/
│   │   └── index.css             # All global styles
│   ├── App.jsx                   # Root component
│   └── index.js                  # Entry point
├── package.json
└── README.md
```

## Build for Production

```bash
npm run build
```
