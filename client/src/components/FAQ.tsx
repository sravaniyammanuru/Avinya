import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Can I cancel my Participation Before Avinya Begins?",
      answer: "No, you cannot cancel your registration and it was a non refundable payment."
    },
    {
      question: "What is Avinya 2025?",
      answer: "Avinya is the technical and cultural symposium conducted by Chaitanya Bharathi Institute of Technology (CBIT). It features coding competitions, cultural performances, and various other exciting events."
    },
    {
      question: "Who can participate in Avinya?",
      answer: "Avinya is open to all college students. Participants from any recognized educational institution can register for the events."
    },
    {
      question: "Do I need a team to participate in the hackathon?",
      answer: "Yes, the hackathon requires teams of 4-6 members."
    },
    {
      question: "Will I receive a certificate for attending?",
      answer: "Yes, all participants will receive certificates of participation. Winners and runners-up will receive special achievement certificates."
    },
    {
      question: "What should I bring for the event?",
      answer: "Please bring your college ID, registration confirmation, laptop (if participating in hackathon,project expo events), and any specific requirements mentioned for individual events. For overnight events, please check the accommodation guidelines."
    },
    {
      question: "Can I attend only hackathon?",
      answer: "Absolutely! You can register for specific events that interest you. Each event has separate registration options, allowing you to customize your Avinya experience based on your preferences."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0e0e20] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px] opacity-10 animate-pulse-slow animation-delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="animate-gradient-text">Frequently Asked Questions</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mx-auto max-w-3xl">
            Get to know what our audience are concerned about
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#1a1a2e] rounded-2xl overflow-hidden transition-all duration-300 border border-purple-900/30 transform hover:shadow-xl hover:shadow-purple-900/20 hover:scale-[1.01] transition-all relative magical-glow"
            >
              {/* Subtle sparkle effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse-slow animation-delay-700"></div>
              </div>
              
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-white text-left group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg group-hover:text-[var(--accent)] transition-colors duration-300">
                  <span className="mr-3 text-[var(--accent)]">{index + 1}.</span>
                  {item.question}
                </span>
                <span className={`text-[var(--accent)] bg-[#13132b] rounded-full p-2 transition-all duration-300 ${
                  openIndex === index ? 'bg-[var(--accent)]/20' : ''
                }`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                {openIndex === index && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}