import { dayOneSchedule, dayTwoSchedule } from '@/data/events';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-bold text-[var(--primary)]">
            Event <span className="text-[var(--accent)]">Schedule</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mt-2 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your visit with our comprehensive event schedule!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Day 1 */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform duration-300 ease-in-out animate-pulse">
            <h3 className="text-2xl font-poppins font-semibold text-[var(--primary)] mb-6">Day 1</h3>

            <div className="space-y-6">
              {dayOneSchedule.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-24 flex-shrink-0">
                    <p className="font-medium text-[var(--primary)]">{item.time}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform duration-300 ease-in-out animate-pulse">
            <h3 className="text-2xl font-poppins font-semibold text-[var(--primary)] mb-6">Day 2</h3>

            <div className="space-y-6">
              {dayTwoSchedule.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-24 flex-shrink-0">
                    <p className="font-medium text-[var(--primary)]">{item.time}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}