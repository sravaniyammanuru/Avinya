import { dayOneEvents, dayTwoEvents } from '@/data/events';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Magical decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--primary)] animate-gradient-text">
            Event <span className="text-[var(--accent)]">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our magical lineup of events!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
          {/* Day 1 */}
          <div className="w-full md:w-5/12 bg-white rounded-2xl shadow-xl p-8 border border-purple-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-poppins font-bold text-[var(--primary)] mb-6 flex items-center">
                <span className="inline-block w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-3">1</span>
                Day One
              </h3>
              
              <div className="grid gap-4">
                {dayOneEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100 transform transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4">
                        <div className="w-3 h-3 bg-[var(--primary)] rounded-full"></div>
                      </div>
                      <h4 className="text-lg font-medium">{event}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="w-full md:w-5/12 bg-white rounded-2xl shadow-xl p-8 border border-purple-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-poppins font-bold text-[var(--accent)] mb-6 flex items-center">
                <span className="inline-block w-10 h-10 bg-[var(--accent)] text-white rounded-full flex items-center justify-center mr-3">2</span>
                Day Two
              </h3>
              
              <div className="grid gap-4">
                {dayTwoEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-indigo-100 transform transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent)] bg-opacity-10 flex items-center justify-center mr-4">
                        <div className="w-3 h-3 bg-[var(--accent)] rounded-full"></div>
                      </div>
                      <h4 className="text-lg font-medium">{event}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}