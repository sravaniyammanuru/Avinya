import ParticleBackground from './ParticleBackground';
import CountdownTimer from './CountdownTimer';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-[var(--dark)]">
      <ParticleBackground count={100} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center">
        <div className="mt-[-10vh]">
          <div className="floating">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6 animate-slide-in">
              Welcome to <span className="text-[var(--accent)] animate-shimmer">Avinya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white font-quicksand mb-4">
              A Celebration of Talent and Innovation!
            </p>
            <p className="text-lg text-[var(--accent)] font-medium mb-2">
              Join us on April 10-11, 2025
            </p>
          </div>
          
          {/* Countdown Timer */}
          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="#events" 
              className="px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-medium rounded-full transition duration-300 transform hover:scale-105"
            >
              Explore Events
            </a>
            <a 
              href="#register" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
          
          <div className="mt-12">
            <div 
              className="scroll-indicator cursor-pointer mx-auto hover:scale-110 transition-transform duration-300" 
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="dotted-circle flex items-center justify-center border-purple-400">
                <ChevronDown className="text-white animate-bounce" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}