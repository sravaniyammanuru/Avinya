import { Event } from '../lib/types';

export const technicalEvents: Event[] = [
  {
    id: 'tech-quiz',
    title: 'TechVinya',
    description: 'Test your technical knowledge',
    fee: '₹100 per head',
    icon: 'fa-question-circle',
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
      'Team size:- min 4 - max 6',
      'Registration fee:-₹400 per head',

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
      'Team size should be 1 or 2',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'ppt',
    title: 'SlideDeck',
    description: 'Present your ideas',
    fee: '₹150 per head ',
    icon: 'fa-person-chalkboard',
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
    icon: 'fa-paintbrush',
    details: [
      'HTML, CSS, and JavaScript',
      'Individual or team of 2',
      'Themes provided on-spot',
      'registration fee:- ₹200 per head (₹300/- per team if team contains 2 members)',
    ],
    type: 'technical',
    color: 'primary'
  },
  {
    id: 'query-crackers',
    title: 'QueryCrackers',
    description: 'Break the Code, Crack the Query',
    fee: '₹150 per head ',
    icon: 'fa-person-chalkboard',
    details: [
      ' A thrilling challenge to test your SQL skills, solve queries',
      'registration fee:- ₹200 per head (₹300/- per team if team contains 2 members)',
      'Individual or team of 2',
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
      'Registration fee:- ₹300 per team'
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'culturals',
    title: 'Culturals',
    description: 'Dances',
    fee: '₹150 per head (₹100 for 5+)',
    icon: 'fa-music',
    details: [
      'Individual or team participation',
      'Special discount for teams of 5+',
      'Registration fee:- 150/- per head (100/- per head for 5+ in a team)', 
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'culturals',
    title: 'Singing',
    description:'Songs',
    fee: '₹150 per head (₹100 for 5+)',
    icon: 'fa-music',
    details: [
      'Individual or team participation',
      'Special discount for teams of 5+',
      'Registration fee:- 150/- per head (100/- per head for 5+ in a team)', 
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'one-min-games',
    title: '1-Minute Games',
    description: 'Quick-fire fun challenges',
    fee: '₹49 per head',
    icon: 'fa-stopwatch',
    details: [
      'Various mini-games',
      'Individual participation',
      'Fast-paced and exciting',
      'registration fee:- 49/- per head',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    description: 'Find hidden clues',
    fee: '₹50 per head',
    icon: 'fa-map-location-dot',
    details: [
      'Campus-wide hunt',
      'Challenging riddles and clues',
      'Prizes for the fastest teams',
      'registration fee:- 50/- per head',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capture the Moments',
    fee: '₹100/- per head',
    icon: 'fa-music',
    details: [
      'Individual participation',
      'Registration fee:- 100/- per head ', 
    ],
    type: 'non-technical',
    color: 'secondary'
  },
];

export const dayOneEvents = [
  'HackFinity',
  'TechVinya',
  'SlidDeck',
  'CodeSrusti',
  'QueryCrackers', 
  'Web Design'
];

export const dayTwoEvents = [
  'Project Expo',
  'E-Sports',
  'Treasure Hunt',
  '1-Minute Games',
  'Photography',
  'Culturals (Songs, Dance)'
];