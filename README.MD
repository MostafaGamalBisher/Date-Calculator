# Date Duration Calculator

A clean, responsive web app that calculates the duration between two dates — broken down into years, months, and days, with additional totals in decimal format.

Live demo: https://mostafagamalbisher.github.io/Date-Duration-Calculator/

---

## Features

- Calculates exact duration between two dates (years, months, days)
- Shows total duration expressed in years, months, and days separately
- Current Date shortcut — sets the end date to today automatically
- Working Day option — includes the start date in the count
- Real-time input validation with per-field feedback
- Handles edge cases: leap years, month boundaries, decimal inputs
- Responsive layout for mobile and desktop

---

## Tech Stack

- HTML5
- CSS3 / Sass (compiled via npm)
- Vanilla JavaScript (ES Modules)
- ESLint v9 (flat config)

---

## Project Structure

```
date-calculator/
├── src/
│   ├── scss/          # Sass source files
│   └── js/
│       ├── script.js  # Date calculation logic
│       └── validation.js  # Input validation
├── dist/
│   ├── css/           # Compiled CSS output
│   └── js/
│       └── main.js    # Entry point
├── index.html
├── package.json
└── eslint.config.mjs
```

---

## Getting Started

**Prerequisites:** Node.js installed on your machine.

```bash
# Clone the repository
git clone https://github.com/MostafaGamalBisher/Date-Duration-Calculator.git

# Navigate into the project
cd Date-Duration-Calculator

# Install dependencies
npm install
```

**Development:**

```bash
npm run sass:watch
```

Then open `index.html` with Live Server.

**Build for production:**

```bash
npm run sass:build
```

---

## Author

Mostafa Gamal Bisher
GitHub: https://github.com/MostafaGamalBisher
