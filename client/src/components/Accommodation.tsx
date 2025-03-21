export default function Accommodation() {
  return (
    <section id="accommodation" className="py-16 md:py-24 bg-[var(--dark)]">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="text-[var(--accent)]">Accommodation</span> Details
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We provide accommodation for participants coming from distant locations. Pre-registration required.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Magical elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 opacity-20 animate-spin-slow">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--accent)" d="M39.9,-65.7C54.3,-59.6,70.4,-53.3,79.3,-41.4C88.2,-29.5,89.9,-12.2,86.6,3.4C83.3,18.9,75,32.8,65.2,45.5C55.5,58.2,44.5,69.7,31.3,73.8C18.1,77.9,2.9,74.7,-12.2,71.4C-27.2,68.1,-41.9,64.9,-52.3,56.5C-62.6,48.1,-68.4,34.7,-72.1,20.7C-75.7,6.8,-77.3,-7.5,-72.9,-19.5C-68.5,-31.4,-58.1,-40.8,-46.4,-48.4C-34.7,-56,-21.9,-61.7,-8.1,-69.1C5.6,-76.6,25.6,-71.9,39.9,-65.7Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute -bottom-5 -right-10 w-16 h-16 opacity-30 animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--primary)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.5,79.6,-46.4C87.3,-33.2,89.9,-16.6,87.8,-1.2C85.8,14.2,79.2,28.3,71.1,41.8C63,55.2,53.5,67.9,41.1,75.4C28.8,82.9,14.4,85.2,-0.8,86.5C-16,87.8,-32,88.2,-44.2,81.1C-56.4,74,-64.8,59.5,-72.2,44.8C-79.6,30.1,-85.9,15.1,-86.1,-0.1C-86.2,-15.3,-80.2,-30.7,-71.3,-44.1C-62.4,-57.5,-50.5,-69,-37.1,-75.5C-23.7,-81.9,-11.8,-83.3,1.2,-85.4C14.3,-87.4,28.6,-89.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm shadow-xl border border-purple-900/50 magical-glow relative overflow-hidden">
            {/* Subtle sparkle effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow opacity-60"></div>
              <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse-slow opacity-60 animation-delay-300"></div>
              <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse-slow opacity-60 animation-delay-700"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow opacity-60 animation-delay-1000"></div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Accommodation Fee</h3>
              <div className="text-3xl font-bold text-[var(--accent)] relative">
                <span className="relative z-10">₹200/-</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent opacity-60 blur-sm rounded-lg"></div>
              </div>
            </div>
            
            <div className="mb-8 relative">
              <h4 className="text-xl font-semibold mb-4 text-white">Important Guidelines</h4>
              <ul className="space-y-4">
                <li className="flex items-start group transition-all duration-300">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[var(--accent)] text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">You are responsible for your belongings</p>
                </li>
                <li className="flex items-start group transition-all duration-300">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[var(--accent)] text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Basic amenities will be provided</p>
                </li>
                <li className="flex items-start group transition-all duration-300">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[var(--accent)] text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Must register in advance</p>
                </li>
                <li className="flex items-start group transition-all duration-300">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[var(--accent)] text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Provided only for participants</p>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a 
                href="#register" 
                className="relative inline-block px-8 py-3 overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white opacity-10 rounded-full"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative font-semibold text-white group-hover:text-white">Register Now</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400 italic">
            <p>For any accommodation-related queries, please contact us at the provided phone numbers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}