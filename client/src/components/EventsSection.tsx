import { useState } from 'react';
import EventCard from './EventCard';
import { technicalEvents, nonTechnicalEvents } from '@/data/events';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-bold text-[var(--primary)]">
            Event <span className="text-[var(--accent)]">Categories</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-2 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into a world of innovation, creativity, and entertainment with our diverse range of events!
          </p>
        </div>
        
        {/* Event Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-3 ${activeTab === 'technical' 
              ? 'bg-[var(--primary)] text-white' 
              : 'bg-gray-200 text-gray-700'} rounded-full font-medium shadow-md transition-colors duration-300`}
          >
            Technical Events
          </button>
          <button 
            onClick={() => setActiveTab('non-technical')}
            className={`px-6 py-3 ${activeTab === 'non-technical' 
              ? 'bg-[var(--secondary)] text-white' 
              : 'bg-gray-200 text-gray-700'} rounded-full font-medium shadow-md transition-colors duration-300`}
          >
            Non-Technical Events
          </button>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'technical' 
            ? technicalEvents.map(event => <EventCard key={event.id} event={event} />)
            : nonTechnicalEvents.map(event => <EventCard key={event.id} event={event} />)
          }
        </div>
      </div>
    </section>
  );
}
