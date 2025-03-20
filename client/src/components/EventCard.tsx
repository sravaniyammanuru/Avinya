import { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const colorClass = event.type === 'technical' ? 'primary' : 'secondary';
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.transition = 'transform 0.3s ease';
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };
  
  return (
    <div 
      className="flip-card h-80 animate-fade-scale"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner rounded-xl shadow-lg">
        <div className="flip-card-front bg-white rounded-xl p-6 flex flex-col justify-between">
          <div className={`w-16 h-16 bg-[var(--${colorClass})] bg-opacity-10 rounded-full flex items-center justify-center mx-auto`}>
            <i className={`fa-solid ${event.icon || 'fa-calendar-days'} text-2xl text-[var(--${colorClass})]`}></i>
          </div>
          <div className="text-center">
            <h3 className={`text-xl font-poppins font-semibold text-[var(--${colorClass})] mt-4`}>{event.title}</h3>
            <p className="text-gray-600 mt-2">{event.description}</p>
           
          </div>
          <div className="text-center text-gray-400">
            <small>Click to see details</small>
          </div>
        </div>
        <div className={`flip-card-back bg-[var(--${colorClass})] text-white rounded-xl p-6 flex flex-col justify-between`}>
          <h3 className="text-xl font-poppins font-semibold">{event.title}</h3>
          <div>
            <p className="mb-2">{event.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {event.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <a 
            href="#register" 
            className={`mt-4 ${event.type === 'technical' ? 'bg-white text-[var(--primary)]' : 'bg-white text-[var(--secondary)]'} font-medium px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition duration-300`}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
