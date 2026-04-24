# Shortly - URL Shortening App

A modern, responsive URl shortening web application that allows users to shorten long URLs, copy them to clipboard, and track their shortened links. Built with HTML5, Bootstrap 5, CSS, and Vanilla Javascript.

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Challenges Solved](#challenges-solved)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## Overview

This project is a solution to the [Frontend Mentor "Shortly" challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). It provides a pixel-perfect, responsive implementation of a URL shortening service with API integration.

**Live Demo:** [View Live Demo](#) *(url-shortening-app-five.vercel.app)*

##  Features

### Core Functionality
-  **URL Shortening** - Instant shortening of long URLs using external API
-  **Copy to Clipboard** - One-click copying of shortened URLs
-  **Input Validation** - Real-time URL validation with error messages
-  **No Page Reloads** - Seamless AJAX form submission
-  **Local Storage** - Persists shortened links after page refresh
- **Responsive Design** - Perfectly adapts to all screen sizes

### UI/UX Features
-  **Pixel-Perfect Design** - Matches Frontend Mentor design specifications
-  **Smooth Animations** - Card slide-in effects and button hover states
-  **Mobile-First Approach** - Hamburger menu for mobile devices
-  **Loading States** - Visual feedback during API requests
-  **Accessibility** - Semantic HTML and ARIA labels

##  Technologies Used

### Frontend
- **Technology**

- **HTML5** (Semantic structure)
- **CSS3**  (Custom styling and animations)
- **Bootstrap 5.3.8**  (Responsive layout and components)
- **Vanilla JavaScript** (DOM manipulation, API calls, interactivity)
- **Google Fonts**  (Poppins font family)

### APIs
- **TinyURL API** - URL shortening service (primary)
- *(Alternative: shrtco.de API)*

### Tools
- **Local Storage** - Client-side data persistence
- **Fetch API** - Asynchronous HTTP requests
- **Clipboard API** - Copy to clipboard functionality


### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Live Server extension (optional but recommended)

## USage

### Shortening a URl
- Shortening a long URL in the input field
- Click the "Shorten it!" button
- The shortened URL appears below with a copy button
- Click "Copy" to copy the shortened link to your clipboard

### VAlid URL Formats
- https://www.example.com
- http://example.com
- www.example.com
- example.com


## Responsive Design

### Responsive Features

- Collapsible hamburger menu on mobile
- Fluid images and scalable typography
- Stacked feature cards on mobile
- Adjusted padding and margins for small screens
- Touch-friendly button sizes

### AI Collaboration

- In the course of this project, I worked with an AI coding assistant who helped me with the following:
- Connecting the line spilling out- Used wrapper with padding-left/right matching Bootstrap gutters
- White SVG on purple background- Created ::before pseudo-element with opacity:0.1
- API not working- Switched from shrtco.de to TinyURL API
- Media responsiveness


## Browser Support
Provides full version support to the following browser versions:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+
- iOS Safari 14+
- Android Chrome 90+

## Challenges Solved

- Connecting Line Between Cards
Challenge: Creating a connecting line that spans between offset cards without spilling out.
Solution: Used absolute positioning with wrapper and proper padding constraints.

- Background Pattern Blending
Challenge: SVG pattern with white parts clashing with purple gradient background.
Solution: Implemented pseudo-element overlay with reduced opacity for subtle texture.

- URL Validation
Challenge: Accepting various URL formats (with/without protocol, www, etc.)
Solution: Created flexible validator that adds protocol when missing.

- Mobile Responsive Navbar
Challenge: Bootstrap navbar not collapsing properly on all devices.
Solution: Ensured proper meta tags and Bootstrap JS placement.

- API Reliability
Challenge: Some URL shortening APIs being blocked.
Solution: Implemented fallback API options with TinyURL as primary.

## Acknowledgement

- **KodeCamp**- For the platform to get back to 'work' using this assessment
- **Frontend Mentor** - For the design challenge
- **TinyURL** - For providing free URL shortening API
- **Bootstrap Team** - For the responsive framework
- **Google Fonts** - For Poppins font family
- **Gemini and Copilot** - For the timely and efficient suggestions and elaborations where needed
- **FreeCodeCamp** - For the resources made available

## Author
- Amarachi Onyeke
- GitHub:
