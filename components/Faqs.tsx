'use client'

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How fast will i recieve my requests?",
            answer: "I strive to deliver requests as quickly as possible, typically within a few business days after our Inital Disucssion and after recieving the downpayment I will start giving you updates on the progress of the project. But if you need it faster, you can always contact me and I will try to deliver it as soon as possible"
        },
        {
            question: "How does the onboarding work?",
            answer: "Onboarding process is streamlined and user-friendly. First Step is doing a meeting to see If I can help you, then we start building the MVP together as soon as I get the first downpayment, We Will continue discussing and iterating over the MVP until we have reached your satisfaction point."
        },
        {
            question: "Who are developers?",
            answer: "There are no external Devlopers, I am the only one who will be communicating with you and doing all the work. We might sometime hire external designer's to help with designs But the development of project will be done by me, I will be solely accountable for the MVP"
        },
        {
            question: "If i want to add something new after the initial discussion",
            answer: "The number of changes you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes. If you want to add something new, you can do so but if it extends the timeline,you might have to pay more for the extra time. If you belive that you might need to add something new constantly, you might consider buying Pro Plan."
        },
        {
            question: "How do you handle larger requests?",
            answer: "For larger requests, I assess the scope and may break it down into smaller, manageable tasks. We'll communicate with you throughout the process to ensure your needs are met."
        },
    
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center py-10 mt-12 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl mb-4 ">Doubts</h1>
            <p className="mt-2 text-lg text-center mb-12">
                We are here to help you with your doubts. Find answers to the most commonly asked questions below.
            </p>

            <div className="w-[90%] space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index}
                        className=" transition-shadow duration-200"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:ring-inset rounded-lg"
                        >
                            <span className="text-lg font-medium text-gray-900 pr-4">
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                        </button>
                        
                        {openIndex === index && (
                            <div className="px-6 pb-4">
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        
        </div>
    );
}