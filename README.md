# Fitness Sports Center

A gym website built for Fitness Sports Center. The site covers everything from services and membership plans to trainer profiles and a contact form. It's fully responsive and supports both dark and light themes.

---

## Features

- Dark and light theme with toggle button in the navbar
- Smooth scroll animations triggered on scroll (fade, slide-in)
- Responsive layout — works on mobile, tablet, and desktop
- Horizontal trainer carousel with auto-play, loop, and drag support
- Membership plans section with three pricing tiers
- Contact form with a location map embed
- Fixed navbar with active section highlighting
- Scroll-to-top FAB button (appears after scrolling down)
- Mobile hamburger menu with blur background
- Page always loads at the top on refresh

---

## Tech Stack

- **React 18** — component-based UI
- **Tailwind CSS 3** — utility-first styling
- **PostCSS / Autoprefixer** — CSS processing
- **Google Fonts** — Unbounded, Koulen, Krona One
- **Create React App** — project setup and build tooling

---

## Setup Instructions

Make sure you have **Node.js** (v16 or higher) installed before starting.

**1. Clone the repository**

```bash
git clone https://github.com/ArkhanShimar/Fitness-Sports-Center
cd Fitness-Sports-Center
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm start
```

The app will open at `http://localhost:3000` in your browser.

**4. Build for production**

```bash
npm run build
```

Output goes into the `build/` folder, ready to deploy.

---

## Project Structure

```
src/
├── assets/
│   └── images/          
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── AboutUs.js
│   ├── Services.js
│   ├── WhyChooseUs.js
│   ├── MembershipPlans.js
│   ├── Trainers.js
│   ├── Contact.js
│   ├── Location.js
│   └── Footer.js
├── contexts/
│   └── ThemeContext.js  # Dark/light theme state
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   ├── scrollAnimations.js
│   └── themeClasses.js
├── App.js
├── index.js
└── index.css
```

