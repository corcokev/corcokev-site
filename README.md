# Kevin Corcoran Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Vite. It showcases my background, skills, experience, education, and provides a way to contact me. The site is fully responsive and styled with Tailwind CSS, featuring smooth animations and a modern UI.

## Features

- **Responsive design** for desktop and mobile
- **Animated navigation** and sidebar
- **Skills grid** with icons and proficiency levels
- **Experience** sections with clear formatting
- **Contact form** with validation

## Components Overview

### `Home`

Landing section with my name, title, location, and portrait.

### `AboutMe`

Brief summary of my background, technical focus, and strengths.

### `Skills`

A grid of technology cards, each showing an icon, name, and my proficiency (Advanced, Intermediate, Beginner). Technologies include Java, TypeScript, JavaScript, Python, React, Node.js, AWS, Git, Ruby, SQL, GraphQL, Dart, Flutter, Dagger, Guice, and GCP.

### `Experience`

Details my professional experience, including:

- Role and company (e.g., Software Development Engineer at AWS/Amazon)
- Location and dates
- Bullet points describing key projects, leadership, and impact

### `Contact`

A form for visitors to send me a message. Includes validation for name, email, and message fields.

### `Navbar`

Sticky navigation bar with animated sidebar for mobile. Links to all main sections.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Update your information and images in the `src/assets` and component files.
- Adjust styles in `classUtils.ts` and Tailwind config as needed.

---

This project uses Vite, React, TypeScript, Tailwind CSS, Framer Motion, and React Hook Form.
