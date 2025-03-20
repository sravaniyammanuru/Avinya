export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-bold text-[var(--primary)]">
            About <span className="text-[var(--accent)]">CBIT</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-2 mb-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="magical-border p-1 rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="CBIT Campus" 
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Chaitanya Bharathi Institute Of Technology was established at Proddatur in YSR (Kadapa) District, Andhra Pradesh, 
              with a commitment to providing quality education. Under the leadership of Sri. V. Jayachandra Reddy, CBIT is affiliated 
              with Jawaharlal Nehru Technological University, Anantapuramu (JNTUA), and has gained recognition for fostering academic excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-poppins font-semibold text-[var(--primary)] mb-2">Vision</h4>
                <p className="text-sm text-gray-600">To become a center of excellence in technical education fostering research, innovation and entrepreneurship.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-poppins font-semibold text-[var(--primary)] mb-2">Mission</h4>
                <p className="text-sm text-gray-600">To provide quality education, research opportunities, and develop innovative, ethical professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
