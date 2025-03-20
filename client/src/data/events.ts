import { Event } from '../lib/types';

export const technicalEvents: Event[] = [
  {
    id: 'tech-quiz',
    title: 'Technical Quiz',
    description: 'Test your technical knowledge',
    fee: '₹100 per head',
    icon: 'fa-question',
    details: [
      'Quiz covering various technical topics',
      'Individual participation',
      'Cash prizes for winners',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'coding',
    title: 'Coding',
    description: 'Showcase your coding skills',
    fee: '₹150 per head (₹300 for team of 2)',
    icon: 'fa-code',
    details: [
      'Multiple programming languages supported',
      'Individual or team of 2',
      'Problem statement provided on-spot',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'hackathon',
    title: 'Hackathon',
    description: '24-hour coding marathon',
    fee: '₹400 per head',
    icon: 'fa-laptop-code',
    details: [
      'Starts 11 AM Day 1 to 11 AM Day 2',
      'Problem statements will be provided',
      'Mentors available for guidance',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'project-expo',
    title: 'Project Expo',
    description: 'Showcase your innovations',
    fee: '₹300 per team',
    icon: 'fa-diagram-project',
    details: [
      'Expo starts after Hackathon ends (Day 2)',
      'Team-based presentation',
      'Projects judged on innovation, feasibility, and presentation',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'ppt',
    title: 'PPT',
    description: 'Present your ideas',
    fee: '₹150 per head (₹300 for team of 2)',
    icon: 'fa-presentation',
    details: [
      'Topics will be provided in advance',
      'Judged on content, design and presentation skills',
      'Day 1 event',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Create beautiful websites',
    fee: '₹150 per head (₹300 for team of 2)',
    icon: 'fa-paint-brush',
    details: [
      'HTML, CSS, and JavaScript',
      'Individual or team of 2',
      'Themes provided on-spot',
    ],
    type: 'technical',
    color: 'primary'
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 'esports',
    title: 'E-Sports',
    description: 'Free Fire, PUBG',
    fee: '₹100 per head',
    icon: 'fa-gamepad',
    details: [
      'Individual registrations',
      'Bring your own device',
      'Tournament style competition',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'culturals',
    title: 'Culturals',
    description: 'Songs, Dances, Photography',
    fee: '₹150 per head (₹100 for 5+)',
    icon: 'fa-music',
    details: [
      'Individual or team participation',
      'Songs, dances, and photography',
      'Special discount for teams of 5+',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'one-min-games',
    title: '1-Minute Games',
    description: 'Quick-fire fun challenges',
    fee: '₹100 per head',
    icon: 'fa-stopwatch',
    details: [
      'Various mini-games',
      'Individual participation',
      'Fast-paced and exciting',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    description: 'Find hidden clues',
    fee: '₹50 per head',
    icon: 'fa-map-marked-alt',
    details: [
      'Campus-wide hunt',
      'Challenging riddles and clues',
      'Prizes for the fastest teams',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'meme-making',
    title: 'Meme Making',
    description: 'Create viral content',
    fee: '₹49 per head',
    icon: 'fa-laugh',
    details: [
      'Create original memes on given topics',
      'Share via referral links',
      'Highest referrals win prizes',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
];

export const dayOneSchedule = [
  { time: '9:00 AM', title: 'Registration & Welcome', location: 'Main Auditorium' },
  { time: '10:00 AM', title: 'Technical Quiz', location: 'Room 101' },
  { time: '11:00 AM', title: 'Hackathon Begins', location: 'Lab Complex' },
  { time: '12:00 PM', title: 'PPT Competition', location: 'Room 102' },
  { time: '2:00 PM', title: 'SQL Challenge', location: 'Computer Lab' },
  { time: '4:00 PM', title: 'Coding Competition', location: 'Room 103' },
];

export const dayTwoSchedule = [
  { time: '9:00 AM', title: 'Registration Day 2', location: 'Main Auditorium' },
  { time: '10:00 AM', title: 'Culturals Begin', location: 'Open Auditorium' },
  { time: '11:00 AM', title: 'Hackathon Ends', location: 'Lab Complex' },
  { time: '12:00 PM', title: 'Project Expo', location: 'Main Hall' },
  { time: '2:00 PM', title: 'E-Sports & 1-Min Games', location: 'Recreation Area' },
  { time: '5:00 PM', title: 'Prize Distribution', location: 'Main Auditorium' },
];
