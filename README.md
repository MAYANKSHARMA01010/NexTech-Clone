# NexTech Solutions

![NexTech Solutions Banner](Assests/background-img.jpeg)

**NexTech Solutions** is a modern, responsive, and aesthetically premium website designed for forward-thinking technology companies. It features a sleek glassmorphism UI, smooth scroll animations, and a fully functional light/dark theme toggle.

## 🚀 Features

- **Premium UI/UX**:
  - **Glassmorphism**: Modern frosted glass effects on navigation and cards.
  - **Fluid Typography**: Text scales perfectly across all devices using `clamp()`.
  - **Micro-Interactions**: Smooth hover states and transitions.
  - **Scroll Animations**: Elements fade in and slide up as you explore the page.

- **🌓 Dynamic Theming**:
  - **Dark Mode**: A deep, sophisticated slate palette (`#030712`) with vibrant cyberpunk accents.
  - **Light Mode**: A clean, "tech-white" palette (`#f8fafc`) with deep shadows and subtle background patterns.
  - **Persistence**: User preference is saved automatically via `localStorage`.

- **📱 Fully Responsive**:
  - Optimized for Mobile, Tablet, and Desktop.
  - Custom mobile navigation with a smooth slide-out menu.
  - Stacked layouts for smaller screens.

## 🛠️ Tech Stack

- **HTML5**: Semantic and accessible structure.
- **CSS3**: heavily utilizing **CSS Variables**, **Flexbox**, **Grid**, and **Media Queries**.
- **JavaScript (ES6+)**: For theme logic, mobile navigation, and Intersection Observer animations.
- **Google Fonts**: inter (Body) and Outfit (Headings).
- **Font Awesome**: For iconography.

## 📂 Project Structure

```
├── index.html       # Main structure
├── style.css        # All styles, variables, and animations
├── script.js        # Logic for themes, menu, and scroll observer
├── Assests/         # Images and resources
└── README.md        # Documentation
```

## ⚡ Setup

No build step required! Simply clone the repository and open `index.html` in your browser.

```bash
git clone https://github.com/MAYANKSHARMA01010/NexTech-Clone.git
cd NexTech-Clone
# Open index.html in your preferred browser
```

## 🎨 Customization

You can easily customize the look by modifying the CSS variables in `style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, ...);
  --bg-color: ...;
}
```

---

© 2025 NexTech Solutions. Built with precision and passion.
