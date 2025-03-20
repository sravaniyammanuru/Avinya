export interface Event {
  id: string;
  title: string;
  description: string;
  fee: string;
  icon: string;
  details: string[];
  type: 'technical' | 'non-technical';
  color: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  location: string;
}

export interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  event: string;
  teamSize: string;
  accommodation: string;
  message: string;
}
