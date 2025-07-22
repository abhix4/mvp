'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ScrollBar from './Scrollbar';

export default function Hero() {
    return (
        <div className="relative flex flex-col items-center h-screen overflow-hidden">
            {/* Animated Background Blob */}
            <div className="absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 blob-animate">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                    className="px-4 py-1 rounded-full w-fit border border-gray-50 text-sm mt-[200px] bg-white/40 backdrop-blur-lg flex gap-2"
                    initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Slots Available for July 
                    <picture>
  <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp" type="image/webp"/>
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif" alt="✨" width="18" height="18"/>
</picture>
                </motion.div>

                <motion.h1 
                    className="text-8xl tracking-tighter text-center mt-8"
                    initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                    Build and Validate<span className="text-7xl">🚀 </span>
                    <br />
                    in <span className="text-7xl">⚡</span> <span className="italic">21 Days</span>
                </motion.h1>
                
                <motion.p 
                    className="text-center px-46 mt-10 text-black/80"
                    initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    We build full-stack web and mobile apps that go live fast. You can test, earn, and grow before anyone catches up.
                </motion.p>
                
                <motion.div
                    initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                >
                    <ScrollBar/>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(-50%, -50%)  scale(1);
                    }
                    33% {
                        transform: translate(-50%, -50%)  scale(1.1);
                    }
                    66% {
                        transform: translate(-50%, -50%)  scale(0.9);
                    }
                    100% {
                        transform: translate(-50%, -50%)  scale(1);
                    }
                }
                
                .blob-animate {
                    animation: blob 15s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}