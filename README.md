# LoopStudios Homepage
![alt text](public/design/desktop-preview.jpg)
This repository contains the solution to the [LoopStudios Landing Page Challenge](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw/hub) from Frontend Mentor. The challenge is to build out this landing page and make it look as close to the design as possible. The solution focuses mostly on HTML & CSS, with a bit of JavaScript included for the mobile navigation toggle. The project was built using HTML, CSS, ReactJS, and Vite.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)


## Live Demo

Check out the live demo of the project [here](https://victorkevz.github.io/LoopStudios-homepage).

## Features

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.

## Technologies Used

- **HTML**
- **CSS**
- **ReactJS**
- **Vite**

## Project Structure

The project follows a structured component-based architecture using ReactJS. Below is an overview of the main components and their responsibilities:

```plaintext
src/
│
├── assets/
│   ├── images/
│   └── ...
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── navbar.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── hero.css
│   │
│   ├── VR/
│   │   ├── VR.jsx
│   │   └── vr.css
│   │
│   ├── Creations/
│   │   ├── Creations.jsx
│   │   └── creations.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── footer.css
│
├── App.jsx
├── App.css
└── main.jsx
```

### Component Overview

- **App.jsx**: The main component that renders all other components.
- **Navbar**: Contains the navigation bar with mobile toggle functionality.
- **Hero**: Displays the hero section of the landing page.
- **VR**: Shows the interactive VR section.
- **Creations**: Displays the creations section with images and titles.
- **Footer**: Contains the footer information.



## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VictorKevz/LoopStudios-homepage.git
   cd LoopStudios-homepage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

After following the installation steps, the application should be running on `http://localhost:5173`. Open this URL in your browser to view the landing page.



Built by Victor Kevz. Inspired by the LoopStudios Landing Page Challenge from Frontend Mentor.