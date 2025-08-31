# Portfolio Website

A modern, responsive portfolio website built with React for showcasing full-stack development projects and skills.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Interactive Elements**: Hover effects and scroll-triggered animations
- **Professional Layout**: Clean, modern design focused on showcasing projects
- **Accessible**: Built with accessibility best practices

## Technologies Used

- React 18
- CSS3 with CSS Variables
- Modern JavaScript (ES6+)
- Responsive Grid & Flexbox
- Intersection Observer API
- Local Storage for theme persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Replace `[Your Name]` with your actual name
   - Update social media links (GitHub, LinkedIn)

2. **About Section** (`src/components/About.js`):
   - Update the about me text
   - Modify the skills array with your technologies

3. **Projects Section** (`src/components/Projects.js`):
   - Replace the sample projects with your actual projects
   - Update project titles, descriptions, technologies, and links
   - Add your project images to the `public` folder

4. **Contact Section** (`src/components/Contact.js`):
   - Update email address and location
   - Update social media links

### Styling

- Colors and themes are defined in `src/index.css` using CSS variables
- Component-specific styles are in their respective CSS files
- Modify the color scheme by updating the CSS variables in `:root` and `[data-theme="dark"]`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/Navigation.js`

## Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## Deployment

The built files can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).