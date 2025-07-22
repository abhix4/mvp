'use client'
import { ArrowRight } from "lucide-react";

export default function Footer(){
    return (
        <div className="flex flex-col justify-center items-center py-32 relative overflow-hidden">
            {/* Static Blobs */}
            <div className="absolute top-[15%] left-[8%] w-[400px] h-[250px] opacity-12">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute top-[20%] right-[12%] w-[350px] h-[300px] opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-400 to-violet-500 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute bottom-[25%] left-[15%] w-[200px] h-[200px] opacity-15">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-green-400 to-teal-500 rounded-full blur-2xl"></div>
            </div>

            <div className="absolute bottom-[15%] right-[8%] w-[300px] h-[180px] opacity-13">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute top-[45%] left-[5%] w-[120px] h-[120px] opacity-8">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-full blur-xl"></div>
            </div>

            <div className="absolute bottom-[40%] right-[20%] w-[160px] h-[140px] opacity-9">
                <div className="w-full h-full bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 rounded-full blur-2xl"></div>
            </div>

            <h1 className="text-4xl mt-24 relative z-10">Your Idea Deserves To Exist</h1>
            <div className="flex gap-2 items-center px-4 py-2 rounded-lg bg-gray-200 font-semibold mt-8 cursor-pointer relative z-10">
                <p>Book a Call</p>
                <ArrowRight size={18}/>
            </div>
            <p className="mt-12 relative z-10">Join the other founders who trusted us to bring their ideas to life.</p>
        </div>
    )
}