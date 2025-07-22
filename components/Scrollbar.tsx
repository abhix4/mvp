'use client'

const companies = [
    'bloom',
    'brazen',
    'credboost',
    'jobby',
    'medconnect',
    'norric',
    'obraflow'
];

export default function ScrollBar() {
    // Duplicate companies array for seamless looping
    const duplicatedCompanies = [...companies, ...companies];

    return (
        <div className="flex gap-24 mt-[150px]  max-w-5xl overflow-hidden relative mx-auto">
            {/* Left blur overlay */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right blur overlay */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-24 animate-scroll">
                {duplicatedCompanies.map((company, index) => (
                    <p 
                        className="text-2xl font-medium whitespace-nowrap" 
                        key={`${company}-${index}`}
                    >
                        {company}
                    </p>
                ))}
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}