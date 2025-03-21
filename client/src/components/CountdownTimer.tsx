import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // Set the target date to April 10, 2025
  const targetDate = new Date('April 10, 2025 00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [targetDate]);
  
  // Format number to always have two digits
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {/* Days */}
        <div className="bg-[#1a1a2e] rounded-xl p-4 flex flex-col items-center justify-center shadow-lg border border-purple-900">
          <div className="text-4xl md:text-6xl font-bold text-[var(--primary)]">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Days</div>
        </div>
        
        {/* Hours */}
        <div className="bg-[#1a1a2e] rounded-xl p-4 flex flex-col items-center justify-center shadow-lg border border-purple-900">
          <div className="text-4xl md:text-6xl font-bold text-[var(--primary)]">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Hours</div>
        </div>
        
        {/* Minutes */}
        <div className="bg-[#1a1a2e] rounded-xl p-4 flex flex-col items-center justify-center shadow-lg border border-purple-900">
          <div className="text-4xl md:text-6xl font-bold text-[var(--primary)]">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Minutes</div>
        </div>
        
        {/* Seconds */}
        <div className="bg-[#1a1a2e] rounded-xl p-4 flex flex-col items-center justify-center shadow-lg border border-purple-900">
          <div className="text-4xl md:text-6xl font-bold text-[var(--primary)]">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
}