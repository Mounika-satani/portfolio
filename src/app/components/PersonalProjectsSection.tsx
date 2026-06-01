import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    githubLink: string;
    liveLink?: string;
    techStack: string[];
    category: string;
}

export function PersonalProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects: Project[] = [
        {
            title: 'THELAUNDRYGUYZ',
            githubLink: '',
            liveLink: 'https://www.thelaundryguyz.com/',
            techStack: ['React.js', 'Node.js', 'PostgreSQL'],
            category: 'Service Management Platform'
        },
        {
            title: 'DIGITAZ.US',
            githubLink: '',
            liveLink: 'https://www.digitaz.us/',
            techStack: ['React.js', 'Tailwind CSS', 'Vite'],
            category: 'Agency Portfolio'
        },
        {
            title: 'TECHRUITZ',
            githubLink: '',
            liveLink: 'https://www.techruitz.com/',
            techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
            category: 'Tech Recruitment Platform'
        },
        {
            title: 'CLOUDCREST',
            githubLink: '',
            liveLink: 'https://cloudcrest-plum.vercel.app/',
            techStack: ['TypeScript', 'Tailwind CSS', 'React.js', 'Vite'],
            category: 'Cloud Services Landing Page'
        },
        {
            title: 'STUDYSPHERE',
            githubLink: '',
            liveLink: 'https://studyspherenew.vercel.app/',
            techStack: ['React.js', 'Firebase', 'React-Suite', 'Bootstrap'],
            category: 'Real-time Academic Platform'
        },
        {
            title: 'YUMLIBRARY',
            githubLink: '',
            liveLink: 'https://jsproject-nine.vercel.app/',
            techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Firebase'],
            category: 'Recipe Discovery Web App'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getTechIcon = (tech: string) => {
        const techLower = tech.toLowerCase();

        const techColors: { [key: string]: string } = {
            'python': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
            'javascript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
            'react.js': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
            'node.js': 'bg-green-500/10 text-green-400 border-green-500/30',
            'mongodb': 'bg-green-600/10 text-green-500 border-green-600/30',
            'express.js': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
            'html': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
            'css': 'bg-blue-400/10 text-blue-300 border-blue-400/30',
            'java': 'bg-red-500/10 text-red-400 border-red-500/30',
            'spring boot': 'bg-green-500/10 text-green-400 border-green-500/30',
            'mysql': 'bg-blue-600/10 text-blue-500 border-blue-600/30',
            'flask': 'bg-gray-600/10 text-gray-300 border-gray-600/30',
            'aws': 'bg-orange-600/10 text-orange-500 border-orange-600/30',
            'iot': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
            'face recognition': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
            'thymeleaf': 'bg-green-400/10 text-green-300 border-green-400/30'
        };

        return techColors[techLower] || 'bg-primary/10 text-primary border-primary/30';
    };

    // Get visible projects (previous, current, next)
    const getVisibleProjects = () => {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        const nextIndex = (currentIndex + 1) % projects.length;

        return [
            { project: projects[prevIndex], position: 'prev', index: prevIndex },
            { project: projects[currentIndex], position: 'center', index: currentIndex },
            { project: projects[nextIndex], position: 'next', index: nextIndex }
        ];
    };

    return (
        <section id="personal-projects" className="py-24 px-6 lg:px-12 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Websites</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-8 mx-auto"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A collection of professionally developed web applications and platforms
                    </p>
                </div>

                {/* 3-Card Carousel Container */}
                <div className="relative py-12">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </button>

                    {/* Cards Container */}
                    <div className="flex items-center justify-center gap-4 lg:gap-6 px-16">
                        {getVisibleProjects().map(({ project, position, index }) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 ${position === 'center'
                                    ? 'w-full lg:w-[500px] scale-100 lg:scale-110 z-20 opacity-100'
                                    : 'hidden lg:block w-[350px] scale-90 opacity-50 hover:opacity-75'
                                    }`}
                            >
                                <div className={`bg-card border rounded-2xl p-6 lg:p-8 transition-all duration-300 ${position === 'center'
                                    ? 'border-primary/50 shadow-2xl shadow-primary/20'
                                    : 'border-border hover:border-primary/30'
                                    }`}>
                                    {/* Project Header */}
                                    <div className="mb-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className={`font-bold flex-1 ${position === 'center' ? 'text-2xl lg:text-3xl text-primary' : 'text-xl lg:text-2xl'
                                                }`}>
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2 ml-4">
                                                {project.liveLink && (
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors border border-primary/20"
                                                        aria-label={`View ${project.title} Live`}
                                                    >
                                                        <ExternalLink className={position === 'center' ? 'w-5 h-5 text-primary' : 'w-4 h-4 text-primary'} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide px-1">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 rounded-lg text-xs font-medium border shadow-sm ${getTechIcon(tech)}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links Footer */}
                                    {position === 'center' && (
                                        <div className="flex gap-4 pt-2">
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all font-semibold shadow-lg shadow-primary/20"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Visit Website
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Project Counter */}
                    <div className="text-center mt-4 text-muted-foreground">
                        <span className="text-primary font-semibold">{currentIndex + 1}</span> / {projects.length}
                    </div>
                </div>
            </div>
        </section>
    );
}
