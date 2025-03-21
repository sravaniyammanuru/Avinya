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
      answer: "Yes, you can cancel your registration up to 5 days before the event. Please contact us at avinya@cbit.ac.in with your registration details for cancellation."
    },
    {
      question: "What is Avinya 2025?",
      answer: "Avinya is the annual technical and cultural symposium conducted by Chaitanya Bharathi Institute of Technology (CBIT). It features technical workshops, coding competitions, cultural performances, and various other exciting events."
    },
    {
      question: "Who can participate in Avinya?",
      answer: "Avinya is open to all college students. Participants from any recognized educational institution can register for the events. Some events may have specific eligibility criteria, which will be mentioned in their respective guidelines."
    },
    {
      question: "What topics will be covered in the workshops?",
      answer: "Workshops at Avinya 2025 will cover cutting-edge technologies including Artificial Intelligence, Blockchain, IoT, Robotics, Web Development, and Cloud Computing. Each workshop is designed to provide hands-on experience and practical knowledge."
    },
    {
      question: "What is the prize pool for the hackathon?",
      answer: "The hackathon at Avinya 2025 offers exciting prizes worth over ₹1,00,000, including cash prizes, tech gadgets, internship opportunities, and sponsored goodies from our partners."
    },
    {
      question: "Do I need a team to participate in the hackathon?",
      answer: "Yes, the hackathon requires teams of 2-4 members. However, we also have a team formation platform where individual participants can find teammates before the event."
    },
    {
      question: "Will I receive a certificate for attending?",
      answer: "Yes, all participants will receive digital certificates of participation. Winners and runners-up will receive special achievement certificates. Workshop attendees will get separate certification for each workshop they complete."
    },
    {
      question: "What should I bring for the event?",
      answer: "Please bring your college ID, registration confirmation, laptop (if participating in technical events), and any specific requirements mentioned for individual events. For overnight events, please check the accommodation guidelines."
    },
    {
      question: "Can I attend only the workshops or the hackathon?",
      answer: "Absolutely! You can register for specific events that interest you. Each event has separate registration options, allowing you to customize your Avinya experience based on your preferences."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0e0e20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="animate-gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-[var(--accent-light)] mx-auto max-w-3xl">
            Get to know what our audience are concerned about
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:pr-8">
            <h3 className="text-4xl font-bold text-white mb-6">
              Do You Have any questions about the <span className="text-[var(--accent)]">Avinya</span> ?
            </h3>
            <p className="text-gray-300 mb-8">
              Find answers to common questions about our events, registration process, 
              participation requirements, and more. If you don't see your question here, 
              feel free to contact us.
            </p>
            <a 
              href="#register" 
              className="inline-block px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-medium rounded-full transition duration-300 transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
          
          <div className="space-y-4">
            {faqItems.slice(0, 5).map((item, index) => (
              <div 
                key={index}
                className="bg-[#1a1a2e] rounded-2xl overflow-hidden transition-all duration-300 border border-purple-900/30"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-white text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <span className="text-[var(--accent)] bg-[#13132b] rounded-full p-2 transition-transform duration-300">
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqItems.slice(5).map((item, index) => (
            <div 
              key={index + 5}
              className="bg-[#1a1a2e] rounded-2xl overflow-hidden transition-all duration-300 border border-purple-900/30"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-white text-left"
                onClick={() => toggleFAQ(index + 5)}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <span className="text-[var(--accent)] bg-[#13132b] rounded-full p-2 transition-transform duration-300">
                  {openIndex === index + 5 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index + 5 ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}