# ClassIQ Landing Page

A modern, responsive landing page for an online learning platform.
ClassIQ is designed to showcase online courses, certifications, instructors, and learning opportunities in a clean and engaging interface.

## Live Demo
https://yadneshdevkar.github.io/classiq-landing-page

## Features

- Desktop-1 landing page for logged-out users
- Login screen
- Sign Up screen
- Logged-in course enrollment screen
- Client-side login and sign-up interactions
- Logout interaction
- Responsive layouts for desktop, tablet, and mobile
- Reusable local image assets and shared design variables

## Screen Flow

1. Visitors initially see the Desktop-1 landing page.
2. Selecting **Login** opens the Login screen.
3. Selecting **Sign Up** opens the Sign Up screen.
4. Submitting either form displays the logged-in enrollment screen.
5. Selecting **Logout** returns to the landing page.

Authentication is implemented as a simple client-side demonstration using `localStorage`. It is not connected to a backend or production authentication service.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Flexbox
- CSS Grid
- Responsive Design

No frameworks or external UI libraries are used.

## Project Structure

```text
.
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```


## Design and Responsiveness

The implementation reuses the provided ClassIQ assets, typography, colors, spacing, and responsive breakpoints. Layouts adapt for smaller screens rather than simply scaling the desktop design.
