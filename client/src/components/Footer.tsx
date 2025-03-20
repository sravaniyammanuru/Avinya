
export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-poppins font-bold">
              <span className="text-[var(--accent)]">Avinya</span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg">A Celebration of Talent and Innovation</p>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-8">
            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--accent)]">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-[var(--accent)]"></i>
                <span className="flex-1">Chaitanya Bharathi Institute of Technology, Proddatur, YSR Kadapa District, Andhra Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-[var(--accent)]"></i>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-[var(--accent)]"></i>
                <span>avinya@cbit.edu.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--accent)]">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-[var(--accent)] transition duration-300 hover-scale inline-block">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--accent)] transition duration-300">About CBIT</a></li>
              <li><a href="#events" className="hover:text-[var(--accent)] transition duration-300">Events</a></li>
              <li><a href="#schedule" className="hover:text-[var(--accent)] transition duration-300">Schedule</a></li>
              <li><a href="#register" className="hover:text-[var(--accent)] transition duration-300">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[var(--accent)]">Additional Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <i className="fas fa-utensils text-[var(--accent)]"></i>
                <span>Lunch provided on both days</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-bed text-[var(--accent)]"></i>
                <span>Accommodation available for ₹200</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-[var(--accent)]"></i>
                <span>Event Dates: 10 & 11 of april 2k25</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Avinya - CBIT Symposium. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Designed with <i className="fas fa-heart text-[var(--accent)]"></i> for CBIT</p>
        </div>
      </div>
    </footer>
  );
}
