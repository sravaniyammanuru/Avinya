import { Event } from '../lib/types';

export const technicalEvents: Event[] = [
  {
    id: 'tech-quiz',
    title: 'TechVinya',
    description: 'Test your technical knowledge',
    details: [
      'Quiz covering various technical topics',
      'Team of 4 members',
      'registration fee:- ₹100/- per head',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'coding',
    title: 'CodeSrusti',
    description: 'Showcase your coding skills',
    fee: '₹200 per head (₹300/- per team if team contains 2 members)',
    icon: 'fa-code',
    details: [
      'Multiple programming languages supported',
      'Individual or team of 2',
      'registration fee:- ₹200 per head (₹300/- per team if team contains 2 members)'
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'hackathon',
    title: 'HackFinity',
    description: '24-hour Hackathon',
    fee: '₹400 per head',
    icon: 'fa-laptop-code',
    details: [
      'The event will commence at 11:00 AM on Day 1 and conclude at 11:00 AM on Day 2, spanning a full 24-hour experience.',
      'Problem statements will be provided',
      'Mentors and co-ordinators available for guidance',
      'Team size:- min 4 - max 6'

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
      '₹300 per team',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'ppt',
    title: 'SlideDeck',
    description: 'Present your ideas',
    fee: '₹150 per head ',
    icon: 'fa-presentation',
    details: [
      'Showcase your knowledge on any cutting edge technologies',
      'Judged on content, design and presentation skills',
      'registration fee:- ₹200 per head (₹300/- per team if team contains 2 members)',
      'Individual or team of 2',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Create beautiful websites',
    fee: '₹200 per head (₹300 for team of 2)',
    icon: 'fa-paint-brush',
    details: [
      'HTML, CSS, and JavaScript',
      'Individual or team of 2',
      'Themes provided on-spot',
      'registration fee:- ₹200 per head (₹300/- per team if team contains 2 members)',
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