# How AI Shapes What We Eat

An interactive website exploring how AI-driven platforms influence our food choices, access, and habits.

## Setup

1. Open `index.html` in a web browser to view the site.

## Adding a Background Image or Video

The hero section supports both video and image backgrounds. To add your own:

### Option 1: Video Background

1. Create an `assets` folder in the project directory
2. Add your video file (recommended: `.mp4` or `.webm` format)
3. In `index.html`, uncomment the video section (lines 20-24) and update the file paths:

```html
<video class="hero__video" autoplay muted loop playsinline>
  <source src="assets/hero-video.mp4" type="video/mp4">
  <source src="assets/hero-video.webm" type="video/webm">
</video>
```

4. Comment out or remove the image section if you're using video

### Option 2: Image Background

1. Create an `assets` folder in the project directory
2. Add your image file (recommended: high-resolution `.jpg` or `.png`)
3. In `index.html`, uncomment the image section (line 27) and update the file path:

```html
<img class="hero__image" src="assets/hero-image.jpg" alt="" />
```

4. Comment out or remove the video section if you're using an image

### Recommended Specifications

- **Video**: 1920x1080 resolution, H.264 codec, 10-30 seconds, optimized for web
- **Image**: 1920x1080 or larger, optimized for web (compressed)

## Customization

- Edit `styles.css` to adjust colors, fonts, and spacing
- Modify content in `index.html` to update text and sections
- Add more case studies in `script.js` (see the `cases` array)

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

