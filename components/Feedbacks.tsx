"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Our customer satisfaction scores have reached an all-time high after adopting this platform. The personalized experience it provides has been a game-changer for our business.",
    author: "CredBoost",
   
  },
  {
    quote: "The robust analytics dashboard gives us insights we never had before. We've been able to identify opportunities that increased our revenue by 28% in the first quarter alone.",
    author: "Jobby",
    
  },
  {
    quote: "The security features provide peace of mind for both our team and our clients. The platform's compliance standards exceed industry requirements while maintaining ease of use.",
    author: "Brazen",
    
  },
 
];

export default function Feedback(){
    const [currentIndex, setCurrentIndex] = useState(0);

 
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="flex flex-col items-center pt-12 pb-40 mt-12 relative overflow-hidden">
            {/* Static Blobs */}
            <div className="absolute top-[10%] left-[5%] w-[300px] h-[200px] opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-full blur-3xl"></div>
            </div>

          

            <div className="absolute bottom-[20%] left-[15%] w-[180px] h-[180px] opacity-12">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-full blur-2xl"></div>
            </div>

            <div className="absolute top-[30%] right-[5%] w-[120px] h-[120px] opacity-8">
                <div className="w-full h-full bg-gradient-to-br from-violet-400 via-purple-400 to-fuchsia-500 rounded-full blur-xl"></div>
            </div>

            <div className="absolute bottom-[10%] right-[25%] w-[150px] h-[50px] opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-amber-400 to-red-500 rounded-full blur-2xl"></div>
            </div>

            <h1 className="text-5xl mb-4 relative z-10">Trusted by Founders and Teams</h1>
            <p className="mt-2 text-lg text-center mb-12 relative z-10">Hear from clients and collaborators about their experience working with us.</p>

            <div className="w-full max-w-4xl mx-auto relative z-10">
                {/* Carousel Container */}
                <div className=" p-8 md:p-12 mx-4">
                    <div className="flex items-start mb-6">
                        <blockquote className="text-xl leading-relaxed text-center">
                            " {testimonials[currentIndex].quote} "
                        </blockquote>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center mx-auto">
                            <div>
                                <div className="text-lg text-cente">
                                    {testimonials[currentIndex].author}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className='mx-auto flex gap-4 justify-center'>
                    <button 
                    onClick={goToPrevious}
                    className=" bg-white rounded-lg p-3 border border-black/10 transition-all duration-200 cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5 " />
                </button>

                <button 
                    onClick={goToNext}
                    className="bg-white rounded-lg p-3  border border-black/10  transition-all duration-200 cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5 " />
                </button>
                </div>

            </div>
        </div>
    );
}