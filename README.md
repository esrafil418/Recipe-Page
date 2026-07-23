# Simple Omelette Recipe Page

A clean, responsive recipe page built with React and Tailwind CSS. This project is a solution to the [Frontend Mentor Recipe Page Challenge](https://www.frontendmentor.io/learning-paths/getting-started-on-frontend-mentor-XJhRWRREZd/challenge/65e6f48617e502f0b6ca3d02/start).

![Recipe Page Screenshot](public/Screenshot-2026-07-21.png)

## 🎯 Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page
- View the recipe with clearly structured sections (preparation time, ingredients, instructions, nutrition)

### Links

- Solution URL: [frontendmentor.io](https://www.frontendmentor.io/learning-paths/getting-started-on-frontend-mentor-XJhRWRREZd/challenge/65e6f48617e502f0b6ca3d02/start)
- Live Site URL: [recipe-page](https://recipe-page-challenge.surge.sh/)

## ✨ Features

- **Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- **Data-Driven Content** - Recipe content is stored in arrays for easy maintenance
- **Clean Typography** - Uses a combination of serif and sans-serif fonts
- **Accessible** - Semantic HTML and proper heading hierarchy
- **Interactive Elements** - Hover states and visual feedback (if applicable)

## 🛠️ Technologies Used

- **React 18** - UI Library
- **TypeScript** (optional) - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for bullet points
- **Vite** - Build tool and development server

## 📚 What I learned

While building this project, I practiced several useful React and Tailwind CSS techniques:

- Used `min-h-screen` on the `<main>` element to ensure the page fills the entire viewport height.
- Created a responsive card layout with `w-full max-w-184 bg-white sm:rounded-3xl p-0 sm:p-10`.
- Made the recipe image responsive using `w-full sm:rounded-xl`.
- Applied responsive spacing with `p-8 sm:p-0 sm:pt-10` to improve the layout across different screen sizes.
- Improved text readability by using `leading-7` for the recipe description.
- Added consistent spacing between list items with `space-y-3`.
- Used `shrink-0` on the `Dot` icon from `lucide-react` to prevent it from shrinking when the text wraps.
- Stored all recipe data (ingredients, instructions, nutrition, and preparation time) in separate arrays and rendered them dynamically using React's `.map()` method instead of hardcoding the content.
- Practiced building reusable UI by separating the data from the presentation, making the component easier to maintain and update.
