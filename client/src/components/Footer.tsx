export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-poppins font-bold"><span className="text-[var(--accent)]">A</span>vinya</h2>
            <p className="text-gray-400 mt-2">A Celebration of Talent and Innovation</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[var(--accent)]"></i>
                <span>Chaitanya Bharathi Institute of Technology, Proddatur, YSR Kadapa District, Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[var(--accent)]"></i>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[var(--accent)]"></i>
                <span>avinya@cbit.edu.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">About CBIT</a></li>
              <li><a href="#events" className="hover:text-white transition duration-300">Events</a></li>
              <li><a href="#schedule" className="hover:text-white transition duration-300">Schedule</a></li>
              <li><a href="#register" className="hover:text-white transition duration-300">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-utensils mr-3 text-[var(--accent)]"></i>
                <span>Lunch provided on both days</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-bed mr-3 text-[var(--accent)]"></i>
                <span>Accommodation available for ₹200</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-calendar-alt mr-3 text-[var(--accent)]"></i>
                <span>Event Dates: Coming Soon</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Avinya - CBIT Symposium. All rights reserved.</p>
          <p className="mt-2">Designed with <i className="fas fa-heart text-[var(--accent)]"></i> for CBIT</p>
        </div>
      </div>
    </footer>
  );
}
