'use client'
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const data = [
    {
        payment: 'one time payment'
    }
]

export default function Pricing(){
    const [category, setCategory] = useState("standard")
    return (
        <div className="flex flex-col items-center py-10 mt-4">
            <h1 className="text-5xl">Pricing</h1>
            <p className="mt-2 text-lg">We offer a range of pricing options to suit your needs.</p>

           
            <div className="flex flex-wrap max-w-[820px] gap-4 mt-20">
                <div className="w-[400px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out  cursor-pointer">
                    <p className="text-2xl font-medium">Join MVP Experience</p>
                    <p className="text-center mt-2">Dont Sleep on your Ideas, Build your MVP with us.</p>
                    <div className="px-4 py-2 border border-black/15 rounded-lg mt-8 flex  items-center">
                         <div>
                            <p>Book a 15 minutes call</p>
                         <p className="text-sm text-black/80">Lets discuss your idea and how we can help you</p>
                         </div>
                         <ArrowRight className="text-black/80" />
                    </div>
                </div>

                <div className="w-[400px] px-8 py-10 border border-black/15 rounded-xl flex items-center flex-col transition-transform duration-300 ease-out cursor-pointer">
                    <div className="flex gap-2 text-lg  bg-gray-100 rounded-lg">
                        <p className={`${category === 'standard' && 'bg-gray-200 rounded-lg '} px-4 py-1`} onClick={() => setCategory('standard')}>Standard</p>
                        <p className={`${category === 'pro' && 'bg-gray-200 rounded-lg'} px-4 py-1`}  onClick={() => setCategory('pro')}>Pro</p>
                    </div>
                    {
                        category === 'standard' && <div>
                              <p  className="px-4 py-1 rounded-3xl border border-black/15 mt-8 text-sm mx-auto w-fit">one time payment</p>
                    <div className="flex items-center justify-between mt-6">
                        <div>
                            <p className="text-lg">$1997</p>
                            <p className="text-sm">one time payment for MVP development</p>
                        </div>
                        <div className="flex gap-3 px-3 py-2 items-center  rounded-lg bg-gray-100">
                            <p className="text-sm">Reserve</p>
                            <ArrowRight size={14}/>
                        </div>
                    </div>
                        </div>
                    }

                     {
                        category === 'pro' && <div>
                              <p  className="px-4 py-1 rounded-3xl border border-black/15 mt-8 text-sm mx-auto w-fit">recurring payment</p>
                    <div className="flex items-center justify-between mt-6">
                        <div>
                            <p className="text-lg">$2997</p>
                            <p className="text-sm"> Recurring payment for MVP development</p>
                        </div>
                        <div className="flex gap-3 px-3 py-2 items-center  rounded-lg bg-gray-100">
                            <p className="text-sm">Reserve</p>
                            <ArrowRight size={14}/>
                        </div>
                    </div>
                        </div>
                    }
                    {/* <p className="text-center">From Idea to MVP – Fast & Scalable Turn your concepts into functional MVPs, ensuring market validation and seamless scalability.</p> */}
                </div>

            </div>
        </div>
    )
}