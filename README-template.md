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



### File Structure Setup

shortly-url-shortener/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── logo.svg
│   ├── logo-footer.svg
│   ├── illustration-working.svg
│   ├── icon-brand-recognition.svg
│   ├── icon-detailed-records.svg
│   ├── icon-fully-customizable.svg
│   ├── icon-facebook.svg
│   ├── icon-twitter.svg
│   ├── icon-pinterest.svg
│   ├── icon-instagram.svg
│   ├── bg-shorten-desktop.svg
│   └── bg-shorten-mobile.svg
└── README.md





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



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Browser Support
Provides full version support to the following browser versions:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+
- iOS Safari 14+
- Android Chrome 90+

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

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
- **Gemini** - For the timely and efficient suggestions and elaboration where needed
- **FreeCodeCamp** - For the resources made available

## Author
- Amarachi Onyeke
- GitHub:
