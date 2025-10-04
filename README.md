# Creative Suite 🎨

A beautiful and expressive creative suite combining a photography portfolio (PixelNest) and a royalty-free music library (Auralis). Built with the latest Angular features and dynamically themed with Material 3, this project serves as a showcase of modern, elegant web application development.


*(Note: Replace this with a screenshot or GIF of your application!)*

## ✨ Features

The Creative Suite is designed to be both visually stunning and highly functional, providing a seamless user experience across all devices.

### 🎨 Dynamic Theming Engine
- **Customizable Palette:** Pick any color using the theme picker, and the entire application UI instantly adapts.
- **Material 3 Integration:** Powered by Google's official Material Color Utilities library to generate harmonious, accessible color schemes on the fly.
- **Light & Dark Mode:** Automatically detects and applies the user's system preference for light or dark mode, with a manual toggle for overrides.

### 📸 PixelNest - Photography Gallery
- **Elegant Grid Layout:** A fully responsive, masonry-style grid that beautifully showcases high-resolution photos.
- **Interactive Cards:** Each photo is presented on a card with its title, author, and tags. Hover effects provide a subtle lift and border highlight.
- **Expandable Details:** A "Show More" button smoothly reveals a detailed description for each photo without cluttering the UI.
- **Modal Viewer:** Click on any photo to open a stunning, high-resolution modal view with all the photo's details, perfect for immersive viewing.
- **Easy Downloads:** A clearly marked download button on each card and in the modal allows users to save the photos easily.
- **Loading Skeletons:** A smooth, animated skeleton loader provides an excellent user experience while the photos are being fetched.

### 🎶 Auralis - Music & Sound Library
- **Integrated Audio Player:** Each track features a built-in player with custom Material 3 styling.
- **Playback Controls:** Full control over the audio with play/pause, a seekable wavy progress bar, and a loop/repeat toggle.
- **Ambient Video:** A subtle, looping background video plays in the card header when a track is active, enhancing the sensory experience.
- **Track Details:** Each card provides the track's title, artist, and a detailed description.
- **One-Click Downloads:** Download royalty-free audio files directly from the player card.

### 📱 General & UX
- **Fully Responsive:** The entire application is built with a mobile-first approach, ensuring a flawless experience on desktops, tablets, and phones.
- **Expressive Motion:** Meaningful animations and transitions are used for route changes, modal dialogs, and hover interactions to create a fluid and delightful experience.
- **Functional Feedback Form:** A dedicated page with a working feedback form (powered by Formspree) to collect user thoughts.
- **About Me Page:** A personal section to introduce the creator, complete with stylish links to social media profiles.

## 🚀 Tech Stack

This project is built with a modern, performance-oriented frontend stack.

- **[Angular](https://angular.dev/)**: Core framework (v20+), utilizing:
  - **Standalone Components:** For a modular, NgModule-free architecture.
  - **Signals:** For fine-grained, efficient state management.
  - **Zoneless Change Detection:** For optimal performance.
- **[TypeScript](https://www.typescriptlang.org/)**: For robust, type-safe code.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and responsive UI development.
- **[Material Color Utilities](https://github.com/material-foundation/material-color-utilities)**: For the dynamic theme generation.
- **[Font Awesome](https://fontawesome.com/)**: For a rich set of icons used throughout the application.

## ⚙️ Configuration

This application is designed to be easily customizable.

### 1. Social Media Links

To update the social media links on the "About Me" page, edit the `socialLinks` array in the following file:

`src/components/about/about.component.ts`

```typescript
export class AboutComponent {
  socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'YOUR_GITHUB_URL_HERE', 
      // ...
    },
    {
      name: 'Pinterest',
      icon: 'fab fa-pinterest',
      url: 'YOUR_PINTEREST_URL_HERE',
      // ...
    },
    // Add more or edit existing ones
  ];
}
```

### 2. Feedback Form Endpoint

The feedback form uses [Formspree](https://formspree.io/) for submission. To direct the feedback to your own email address:

1.  Create a new form on Formspree.
2.  Get your unique form endpoint URL.
3.  Replace the `action` attribute in the `<form>` tag in the following file:

`src/components/feedback/feedback.component.html`

```html
<form action="YOUR_FORMSPREE_URL_HERE" method="POST" class="space-y-4">
    <!-- Form fields -->
</form>
```

---

*This project was created as a demonstration of modern web development techniques and design principles.*
