"use client";
import { useState } from "react";

interface FAQ {
 question: string;
 answer: string;
}

const faqs: FAQ[] = [
 // ... add your new FAQ content here
 {
  question: "What is the typical timeline for setting up web analytics?",
  answer:
   "The setup time can vary depending on the complexity of the website and the specific analytics tools being implemented. Typically, basic setups can take a few days, while more complex integrations might take several weeks.",
 },
 {
  question: "How much does it cost to integrate analytics into my website?",
  answer: `Costs can vary widely based on the scope of the project. It's best to discuss your specific needs to provide an accurate estimate. We offer competitive rates and can work with a variety of budgets.`,
 },
 // ... more questions
];

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; toggle: () => void }> = ({
 faq,
 isOpen,
 toggle,
}) => {
 return (
  <div className='border-b-2 border-dark-primary overflow-hidden transition-all duration-500 ease-in-out paragraph-primary'>
   <button
    className='flex justify-between w-full p-4 focus:outline-none'
    onClick={toggle}>
    <span className='font-semibold text-left'>{faq.question}</span>
    <span>{isOpen ? "-" : "+"}</span>
   </button>
   <div
    className={`transition-all duration-500 ease-in-out ${
     isOpen ? "max-h-96 p-4" : "max-h-0"
    }`}>
    {isOpen && faq.answer}
   </div>
  </div>
 );
};

const FAQ: React.FC = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggleFAQ = (index: number) => {
  if (openIndex === index) {
   setOpenIndex(null); // Close this FAQ if it's already open
  } else {
   setOpenIndex(index); // Open the clicked FAQ
  }
 };

 return (
  <div className=''>
   {faqs.map((faq, index) => (
    <FAQItem
     key={index}
     faq={faq}
     isOpen={openIndex === index}
     toggle={() => toggleFAQ(index)}
    />
   ))}
  </div>
 );
};

export default FAQ;
