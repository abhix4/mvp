'use client'
import { motion } from "framer-motion";

export default function Navbar(){
    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between max-w-5xl py-2 px-4 mx-auto items-center sticky top-0 bg-white/60 z-20 backdrop-blur-lg"
        >
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-medium"
            >
                Mvp Agency
            </motion.h1>
            
            <motion.div 
                className="flex gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {["Why us?", "Our work", "Pricing", "Testimonials", "FAQs"].map((item, index) => (
                    <motion.p 
                        key={item}
                        className="cursor-pointer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                       
                        
                    >
                        {item}
                    </motion.p>
                ))}
            </motion.div>
            
            <motion.div 
                className="bg-gray-100 px-5 py-2 rounded-3xl hover:bg-gray-200 cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}

            >
                Book a call
            </motion.div>
        </motion.div>
    )
}