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
      'Registration fee:- ₹100 per head'
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'culturals',
    title: 'Culturals',
    description: 'Songs, Dances',
    fee: '₹150 per head (₹100 for 5+)',
    icon: 'fa-music',
    details: [
      'Individual or team participation',
      'Songs, dances',
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
    fee: '₹100 per head',
    icon: 'fa-stopwatch',
    details: [
      'Various mini-games',
      'Individual participation',
      'Fast-paced and exciting',
      'registration fee:- 100/- per head',
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
    id: 'meme-making',
    title: 'Meme Making',
    description: 'Create viral content',
    fee: '₹49 per head',
    icon: 'fa-face-laugh',
    details: [
      'Create original memes on the event(Avasya)',
      'refer more and win more',
    ],
    type: 'non-technical',
    color: 'secondary'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Songs, Dances',
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

export const dayOneSchedule = [
  { time: '8:30 to 9:30', title: 'Registration & Welcome', location: 'location' },
  { time: '9:30 to 10:00', title: 'Inauguaration', location: 'location' },
  {time: '10:30 to ?', title:'ppt', location:'location'},
  {time: '10:30 to ?', title:'sql', location:'location'},
  { time: '11:00 AM', title: 'Hackathon Begins', location: 'Location' },
  { time: '11:30 AM to ?', title: 'Coding', location: 'location' },
  { time: '1:00 PM to 2:00', title: 'Lunch', location: 'location' },
  { time: '2:30 PM to ?', title: 'Quiz', location: 'location' },
];

export const dayTwoSchedule = [
  { time: '8:30 AM to 9:30', title: 'Registration Day 2', location: 'location' },
  { time: '10:00 AM to 10:30', title: 'welcome(Instructions)', location: 'location' },
  { time: '11:00 AM', title: 'Hackathon Ends', location: 'Lab Complex' },
  { time: '11:30 AM to ?', title: 'Project expo', location: 'location' },
  { time: '? to ?', title: '1-min-games', location: 'Sports room' },
  { time: '3:30 PM', title: 'Ending nore,prize distribution', location: 'seminar hall' },
];