import { Event } from '@/lib/types';
import { CalendarDays, Code, Laptop, PresentationIcon, PenTool, Database, Gamepad, Music, Timer, MapPin, Camera } from 'lucide-react';

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
  
  // Get registration link based on event ID
  const getRegistrationLink = (eventId: string) => {
    switch (eventId) {
      case 'coding':
        return 'https://tally.so/r/3lzbpV'; // CodeSrusti
      case 'project-expo':
        return 'https://tally.so/r/mVNLr6'; // Project Expo
      case 'esports':
        return 'https://tally.so/r/nGb68o'; // E-sports
      case 'culturals':
        return 'https://tally.so/r/waz9b9'; // Culturals (Dance)
      case 'singing':
        return 'https://tally.so/r/mZe8bB'; // Singing
      case 'photography':
        return 'https://tally.so/r/wbzqpL'; // Photography
      case 'hackathon':
        return 'https://tally.so/r/3NPpkp'; // HackFinity
      case 'ppt':
        return 'https://tally.so/r/3XQx6d'; // SlideDeck
      case 'treasure-hunt':
        return 'https://tally.so/r/wLO9rv'; // Treasure Hunt
      case 'query-crackers':
        return 'https://tally.so/r/mDa4LX'; // QueryCrackers
      case 'web-design':
        return 'https://tally.so/r/mY952z'; // Web Design
      case 'techvinya':
        return 'https://tally.so/r/31Rkql'; // Techvinya
      case 'tech-quiz':
        return 'https://tally.so/r/31Rkql';
      default:
        return '#register'; // Default fallback to registration section
    }
  };
  
  // Map the icon string to a Lucide icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'fa-code':
        return <Code size={24} />;
      case 'fa-laptop-code':
        return <Laptop size={24} />;
      case 'fa-diagram-project':
      case 'fa-person-chalkboard':
        return <PresentationIcon size={24} />;
      case 'fa-paintbrush':
        return <PenTool size={24} />;
      case 'fa-question-circle':
        return <Database size={24} />;
      case 'fa-gamepad':
        return <Gamepad size={24} />;
      case 'fa-music':
        return <Music size={24} />;
      case 'fa-stopwatch':
        return <Timer size={24} />;
      case 'fa-map-location-dot':
        return <MapPin size={24} />;
      case 'fa-camera':
        return <Camera size={24} />;
      default:
        return <CalendarDays size={24} />;
    }
  };
  
  return (
    <div 
      className="flip-card h-80 animate-fade-scale"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner rounded-xl shadow-lg">
        <div className="flip-card-front bg-white rounded-xl p-6 flex flex-col justify-between">
          <div className={`w-16 h-16 bg-[var(--${colorClass})] rounded-full flex items-center justify-center mx-auto text-white`}>
            {getIconComponent(event.icon)}
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
          {event.id === 'one-min-games' ? (
            <div className={`mt-4 ${event.type === 'technical' ? 'bg-white text-[var(--primary)]' : 'bg-white text-[var(--secondary)]'} font-medium px-4 py-2 rounded-full inline-block`}>
              Spot Registration
            </div>
          ) : (
            <a 
              href={getRegistrationLink(event.id)} 
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 ${event.type === 'technical' ? 'bg-white text-[var(--primary)]' : 'bg-white text-[var(--secondary)]'} font-medium px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition duration-300`}
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
