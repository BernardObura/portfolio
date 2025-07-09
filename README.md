# Bernard Obura - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing Bernard Obura's skills and projects as a software developer.

## 🌟 Features

### ✨ **Enhanced User Experience**
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Light/Dark Theme Toggle**: Seamless theme switching with system preference detection
- **Smooth Animations**: Engaging scroll-triggered animations using Framer Motion
- **Interactive Elements**: Hover effects and smooth transitions throughout

### 🎨 **Professional Design**
- **Modern Hero Section**: Clean design with geometric background pattern
- **Differentiated Button Colors**: Purple primary and orange secondary buttons for clear user guidance
- **Enhanced Skills Display**: Improved grid layout optimized for large screens
- **High-Quality Project Images**: Professional screenshots showcasing project interfaces

### 🔗 **Social Media Integration**
- **LinkedIn Profile**: Direct link to https://www.linkedin.com/in/bernardobura/
- **GitHub Profile**: Direct link to https://github.com/BernardObura
- **Professional Icons**: Consistent Lucide React icons with hover effects
- **Multiple Placement**: Links available in both hero and about sections

### 📧 **Contact Form**
- **Formspree Integration**: Working contact form using https://formspree.io/f/mjkrdznw
- **Success Messaging**: Professional feedback with automatic form reset
- **Email Delivery**: Messages sent directly to bernardobura@gmail.com

### 🛠️ **Skills & Technologies Display**
- **16+ Technologies**: Comprehensive showcase of technical skills
- **Official Logos**: Authentic technology logos for all skills
- **Categorized Layout**: Organized by Frontend, Backend, Databases, and Tools
- **Optimized for Large Screens**: Enhanced grid layout (up to 6 columns on XL screens)
- **Interactive Cards**: Hover effects with scaling and shadow animations

### 🚀 **Projects Showcase**
- **3 Featured Projects**: E-Commerce Platform, Task Management App, Weather Dashboard
- **High-Quality Images**: Professional UI screenshots
- **Active Links**: Working Live Demo and GitHub repository links
- **Technology Tags**: Clear indication of technologies used

## 🏗️ **Technical Stack**

- **Frontend Framework**: React 18 with Hooks
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: shadcn/ui for high-quality components
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and building
- **Code Quality**: ESLint for code standards

## 📱 **Responsive Breakpoints**

### Skills Section Grid Layout:
- **Mobile (< 640px)**: 2 columns
- **Small (640px+)**: 3 columns
- **Medium (768px+)**: 4 columns
- **Large (1024px+)**: 5 columns
- **Extra Large (1280px+)**: 6 columns

### Enhanced Spacing:
- **Mobile**: Compact spacing for optimal mobile experience
- **Large Screens**: Generous spacing (lg:gap-6 xl:gap-8) for better visual hierarchy
- **Typography**: Responsive text sizing (text-xs lg:text-sm xl:text-base)

## 🚀 **Quick Start**

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Extract the project files**
   ```bash
   unzip bernard-portfolio-final-improved-source-code.zip
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

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 **Customization Guide**

### Personal Information
Update personal details in `src/App.jsx`:
- Name and title in hero section
- Contact information (email, phone, location)
- About section content
- Social media links

### Skills & Technologies
Modify the `skillCategories` object in `src/App.jsx`:
```javascript
const skillCategories = {
  frontend: [
    { name: 'JavaScript', logo: '/src/assets/javascript.png' },
    // Add more skills...
  ],
  // Add more categories...
}
```

### Projects
Update the `projects` array in `src/App.jsx`:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/src/assets/your-project-image.jpg',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/project'
  }
]
```

### Contact Form
The contact form is configured to use Formspree. To use your own:
1. Sign up at https://formspree.io
2. Create a new form
3. Replace the form action URL in the `handleSubmit` function

### Theme Colors
Customize colors in `tailwind.config.js` or by modifying CSS custom properties.

## 🌐 **Deployment Options**

### Option 1: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain if needed

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 📁 **Project Structure**

```
bernard-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Reusable components
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

## 🔧 **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌟 **Key Features Highlights**

### Enhanced Skills Display for Large Screens
- **Responsive Grid**: Automatically adjusts from 2 columns on mobile to 6 columns on extra-large screens
- **Optimized Spacing**: Increased gaps and padding on larger screens for better visual hierarchy
- **Scalable Icons**: Technology logos scale appropriately (h-10 w-10 on mobile to h-14 w-14 on XL screens)
- **Typography Scaling**: Text sizes adapt from text-xs on mobile to text-base on XL screens

### Social Media Integration
- **Professional Networking**: Direct links to LinkedIn and GitHub profiles
- **Strategic Placement**: Available in both hero section and about section
- **Consistent Design**: Matching button styles with hover effects
- **External Links**: Open in new tabs for better user experience

### Contact Form Excellence
- **Real Email Delivery**: Powered by Formspree for reliable message delivery
- **User Feedback**: Success messages with automatic form reset
- **Professional Design**: Clean, accessible form design
- **Mobile Optimized**: Responsive layout for all devices

## 📞 **Contact Information**

- **Email**: bernardobura@gmail.com
- **Phone**: +254728565816
- **Location**: Nairobi, Kenya
- **LinkedIn**: https://www.linkedin.com/in/bernardobura/
- **GitHub**: https://github.com/BernardObura

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🙏 **Acknowledgments**

- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide React** for consistent icons
- **Formspree** for contact form functionality

---

**Live Website**:https://bernardobura.vercel.app/

Built with ❤️ by Bernard Obura

