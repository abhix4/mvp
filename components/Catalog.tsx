'use client'
export default function Catalog(){
    return (
        <div className="flex flex-col items-center py-10 relative overflow-hidden">
           
    
            <div className="absolute top-[70%] left-[5%] w-[100px] h-[100px] opacity-12 blob-animate-fast">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-green-400 to-lime-500 rounded-full blur-xl"></div>
            </div>

            <h1 className="text-5xl relative z-10">Move at Startup Speed </h1>
            <p className="mt-2 text-lg relative z-10">We move fast, build lean and Validate.</p>

            <div className="px-40 flex flex-col items-center gap-4 mt-12 relative z-10">
            <p className=" text-center mt-10">I've seen too many founders burn months (and way too much money) just trying to get an MVP off the ground. We don't do that here. We move fast, build lean, and deliver a working MVP in under a month so you can start validating, not waiting.</p>
            <p className="text-center text-black/80">Anubhav Dube</p>
            </div>

            <div className="flex flex-wrap max-w-[650px] gap-4 mt-20 relative z-10">
                <div className="w-[300px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out hover:scale-105 hover:rotate-2 hover:shadow-lg cursor-pointer">
                    <p className="rounded-full border h-10 border-black/15 w-10 flex items-center justify-center">🏢</p>
                    <p className="text-center">We focus on building Core Features and getting started with Market Validation, then iterate and build over the user's feedback to build a product that is scalable and future-proof.</p>
                </div>

                <div className="w-[300px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-2 hover:shadow-lg cursor-pointer">
                    <p className="rounded-full border h-10 border-black/15 w-10 flex items-center justify-center">🔥</p>
                    <p className="text-center">From Idea to MVP – Fast & Scalable Turn your concepts into functional MVPs, ensuring market validation and seamless scalability.</p>
                </div>

                <div className="w-[300px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out hover:scale-105 hover:rotate-2 hover:shadow-lg cursor-pointer">
                    <p className="rounded-full border h-10 border-black/15 w-10 flex items-center justify-center">🧑‍💻</p>
                    <p className="text-center">Leverage the best modern technologies like Nextjs, Tailwind CSS, Shadcn UI, and Postgres to ensure high-performance, scalable, and future-proof MVP development.</p>
                </div>

                <div className="w-[300px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-2 hover:shadow-lg cursor-pointer">
                    <p className="rounded-full border h-10 border-black/15 w-10 flex items-center justify-center">📄</p>
                    <p className="text-center">Proper documentation ensures project scalability and smooth developer collaboration. We provide clear API documentation, a detailed tech stack guide, and ERDs for easy data flow</p>
                </div>
            </div>

         
        </div>
    )
}