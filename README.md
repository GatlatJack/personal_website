# Gatlat Deng Bum - Personal Portfolio Website

A sophisticated, responsive portfolio website showcasing Computer Science expertise, built with modern web technologies and enhanced with advanced visual effects.

## Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Advanced Visual Effects**: 
  - Animated GIF background integration with layered compositions
  - Multi-layered text shadows and glass-morphism effects
  - Smooth color-changing animations with custom palettes
  - Dynamic backdrop filters and transparency effects
- **Typography Excellence**: Custom Gentium Basic serif font for enhanced readability
- **Interactive Elements**: 
  - Mobile-friendly navigation with hamburger menu
  - Smooth scrolling between sections
  - Contact form with validation
  - Hover effects and micro-interactions
- **Professional Content**: Tailored for Computer Science and Bioinformatics expertise

## Sections

1. **Hero Section**: Dynamic introduction with animated name, layered backgrounds, and call-to-action
2. **About**: Personal story focused on McGill University and bioinformatics experience
3. **Education & Achievements**: Academic background with scholarships and language proficiency
4. **Skills**: Technical competencies organized by programming, frameworks, and research areas
5. **Projects**: Featured bioinformatics and full-stack development projects
6. **Blog**: Curated posts on technology, university life, and professional growth
7. **Contact**: Professional contact form and social media integration

## Technologies Used

- **Frontend**: HTML5 (Semantic markup), CSS3 (Advanced Grid, Flexbox, Animations)
- **JavaScript**: ES6+ with vanilla DOM manipulation
- **Typography**: Custom web fonts (Gentium Basic, Inter from Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Visual Effects**: 
  - CSS backdrop-filter for glass-morphism
  - Multi-layered text shadows and animations
  - Custom keyframe animations with easing
  - Layered background compositions with GIF integration
- **Color Palette**: Custom brown/white/green theme with animated transitions
- **Assets**: Integrated personal photography and animated GIF backgrounds

## Advanced Styling Features

### Glass-Morphism Design
- Transparent cards with backdrop-filter blur effects
- Layered visual hierarchy with opacity controls
- Professional aesthetic with depth and dimension

### Animation System
- **Name Animation**: 12-second color cycle through custom palette (browns, greens, whites)
- **Smooth Transitions**: Ease-in-out timing functions for professional feel
- **Multi-layered Shadows**: Complex shadow stacking for dramatic text effects

### Background Integration
- **Layered Composition**: Personal photo as base with animated GIF overlay
- **Dynamic Positioning**: Strategic placement of animated elements
- **Seamless Blending**: No visible borders for smooth visual flow

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize the content** with your information:
   - Update personal details and contact information
   - Replace `assets/me.png` with your professional photo
   - Replace `assets/dreams.gif` with your preferred animated background
   - Update `assets/Gatlat_Deng_Bum_Resume.pdf` with your resume
   - Modify project descriptions and add your GitHub links
   - Update blog content and social media profiles

## Customization Guide

### Personal Branding
- **Hero Section**: Features animated "Gatlat" text with custom color cycling
- **Background Images**: Layered system combining personal photo with animated GIF
- **Color Palette**: Brown/white/green theme throughout all components
- **Typography**: Gentium Basic serif font for professional academic appearance

### Content Areas
- **Education**: McGill University focus with scholarship achievements
- **Skills**: Bioinformatics and full-stack development emphasis  
- **Projects**: Real-world applications in genomics and medical diagnostics
- **Blog**: Academic and professional development topics

### Visual Customization
- **Color Scheme**: Modify CSS custom properties for theme colors
- **Animations**: Adjust timing in keyframe animations (currently 12s cycle)
- **Shadows**: Multi-layered text shadow system for depth
- **Glass Effects**: Backdrop-filter properties for modern aesthetics

### Contact Form
The contact form currently shows a success message when submitted. To make it functional:
- Connect to a backend service (e.g., Formspree, Netlify Forms)
- Add server-side validation
- Set up email notifications

### Resume Download
The portfolio includes a "Download Resume" feature:
- Currently uses a placeholder file in `/assets/`
- Replace `resume-placeholder.txt` with your actual PDF resume
- Name your PDF: `Gatlat_Deng_Bum_Resume.pdf`
- A printable HTML template is provided in `/assets/resume-template.html`
- You can print the HTML template to PDF or create your own professional resume

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Stylesheet
├── scripts/
│   └── main.js           # JavaScript functionality
├── assets/
│   ├── resume-placeholder.txt    # Placeholder resume file
│   └── resume-template.html      # Printable resume template
├── .github/
│   └── copilot-instructions.md
└── README.md             # This file
```

## Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+
- **Advanced Features**: 
  - CSS backdrop-filter support required for glass-morphism effects
  - CSS Grid and Flexbox support for responsive layouts
  - JavaScript ES6+ support for interactive features
  - Web font loading support for custom typography

## Performance Optimizations

- **Semantic HTML5** structure for accessibility and SEO
- **Efficient CSS** with minimal reflows and repaints
- **Optimized animations** with hardware acceleration
- **Responsive images** with proper sizing and lazy loading
- **Web font optimization** with font-display: swap
- **JavaScript performance** with event delegation and efficient DOM queries

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements to the base template, consider submitting a pull request!

## License

This project is open source and available under the [MIT License](LICENSE).

## Performance Features

- Optimized CSS with efficient selectors
- Lightweight vanilla JavaScript (no frameworks)
- Responsive images and layouts
- Smooth animations with reduced motion consideration

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload all files to your hosting provider or connect your repository to a deployment service.

## Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please create an issue or pull request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
