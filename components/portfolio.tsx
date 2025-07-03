"use client"

import { Github, Linkedin, Mail, Phone, MapPin, Award, GraduationCap, ExternalLink, School } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function Portfolio() {
  const skills = {
    languages: ["Python", "C++", "SQL"],
    libraries: ["TensorFlow", "Keras", "NLTK", "OpenCV", "YOLO", "PyTorch", "spaCy"],
    tools: ["MySQL", "MongoDB", "Tableau/Power BI", "Streamlit", "Github"],
  }

  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Recommends movies similar to a selected title with filtering by year range and genre through an interactive sidebar.",
      github: "https://github.com/Naman-Maheshwari/Movie_Recommendation_System",
      demo: "https://movierecommendationsystem-naman-maheshwari.streamlit.app/",
    },
    {
      title: "HR Dashboard",
      description:
        "HR Analytics Dashboard visualizing employee demographics, performance scores, and workforce composition.",
      github: "https://github.com/Naman-Maheshwari/PowerBI_Dashboard",
      demo: "https://drive.google.com/file/d/1B56H5DYFsV0EE-Bf-iIuJyCJf-tGZkJO/view?usp=sharing",
    },
    {
      title: "Twitter Sentiment Analysis",
      description:
        "Machine learning tool analyzing sentiment of tweets about US airlines with clear visualizations and detailed analysis.",
      github: "https://github.com/Naman-Maheshwari/Twitter_Sentiment_Analysis",
      demo: "https://twitter-sentiment-analysis-ps727fdv5ddi9bljtqm7lj.streamlit.app/",
    },
  ]

  const achievements = [
    "Amazon ML Summer School 2024 - Top 3k Applicants Nationwide",
    "Smart India Hackathon 2024 - Secured 3rd Position In Internal Round",
    "Top 30 In M# Hackathon - Out Of 400+ Teams",
    "1st Position In Data Vista '24 - 24-hour ML Hackathon",
  ]

  const experiences = [
    {
      title: "Business Analyst Intern",
      company: "Amazon",
      period: "July 2025 - Present",
      location: "Bangalore, India",
      description: [
        "Analyzing business data to provide actionable insights",
        "Collaborating with cross-functional teams to optimize processes",
        "Developing data visualization dashboards for executive reporting",
      ],
    },
    {
      title: "Industrial Training Program",
      company: "Intel Corporation",
      period: "May 2024 - June 2024",
      location: "Remote",
      description: [
        "Developed a dynamic toll pricing and management system in Python",
        "Calculated charges based on toll zones, traffic congestion, vehicle type, and distance traveled",
      ],
    },
  ]

  const education = [
    {
      institution: "Manipal Institute of Technology, Manipal",
      degree: "BTech, Data Science & Engineering",
      period: "2022 - 2026",
      icon: <GraduationCap className="h-8 w-8 text-cyan-500 animate-bounce-subtle" />,
    },
    {
      institution: "Dewan Public School, Meerut",
      degree: "CBSE Class 12",
      period: "2022",
      percentage: "95.6%",
      icon: <School className="h-8 w-8 text-cyan-500 animate-bounce-subtle" />,
    },
    {
      institution: "Dewan Public School, Meerut",
      degree: "CBSE Class 10",
      period: "2020",
      percentage: "95%",
      icon: <School className="h-8 w-8 text-cyan-500 animate-bounce-subtle" />,
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Floating Particles */}
      <div className="particles fixed inset-0 z-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-[#1a1a1a] animate-slide-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <button className="text-xl font-bold text-white hover:text-cyan-500 transition-colors animate-bounce-subtle">
              &lt;code/&gt;
            </button>
            <div className="hidden md:flex gap-6">
              <a
                href="#experience"
                className="text-sm font-medium text-white hover:text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-md transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-white hover:text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-md transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-white hover:text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-md transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-sm font-medium text-white hover:text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-md transition-colors"
              >
                Education
              </a>
              <a
                href="#achievements"
                className="text-sm font-medium text-white hover:text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 rounded-md transition-colors"
              >
                Achievements
              </a>
            </div>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#1a1a1a] z-40 animate-slide-in-down">
            <div className="flex flex-col gap-4 px-6 py-8">
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={closeMenu}
                className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
              >
                Education
              </a>
              <a
                href="#achievements"
                onClick={closeMenu}
                className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
              >
                Achievements
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-[#0a0a0a] floating-shapes relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden relative w-fit animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hello, I'm</h1>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-10 gradient-text animate-float animate-text-glow">
              Naman Maheshwari
            </h1>
            <p className="text-xl md:text-3xl text-white font-bold mb-8 animate-slide-in-right">
              Business Analyst Intern at Amazon
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-in-up">
            <a href="https://github.com/Naman-Maheshwari" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-[#111] text-white border-cyan-500/50 hover:bg-white hover:text-[#111] flex items-center gap-2 btn-glow animate-pulse-slow"
              >
                <Github size={20} className="animate-bounce-subtle" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/namanmaheshwari8157" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-[#111] text-white border-cyan-500/50 hover:bg-white hover:text-[#111] flex items-center gap-2 btn-glow"
              >
                <Linkedin size={20} className="animate-bounce-subtle" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:namanmah2004@gmail.com">
              <Button
                variant="outline"
                className="bg-[#111] text-white border-cyan-500/50 hover:bg-white hover:text-[#111] flex items-center gap-2 btn-glow"
              >
                <Mail size={20} className="animate-bounce-subtle" />
                Email
              </Button>
            </a>
            <a href="tel:+919557510100">
              <Button
                variant="outline"
                className="bg-[#111] text-white border-cyan-500/50 hover:bg-white hover:text-[#111] flex items-center gap-2 btn-glow"
              >
                <Phone size={20} className="animate-bounce-subtle" />
                Call
              </Button>
            </a>
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://drive.google.com/file/d/1TY0s98RcpCfnnLlD_3-uk-Ao_ofe8VaY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white btn-glow animate-breathe flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-[#111] relative z-10" id="experience">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white animate-slide-in-up">Experience</h2>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="mb-8 bg-[#1a1a1a] border-[#333] hover:shadow-xl transition-all duration-500 hover:shadow-cyan-900/20 card-hover animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">{exp.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {exp.company} | {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin size={16} className="animate-bounce-subtle" />
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="animate-slide-in-right" style={{ animationDelay: `${i * 0.1}s` }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-[#0a0a0a] relative z-10" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white animate-slide-in-up">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#333] hover:shadow-xl transition-all duration-500 hover:shadow-cyan-900/20 card-hover animate-slide-in-up holographic"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-[#111] text-white border-[#333] hover:bg-white hover:text-[#111] btn-glow"
                      >
                        <Github className="mr-2 h-4 w-4 animate-spin-slow" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white btn-glow animate-glow">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://github.com/Naman-Maheshwari" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white btn-glow animate-breathe">
                View All Projects
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-[#111] relative z-10" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white animate-slide-in-up">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1a1a1a] border-[#333] card-hover animate-slide-in-left">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-sm animate-bounce-subtle"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1a1a1a] border-[#333] card-hover animate-slide-in-up">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Libraries & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-sm animate-bounce-subtle"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1a1a1a] border-[#333] card-hover animate-slide-in-right">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-sm animate-bounce-subtle"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-[#0a0a0a] relative z-10" id="education">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white animate-slide-in-up">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#333] card-hover animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {edu.icon}
                  <div>
                    <CardTitle className="text-2xl font-semibold text-white">{edu.institution}</CardTitle>
                    <CardDescription className="text-gray-400">{edu.degree}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{edu.period}</p>
                  {edu.percentage && <p className="font-medium text-cyan-500">Percentage: {edu.percentage}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-[#111] relative z-10" id="achievements">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white animate-slide-in-up">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#333] card-hover animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 animate-bounce-subtle" />
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 animate-slide-in-up">Let's Connect</h3>
          <p className="text-gray-400 mb-6 animate-slide-in-up">Ready to bring data-driven insights to your business</p>
          <div className="flex justify-center gap-6 animate-slide-in-up">
            <a href="mailto:namanmah2004@gmail.com">
              <Button
                variant="outline"
                className="border-white bg-white text-slate-800 hover:bg-gray-100 hover:text-slate-900 btn-glow"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/namanmaheshwari8157" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white bg-white text-slate-800 hover:bg-gray-100 hover:text-slate-900 btn-glow"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Naman Maheshwari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
