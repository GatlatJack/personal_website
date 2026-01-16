# Gatlat Deng Bum - Personal Portfolio Website

A sophisticated, responsive portfolio website showcasing Computer Science expertise, built with modern web technologies and enhanced with advanced visual effects and animations.

## Features

- **Responsive Design**: Mobile-first approach optimized for all devices and screen sizes
- **Advanced Visual Effects**: 
  - Animated GIF background integration with seamless layered compositions
  - Multi-layered text shadows and glass-morphism effects with backdrop-filter
  - Dynamic color-changing animations with custom brown/white/green/yellow palette
  - Sophisticated transparency effects and visual depth
- **Typography Excellence**: Custom Gentium Basic serif font for professional academic appearance
- **Interactive Elements**: 
  - Mobile-friendly navigation with smooth hamburger menu transitions
  - Smooth scrolling between sections with custom easing
  - Professional contact form with client-side validation
  - Hover effects, micro-interactions, and scroll-to-top functionality
- **Professional Content**: Tailored for Computer Science, Bioinformatics, and Full-Stack Development expertise

## Sections

1. **Hero Section**: Dynamic introduction with animated "Gatlat" text, layered backgrounds (personal photo + animated GIF), and professional call-to-action buttons
2. **About**: Personal story highlighting McGill University experience and bioinformatics research background
3. **Education & Achievements**: Academic credentials, scholarships (WUSC-SRP, Windle International), and multilingual proficiency
4. **Skills**: Technical competencies organized by programming languages, frameworks/tools, and research specializations
5. **Projects**: Featured bioinformatics applications, medical diagnostic systems, and full-stack development work
6. **Blog**: Curated posts on bioinformatics programming, university life, and professional development
7. **Contact**: Streamlined contact information (email, location) with integrated social media links and contact form

## Technologies Used

- **Frontend**: HTML5 (Semantic structure), CSS3 (Advanced Grid, Flexbox, Custom Properties, Keyframe Animations)
- **JavaScript**: ES6+ vanilla JavaScript with efficient DOM manipulation and event handling
- **Typography**: Custom web fonts (Gentium Basic serif, Inter sans-serif from Google Fonts)
- **Icons**: Font Awesome 6.4.0 for consistent iconography
- **Visual Effects**: 
  - CSS backdrop-filter for glass-morphism design
  - Multi-layered text shadows (up to 4 layers) with rgba transparency
  - Custom keyframe animations with smooth easing functions
  - Layered background system with z-index management
  - Dynamic color transitions with 6-second animation cycles
- **Color System**: Professional brown/white/green/yellow theme with consistent hover states
- **Assets**: Personal photography integration, animated GIF backgrounds, and PDF resume download

## Advanced Styling Features

### Glass-Morphism Design
- Transparent cards with backdrop-filter: blur() effects
- Layered visual hierarchy with strategic opacity controls
- Modern aesthetic with subtle depth and dimensional effects
- Consistent transparency throughout project cards and sections

### Enhanced Animation System
- **"Gatlat" Text Animation**: 6-second color cycle featuring:
  - Brown shades (#8b4513, #a0522d, #cd853f, #daa520)
  - Light tones (#f4e4bc, #fff8dc, #ffffff, #f5f5f5)
  - Darker greens (#228b22, #32cd32)
  - Rich yellows (#ffd700, #ffb347)
  - Natural tan/brown transitions (#d2b48c, #bc9a6a, #9d7c47)
- **Smooth Transitions**: Professional ease-in-out timing functions throughout
- **Multi-layered Shadows**: Complex shadow stacking for dramatic visual impact
- **Scroll-to-top Button**: Color-consistent brown theme with smooth fade-in/out

### Background Integration
- **Layered Composition**: Professional photo (Jack.png) as base layer with animated GIF (dreams.gif) overlay
- **Strategic Positioning**: Left-aligned animated element with invisible borders for seamless integration  
- **Responsive Scaling**: Optimized sizing for different screen resolutions
- **Performance Optimized**: Efficient layering with proper z-index management

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize the content** with your information:
   - Update personal details and contact information
   - Replace `assets/Jack.png` with your professional photo
   - Replace `assets/dreams.gif` with your preferred animated background
   - Update `assets/Gatlat_Deng_Bum_Resume.pdf` with your resume
   - Modify project descriptions and add your GitHub links
   - Update blog content and social media profiles (LinkedIn, GitHub, X/Twitter)

## Customization Guide

### Personal Branding
- **Hero Section**: Features animated "Gatlat" text with 6-second color cycling through browns, greens, and yellows
- **Background Images**: Sophisticated layered system combining personal photo with positioned animated GIF
- **Color Palette**: Consistent brown/white/green/yellow theme across all interactive elements
- **Typography**: Gentium Basic serif font for distinguished academic and professional appearance

### Content Areas
- **Education**: McGill University Computer Science program with WUSC-SRP scholarship achievements
- **Skills**: Comprehensive bioinformatics, full-stack development, and research competencies  
- **Projects**: Real-world applications including genomic data analysis, medical diagnostics, and ChIP-seq research
- **Blog**: Professional content covering bioinformatics programming, university experience, and technical insights
- **Contact**: Streamlined professional contact (email and location only) with integrated social media

### Visual Customization
- **Color Animation**: Enhanced 6-second cycle with rich browns, forest/lime greens, and gold/peach yellows
- **Shadow Effects**: Multi-layered text shadows with up to 4 depth levels and rgba transparency
- **Glass Effects**: Professional backdrop-filter properties for modern glass-morphism aesthetics
- **Hover States**: Consistent brown (#8b4513) theme across all interactive elements including social icons and buttons

### Social Media Integration
The portfolio includes professional social media links:
- **LinkedIn**: https://www.linkedin.com/in/gatlatdengbum2028
- **GitHub**: https://github.com/gatlatjack  
- **X/Twitter**: https://x.com/GatlatJack82151 (@GatlatJack82151)
- **Email**: jackgatlat@gmail.com

### Contact Form
The contact form includes client-side validation and user feedback. To make it fully functional:
- Connect to a backend service (e.g., Formspree, Netlify Forms, EmailJS)
- Add server-side validation and spam protection
- Set up email notifications and auto-responders

### Resume Download
The portfolio includes integrated resume download functionality:
- Download button in hero section and about section
- PDF file: `assets/Gatlat_Deng_Bum_Resume_Final_1.pdf`
- Accessible via direct download links throughout the site

### Resume Download
The portfolio includes a "Download Resume" feature:
- Currently uses a placeholder file in `/assets/`
- Replace `resume-placeholder.txt` with your actual PDF resume
- Name your PDF: `Gatlat_Deng_Bum_Resume_Final_1.pdf`
- A printable HTML template is provided in `/assets/resume-template.html`
- You can print the HTML template to PDF or create your own professional resume

## File Structure

```
Gatlat/
├── index.html                    # Main HTML file with complete portfolio structure
├── styles/
│   └── main.css                 # Advanced stylesheet with animations and glass-morphism
├── scripts/
│   └── main.js                  # Interactive JavaScript with scroll-to-top functionality
├── assets/
│   ├── Jack.png                 # Professional hero photo
│   ├── dreams.gif               # Animated background overlay
│   ├── Gatlat_Deng_Bum_Resume_Final_1.pdf  # Downloadable resume
│   ├── image.png                # McGill University logo
│   ├── genedig.png              # Blog post image for bioinformatics content
│   └── 1sem.png                 # Blog post image for McGill semester reflection
├── .github/
│   └── copilot-instructions.md  # Development guidelines and project structure
└── README.md                    # Comprehensive project documentation
```

## Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+, Android Chrome 88+
- **Advanced Features Required**: 
  - CSS backdrop-filter support for glass-morphism effects
  - CSS Grid and Flexbox support for responsive layouts
  - JavaScript ES6+ support for interactive functionality
  - Web font loading support for custom Gentium Basic typography
  - CSS custom properties (variables) support for theming

## Performance Optimizations

- **Semantic HTML5** structure for optimal accessibility and SEO performance
- **Efficient CSS** with optimized selectors and minimal reflows/repaints
- **Hardware-accelerated animations** using transform and opacity properties
- **Responsive design** with mobile-first CSS and optimized breakpoints
- **Web font optimization** with font-display: swap for improved loading
- **Vanilla JavaScript** for minimal overhead and fast execution
- **Asset optimization** with properly sized images and efficient file formats

## Deployment Options

This static website can be deployed to various hosting platforms:

### Recommended Platforms
- **GitHub Pages**: Free hosting with custom domain support
- **Netlify**: Advanced features with form handling and continuous deployment
- **Vercel**: Fast deployment with excellent performance optimization
- **Azure Static Web Apps**: Enterprise-grade hosting with custom domain support

### Deployment Steps
1. **GitHub Pages**: Connect repository and enable Pages in repository settings
2. **Netlify**: Connect GitHub repository for automatic deployment on commits
3. **Vercel**: Import project from GitHub with zero-configuration deployment
4. **Azure**: Use Azure for Students account for free hosting with custom domain

### Custom Domain Setup
- Configure DNS records to point to your hosting platform
- Set up HTTPS/SSL certificates (usually automatic with modern platforms)
- Update social media links and contact information as needed

## Repository Information

- **Repository**: Private GitHub repository for professional portfolio
- **Owner**: GatlatJack
- **Branch**: main (production-ready)
- **License**: Private/Personal use (not open-source)

## Recent Updates

- Enhanced color animation system with yellow integration and light green removal
- Removed phone number from contact section for privacy
- Updated README with comprehensive technical documentation
- Improved color consistency across all interactive elements
- Added scroll-to-top functionality with theme-consistent styling
