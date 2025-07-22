"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Sample project data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Full-stack marketplace with payment integration, inventory management, and admin dashboard",
            image: "/ss1.png",
           
        },
        {
            id: 2,
            title: "SaaS Analytics Dashboard",
            description: "Real-time analytics platform with data visualization, user tracking, and reporting features",
            image: "/ss2.png",
          
        },
        {
            id: 3,
            title: "Mobile Food Delivery App",
            description: "Cross-platform mobile app with real-time tracking, payment processing, and restaurant management",
            image: "/ss3.png",
           
        },
        {
            id: 4,
            title: "AI-Powered CRM",
            description: "Customer relationship management system with AI insights, automation, and predictive analytics",
            image: "/ss4.png",
            
        },
        {
            id: 5,
            title: "Blockchain Voting Platform",
            description: "Secure voting system built on blockchain with smart contracts and transparent vote counting",
            image: "/ss5.png",
         
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, projects.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="flex flex-col items-center py-10 mt-12">
            <h1 className="text-5xl mb-2">Projects</h1>
            <p className="mt-2 text-lg mb-8">MVP's Built for Founders and Startups</p>
            
            <p className="text-center text-sm mt-4 text-gray-500 mb-8 max-w-2xl">
                We sign NDAs with all clients, so most projects aren't public and we can't share much code. 
                <br />
                If a preview exists, it's usually just the frontend clone.
            </p>

            {/* Carousel Container */}
            <div className="relative w-full max-w-2xl mx-auto rounded-xl  overflow-hidden mt-8">
                {/* Main Carousel */}
                <div className="relative h-96 md:h-[400px] overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div key={project.id} className="min-w-full h-full relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                
                                {/* Project Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                    <h3 className="text-2xl mb-3">{project.title}</h3>
                                    <p className="text-gray-200  leading-relaxed">
                                        {project.description}
                                    </p>
                                
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                
               
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-1 h-1 rounded-full transition-all duration-200 ${
                                index === currentIndex 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

           <div className='mx-auto flex gap-4 justify-center mt-8'>
                    <button 
                    onClick={prevSlide}
                    className=" bg-white rounded-lg p-3 border border-black/10 transition-all duration-200 cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5 " />
                </button>

                <button 
                    onClick={nextSlide}
                    className="bg-white rounded-lg p-3  border border-black/10  transition-all duration-200 cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5 " />
                </button>
                </div>
        </div>
    );
}