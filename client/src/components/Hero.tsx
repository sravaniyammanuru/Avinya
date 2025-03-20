import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-[var(--dark)]">
      <ParticleBackground count={100} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center">
        <div className="floating">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-white mb-6 animate-slide-in">
            Welcome to <span className="text-[var(--accent)] animate-shimmer">Avinya</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white font-quicksand mb-8">
            A Celebration of Talent and Innovation!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

        <div className="absolute bottom-8 w-full text-center">
          <div 
            className="scroll-indicator cursor-pointer" 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="dotted-circle"></div>
            <i className="fas fa-chevron-down arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
}