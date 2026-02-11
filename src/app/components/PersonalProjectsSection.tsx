import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    githubLink: string;
    techStack: string[];
    category: string;
}

export function PersonalProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects: Project[] = [
        {
            title: 'Smart IoT Door Security System',
            githubLink: 'https://github.com/k-revanth-reddy/door-authorisation-.git',
            techStack: ['Python', 'AWS', 'IoT', 'Face Recognition'],
            category: 'IoT & Security'
        },
        {
            title: 'Interactive Simon Memory Game',
            githubLink: 'https://github.com/k-revanth-reddy/simon-game.git',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            category: 'Web Game'
        },
        {
            title: 'Netflix UI Clone',
            githubLink: 'https://github.com/k-revanth-reddy/netflix-clone-project.git',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            category: 'Frontend Clone'
        },
        {
            title: 'Sports Facility Booking System',
            githubLink: 'https://github.com/k-revanth-reddy/Sports-Arena-booking-using-flask.git',
            techStack: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
            category: 'Full-Stack Web App'
        },
        {
            title: 'Campus Cafeteria Management Platform',
            githubLink: 'https://github.com/k-revanth-reddy/Cafeteria-Canteen-management-project-MERN-.git',
            techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
            category: 'MERN Stack'
        },
        {
            title: 'AI-Powered Travel Planner',
            githubLink: 'https://github.com/k-revanth-reddy/travel-planner-java-spring.git',
            techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'HTML', 'CSS'],
            category: 'Java Full-Stack'
        },
        {
            title: 'Real-Time Auction Marketplace',
            githubLink: 'https://github.com/k-revanth-reddy/Auction-project-MERN-stack.git',
            techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
            category: 'MERN Stack'
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Personal Projects</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-8 mx-auto"></div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore my personal projects showcasing diverse technologies and creative solutions
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
                                            <h3 className={`font-bold flex-1 ${position === 'center' ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                                                }`}>
                                                {project.title}
                                            </h3>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-4 p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <Github className={position === 'center' ? 'w-6 h-6 text-primary' : 'w-5 h-5 text-primary'} />
                                            </a>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${getTechIcon(tech)}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* GitHub Link */}
                                    {position === 'center' && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View on GitHub
                                        </a>
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
