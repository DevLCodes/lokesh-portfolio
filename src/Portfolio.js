import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Users, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { name: 'Java', level: 95, category: 'Backend' },
        { name: 'Spring Boot', level: 90, category: 'Backend' },
        { name: 'Apache Kafka', level: 85, category: 'Backend' },
        { name: 'PostgreSQL', level: 88, category: 'Database' },
        { name: 'MongoDB', level: 82, category: 'Database' },
        { name: 'Docker', level: 85, category: 'DevOps' },
        { name: 'Kubernetes', level: 80, category: 'DevOps' },
        { name: 'AWS', level: 85, category: 'Cloud' },
        { name: 'React.js', level: 75, category: 'Frontend' },
        { name: 'Elasticsearch', level: 80, category: 'Search' }
    ];

    const experiences = [
        {
            company: 'Clari',
            position: 'Senior Software Engineer',
            duration: 'February 2024 - Present',
            location: 'Bangalore, KA, India',
            achievements: [
                'Architected high-throughput ETL pipeline using Apache Kafka for Google and Microsoft data processing',
                'Developed intelligent matching service with sophisticated scoring algorithms',
                'Led Activity Loader pipeline transition with strategic migrations and performance optimizations',
                'Coordinated cross-functional teams for enterprise time tracking feature delivery'
            ]
        },
        {
            company: 'Clari',
            position: 'Software Engineer II',
            duration: 'June 2021 - February 2024',
            location: 'Bengaluru, KA, India',
            achievements: [
                'Integrated Gong and Wingman for seamless call recording access',
                'Implemented Territory Hierarchy with Object2Territory model',
                'Developed Activity Filters and Saved View in Opportunities module',
                'Optimized Activity queries using Activity to Opportunity association'
            ]
        },
        {
            company: 'Zoho Corporation',
            position: 'Member Technical Staff',
            duration: 'May 2019 - June 2021',
            location: 'Chennai, TN, India',
            achievements: [
                'Designed scripting framework for Custom Scripts automation',
                'Migrated ServiceDeskPlus from server-side rendering to RESTful APIs',
                'Implemented comprehensive Tagging feature with database indexing',
                'Orchestrated integrations between ServiceDesk Plus and Zoho ecosystem'
            ]
        }
    ];

    const projects = [
        {
            name: 'Activity 360',
            description: 'Transformed manual filtering into natural language search using OpenAI and Elasticsearch',
            technologies: ['OpenAI', 'Elasticsearch', 'React', 'PostgreSQL'],
            location: 'Bangalore, KA, India'
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const SkillBar = ({ skill }) => (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                <span className="text-sm text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Lokesh Kumar
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize hover:text-blue-400 transition-colors duration-200 ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto mb-6">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white">LK</span>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Lokesh Kumar
            </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Senior Software Engineer</h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Backend Engineer with 6+ years of expertise in designing and scaling distributed systems,
                        optimizing event-driven architectures, and ETL pipelines. Passionate about building
                        solutions that drive business impact.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/DevLCodes" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/lokeshkumar08" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:lokeshkumararun08@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm a passionate Backend Engineer with 6+ years of experience specializing in distributed systems,
                                event-driven architectures, and high-performance ETL pipelines. I excel at balancing scalability
                                with reliability while mentoring junior engineers to foster team success.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                My expertise lies in Java, SpringBoot, and Apache Kafka, building solutions that drive significant
                                business impact. I'm experienced in cross-functional leadership and delivering high-stakes projects
                                under tight deadlines.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span>Bengaluru, KA, India</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span>+91 82207 34578</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg text-center">
                                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">6+ Years</h4>
                                <p className="text-gray-400">Experience</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg text-center">
                                <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">ETL Pipelines</h4>
                                <p className="text-gray-400">Expertise</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg text-center">
                                <Cloud className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Cloud Native</h4>
                                <p className="text-gray-400">Architecture</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg text-center">
                                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold mb-2">Team Lead</h4>
                                <p className="text-gray-400">Mentoring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Professional Experience
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-lg p-8 border-l-4 border-blue-500">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                                        <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-gray-400 mb-1">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {exp.duration}
                                        </div>
                                        <div className="flex items-center text-gray-400">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-300 flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['Backend', 'Database', 'DevOps', 'Cloud', 'Frontend', 'Search'].map((category) => (
                            <div key={category} className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-6 text-center text-blue-400">{category}</h3>
                                {skills.filter(skill => skill.category === category).map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-200">
                                <h3 className="text-xl font-bold mb-4 text-white">{project.name}</h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {project.location}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-purple-500">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Bachelor's in Information Technology</h3>
                                    <h4 className="text-lg text-purple-400">Sri Krishna College of Engineering and Technology</h4>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center text-gray-400 mb-1">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        March 2015 - March 2019
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <Award className="w-4 h-4 mr-2" />
                                        GPA: 8.1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            I'm always interested in hearing about new opportunities and connecting with fellow engineers.
                            Let's discuss how we can work together to build something amazing!
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <a href="mailto:lokeshkumararun08@gmail.com" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group">
                                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-gray-400 text-sm">lokeshkumararun08@gmail.com</p>
                            </a>
                            <a href="https://linkedin.com/in/lokeshkumar08" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group">
                                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                                <h3 className="font-semibold mb-2">LinkedIn</h3>
                                <p className="text-gray-400 text-sm">Connect with me</p>
                            </a>
                            <a href="https://github.com/DevLCodes" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 group">
                                <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                                <h3 className="font-semibold mb-2">GitHub</h3>
                                <p className="text-gray-400 text-sm">Check my code</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        © 2025 Lokesh Kumar. Built with React and deployed on AWS EKS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;