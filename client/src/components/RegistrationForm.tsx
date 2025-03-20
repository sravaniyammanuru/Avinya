import { useState } from 'react';
import { technicalEvents, nonTechnicalEvents } from '@/data/events';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function RegistrationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    event: '',
    teamSize: '1',
    accommodation: 'no',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.college || !formData.event) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      // Send data to the server
      await apiRequest('POST', '/api/register', formData);
      
      // Success message
      toast({
        title: "Success!",
        description: "Registration successful! We'll contact you soon with further details.",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        event: '',
        teamSize: '1',
        accommodation: 'no',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const allEvents = [...technicalEvents, ...nonTechnicalEvents];

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-bold text-[var(--primary)]">
            Register <span className="text-[var(--accent)]">Now</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-2 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Secure your spot at Avinya and join us for an unforgettable experience!
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8 magical-border">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College/Institution</label>
                <input 
                  type="text" 
                  id="college" 
                  name="college" 
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>
              
              <div className="col-span-2">
                <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">Select Event</label>
                <select 
                  id="event" 
                  name="event" 
                  value={formData.event}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                >
                  <option value="">-- Select an event --</option>
                  <optgroup label="Technical Events">
                    {technicalEvents.map(event => (
                      <option key={event.id} value={event.id}>{event.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Non-Technical Events">
                    {nonTechnicalEvents.map(event => (
                      <option key={event.id} value={event.id}>{event.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              
              <div className="col-span-1">
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                <select 
                  id="teamSize" 
                  name="teamSize" 
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                >
                  <option value="1">Individual</option>
                  <option value="2">2 Members</option>
                  <option value="3-5">3-5 Members</option>
                  <option value="5+">5+ Members</option>
                </select>
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Accommodation</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="accom-yes" 
                      name="accommodation" 
                      value="yes" 
                      checked={formData.accommodation === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                    />
                    <label htmlFor="accom-yes" className="ml-2 text-sm text-gray-700">Yes (₹200 extra)</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="accom-no" 
                      name="accommodation" 
                      value="no" 
                      checked={formData.accommodation === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                    />
                    <label htmlFor="accom-no" className="ml-2 text-sm text-gray-700">No</label>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements (if any)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} 
                  placeholder="Let us know if you have any specific requirements" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-medium rounded-full transition duration-300 transform hover:scale-105 glowing disabled:opacity-70"
              >
                {isSubmitting ? 'Processing...' : 'Complete Registration'}
              </button>
              <p className="text-sm text-gray-500 mt-4">By registering, you agree to our terms and conditions.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
