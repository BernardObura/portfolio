# Bernard Obura - Portfolio Website

A modern, responsive portfolio website built with React, featuring a professional design, interactive elements, and seamless user experience.

## 🌟 **Live Website**
**Production URL**: https://vmzipaiq.manus.space

## ✨ **Features**

### 🎨 **Modern Design & UI/UX**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Light/Dark Theme Toggle**: Seamless theme switching with persistent preferences
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Professional Layout**: Clean, modern design with excellent typography
- **Interactive Elements**: Hover effects, smooth transitions, and engaging micro-interactions

### 📧 **Contact Form with Email Integration**
- **Formspree Integration**: Real email delivery to bernardobura@gmail.com
- **Success Messaging**: Professional success notification with auto-hide
- **Form Reset**: Automatic form clearing after successful submission
- **Validation**: Client-side form validation for better user experience
- **Responsive Form**: Optimized for all screen sizes

### 🛠️ **Comprehensive Skills Showcase**
- **Categorized Display**: Skills organized by Frontend, Backend, Databases, and Tools
- **Official Technology Logos**: Authentic logos for all 16+ technologies
- **Interactive Cards**: Hover effects and smooth animations
- **Technologies Include**:
  - **Frontend**: JavaScript, TypeScript, React, HTML5, CSS3, Responsive Design
  - **Backend**: Node.js, Express.js, Python, REST APIs
  - **Databases**: MongoDB, PostgreSQL, SQL
  - **Tools**: Git, Docker, AWS

### 🚀 **Projects Portfolio**
- **Professional Project Images**: High-quality showcase images for each project
- **Active Links**: Functional Live Demo and GitHub repository links
- **Project Details**: Comprehensive descriptions and technology stacks
- **Responsive Cards**: Optimized display across all devices
- **Hover Effects**: Engaging image and card animations

### 🧭 **Enhanced Navigation**
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile-Friendly**: Responsive hamburger menu for mobile devices
- **Hover Effects**: Professional navbar styling with color transitions
- **Active States**: Clear visual feedback for user interactions

## 🛠️ **Technologies Used**

### **Frontend**
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Professional animations and transitions
- **Lucide React**: Beautiful, customizable icons

### **UI Components**
- **Shadcn/UI**: High-quality, accessible UI components
- **Custom Components**: Button, Card, Input, Textarea, Badge components
- **Responsive Grid**: CSS Grid and Flexbox for layout

### **Form Integration**
- **Formspree**: Professional form handling and email delivery
- **Client-side Validation**: Real-time form validation
- **Success Handling**: Professional user feedback system

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (version 18 or higher)
- npm or yarn package manager

### **Installation**

1. **Extract the project files**
   ```bash
   unzip bernard-portfolio-source-code.zip
   cd bernard-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 **Project Structure**

```
bernard-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, and media files
│   │   ├── *.png          # Technology logos
│   │   ├── *.jpg          # Project images
│   │   └── *.svg          # Vector graphics
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Shadcn/UI components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind CSS imports
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 **Customization Guide**

### **Personal Information**
Update your details in `src/App.jsx`:

```javascript
// Contact Information
const contactInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your City, Country"
}
```

### **Skills and Technologies**
Add or modify skills in the `skillCategories` object:

```javascript
const skillCategories = {
  frontend: [
    { name: 'Technology Name', logo: logoImport },
    // Add more technologies
  ],
  // Add more categories
}
```

### **Projects**
Update the `projects` array with your own projects:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    image: projectImage,
    liveDemo: 'https://your-demo-url.com',
    github: 'https://github.com/yourusername/project'
  }
]
```

### **Contact Form**
To use your own Formspree endpoint:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the endpoint in the `handleSubmit` function:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the configuration
})
```

### **Adding New Technology Logos**
1. Add logo image to `src/assets/`
2. Import the logo in `App.jsx`
3. Add to the appropriate skill category

### **Styling Customization**
- **Colors**: Modify `tailwind.config.js` for theme colors
- **Fonts**: Update font imports in `index.css`
- **Animations**: Customize Framer Motion variants in `App.jsx`

## 🚀 **Deployment Options**

### **1. Netlify (Recommended)**
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### **2. Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### **3. GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### **4. Traditional Web Hosting**
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## 🔧 **Development Tips**

### **Adding New Sections**
1. Create the section component in `App.jsx`
2. Add navigation link to the navbar
3. Implement smooth scrolling functionality
4. Add responsive design considerations

### **Performance Optimization**
- Images are automatically optimized by Vite
- Use lazy loading for large images
- Minimize bundle size with tree shaking
- Implement code splitting for larger applications

### **SEO Optimization**
- Update meta tags in `index.html`
- Add structured data for better search visibility
- Optimize images with proper alt text
- Implement Open Graph tags for social sharing

## 🐛 **Troubleshooting**

### **Common Issues**

**Development server won't start**
- Ensure Node.js version 18+ is installed
- Delete `node_modules` and run `npm install` again
- Check for port conflicts (default: 5173)

**Images not loading**
- Verify image paths in the `src/assets` directory
- Check import statements in `App.jsx`
- Ensure images are properly optimized

**Form submissions not working**
- Verify Formspree endpoint URL
- Check network connectivity
- Ensure CORS is properly configured

**Styling issues**
- Clear browser cache
- Check Tailwind CSS configuration
- Verify component imports

## 📞 **Support**

For questions or support regarding this portfolio website:

- **Email**: bernardobura@gmail.com
- **Phone**: +254728565816
- **Location**: Nairobi, Kenya

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🙏 **Acknowledgments**

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Shadcn/UI** for beautiful UI components
- **Formspree** for form handling services
- **Vite** for the fast build tool

---

**Built with ❤️ by Bernard Obura**

*Last Updated: July 7, 2025*

