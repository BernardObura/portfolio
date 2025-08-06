import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, CheckCircle } from 'lucide-react'
import './App.css'
import HeroBackground from './components/HeroBackground.jsx'

// Import skill logos
import jsLogo from './assets/GUbe0CzBtEWJ.png'
import reactLogo from './assets/Zn2mOJtbM5ja.png'
import nodeLogo from './assets/ImkfuoWs0KTE.png'
import pythonLogo from './assets/BMXgYGD50Onl.png'
import htmlLogo from './assets/kL63K1mKAewh.png'
import cssLogo from './assets/ZB70hRtNlnTq.png'
import mongoDBLogo from './assets/Xn3zTCcdJAj0.png'
import sqlLogo from './assets/AEXWxcXk3S5C.png'
import gitLogo from './assets/mcfmnpJ781so.png'
import responsiveDesignIcon from './assets/wMyqohIAyMBG.png'
import typescriptLogo from './assets/typescript.png'
import dockerLogo from './assets/docker.png'
import awsLogo from './assets/aws.png'
import postgresqlLogo from './assets/postgresql.png'
import expressjsLogo from './assets/expressjs.png'
import graphqlLogo from './assets/graphql.png'
import restApiLogo from './assets/rest_api.png'
import djangoLogo from './assets/django_new.png'
import flaskLogo from './assets/flask_new.png'
import mysqlLogo from './assets/mysql_new.png'
import kubernetesLogo from './assets/kubernetes_new.png'
import cicdLogo from './assets/cicd_new.png'
import jiraLogo from './assets/jira_new.png'
import tailwindCssLogo from './assets/tailwindcss.png'
import nextjsLogo from './assets/nextjs.jpeg'
import sqlNewLogo from './assets/sql.png'
import vscodeLogo from './assets/vscode.png'

// Import project images
import ecommerceImage from './assets/ecommerce_project.jpg'
import taskManagementImage from './assets/task_management_project.png'
import weatherDashboardImage from './assets/weather_project.jpeg'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mjkrdznw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const skillCategories = {
    frontend: [
      { name: 'JavaScript', logo: jsLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React', logo: reactLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindCssLogo },
      { name: 'Responsive Design', logo: responsiveDesignIcon },
    ],
    backend: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'REST APIs', logo: restApiLogo },
      { name: 'GraphQL', logo: graphqlLogo },
    ],
    databases: [
      { name: 'MongoDB', logo: mongoDBLogo },
      { name: 'PostgreSQL', logo: postgresqlLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'SQL', logo: sqlNewLogo },
    ],
    cloud_devops: [
      { name: 'AWS', logo: awsLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Kubernetes', logo: kubernetesLogo },
      { name: 'CI/CD', logo: cicdLogo },
    ],
    tools: [
      { name: 'Git', logo: gitLogo },
      { name: 'Jira', logo: jiraLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  }

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: ecommerceImage,
      liveDemo: 'https://ecommerce-demo.example.com',
      github: 'https://github.com/bernardobura/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      image: taskManagementImage,
      liveDemo: 'https://taskmanager-demo.example.com',
      github: 'https://github.com/bernardobura/task-management-app'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts using external APIs with beautiful data visualizations.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      image: weatherDashboardImage,
      liveDemo: 'https://weather-dashboard-demo.example.com',
      github: 'https://github.com/bernardobura/weather-dashboard'
    }
  ]

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <motion.button 
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bernard Obura
              </motion.button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <motion.button onClick={() => scrollToSection("home")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Home
                </motion.button>
                <motion.button onClick={() => scrollToSection("about")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  About
                </motion.button>
                <motion.button onClick={() => scrollToSection("skills")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Skills
                </motion.button>
                <motion.button onClick={() => scrollToSection("projects")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Projects
                </motion.button>
                <motion.button onClick={() => scrollToSection("contact")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Contact
                </motion.button>
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  className="w-9 h-9 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700">
              <motion.button onClick={() => scrollToSection("home")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Home
              </motion.button>
              <motion.button onClick={() => scrollToSection("about")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                About
              </motion.button>
              <motion.button onClick={() => scrollToSection("skills")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Skills
              </motion.button>
              <motion.button onClick={() => scrollToSection("projects")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Projects
              </motion.button>
              <motion.button onClick={() => scrollToSection("contact")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.h1 
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                variants={fadeInUp}
              >
                Hi, I'm <span className="text-primary">Bernard Obura</span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Software Developer passionate about creating innovative solutions and building exceptional digital experiences
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform duration-300 cursor-pointer">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform duration-300 cursor-pointer">
                Get In Touch
              </Button>
            </motion.div>
            <motion.div 
              className="flex gap-4 justify-center mt-4"
              variants={fadeInUp}
            >
              <a href="https://www.linkedin.com/in/bernardobura/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="w-10 h-10 cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://github.com/BernardObura" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="w-10 h-10 cursor-pointer">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know more about my background, experience, and what drives my passion for software development
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.div variants={scaleIn}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Professional Background
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate software developer based in Nairobi, Kenya, with a strong foundation in modern web technologies. 
                      I enjoy solving complex problems and creating user-friendly applications that make a real difference in people's lives.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={scaleIn}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      What I Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in full-stack web development, creating responsive and scalable applications using modern frameworks and technologies. 
                      From concept to deployment, I ensure every project meets the highest standards of quality and performance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.div variants={scaleIn}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>bernardobura@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+254728565816</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Nairobi, Kenya</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={scaleIn}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://github.com/BernardObura" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                      <a href="https://www.linkedin.com/in/bernardobura/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>
          
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category} 
              className="mb-8 lg:mb-12 xl:mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl xl:text-3xl font-bold text-center capitalize">
                    {category.replace('_', ' & ')} Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center"
                    variants={staggerContainer}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center hover:shadow-md transition-all duration-300 cursor-pointer group h-full p-3 lg:p-4 rounded-lg border border-border hover:border-primary/20">
                          <div className="flex flex-col items-center space-y-2 lg:space-y-3">
                            {skill.logo ? (
                              <motion.img 
                                src={skill.logo} 
                                alt={`${skill.name} Logo`} 
                                className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 object-contain group-hover:scale-110 transition-transform duration-300" 
                              />
                            ) : (
                              <div className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                <span className="text-primary text-sm lg:text-lg font-bold">{skill.name.charAt(0)}</span>
                              </div>
                            )}
                            <h3 className="font-medium text-xs lg:text-sm xl:text-base leading-tight">{skill.name}</h3>
                          </div>
                        </div>
                      </motion.div>
                ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full overflow-hidden p-0">
                  <div className="relative h-48 overflow-hidden m-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => window.open(project.liveDemo, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">bernardobura@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+254728565816</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I\'ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess && (
                    <motion.div 
                      className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-md flex items-center gap-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <p className="text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully. I\'ll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name" 
                          className="transition-all duration-300 focus:scale-105" 
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          className="transition-all duration-300 focus:scale-105" 
                          required
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What\'s this about?" 
                        className="transition-all duration-300 focus:scale-105" 
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!" 
                        rows={5}
                        className="transition-all duration-300 focus:scale-105"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Button 
                        type="submit" 
                        className="w-full text-lg px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Bernard Obura. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App


