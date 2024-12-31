export const USERS_TABLE = [
  {
    id: 1,
    email: 'shubham@repozitory.com',
    // shubham123
    password: '$2a$12$drm6BnfbgVG4uCvvxhojeOcZv/TUKLSFrFaJ5Na8gLzN/kcfNDkaG',
  },
  {
    id: 2,
    email: 'nitin@repozitory.com',
    // password: 'nitin123',
    password: '$2a$12$ImnDMvgIrkLh1jrRheUA8O.oxU2VHHfcgO5v2eLwnbP3my6b0hUy2',
  },
];

export const MODEL_TABLE = [
  {
    id: 1,
    title: 'free',
    desc: '',
  },
  {
    id: 2,
    title: 'gpt-1',
    desc: '',
  },
  {
    id: 3,
    title: 'gpt-2',
    desc: '',
  },
];

export const SESSION_TABLE = [
  {
    id: 1,
    userId: 1,
    modelId: 2,
    title: 'GPT-1 Experiment',
  },
  {
    id: 2,
    userId: 2,
    modelId: 3,
    title: 'GPT-2 Chat',
  },
  {
    id: 3,
    userId: 1,
    modelId: 2,
    title: 'some random',
  },
];

export const CHAT_TABLE = [
  {
    id: 1,
    sessionId: 1,
    sender_type: 'user',
    message: 'Hello, GPT-1! How are you?',
    created_at: '2024-11-29T08:00:00Z',
  },
  {
    id: 2,
    sessionId: 1,
    sender_type: 'ai',
    message: "Hello, John! I'm doing great. How can I assist you today?",
    created_at: '2024-11-29T08:00:10Z',
  },
  {
    id: 3,
    sessionId: 2,
    sender_type: 'user',
    message: 'Hey GPT-2, can you help me with something?',
    created_at: '2024-11-29T08:10:00Z',
  },
  {
    id: 4,
    sessionId: 2,
    sender_type: 'ai',
    message: 'Of course, Jane! What would you like help with?',
    created_at: '2024-11-29T08:10:20Z',
  },

  {
    id: 5,
    sessionId: 3,
    sender_type: 'user',
    message: 'Hey GPT-2, can you help me with something?',
    created_at: '2024-11-29T08:10:00Z',
  },
  {
    id: 6,
    sessionId: 3,
    sender_type: 'ai',
    message: 'Of course, Jane! What would you like help with?',
    created_at: '2024-11-29T08:10:20Z',
  },
];

export const CHAT_GPT_MESSAGES = [
  'Did you know that octopuses have three hearts? One pumps blood to their organs, while the other two pump it to their gills.',
  'Sure! I can help you with that. What exactly do you need assistance with?',
  'Life is full of surprises—sometimes, the smallest things can bring the greatest joy!',
  "If you have any questions, feel free to ask! I'm here to help.",
  'Procrastination is like a credit card; it’s a lot of fun until you get the bill.',
  "The Eiffel Tower was originally intended to be a temporary structure, built for the 1889 World's Fair.",
  'Hmm, that’s an interesting thought! What made you come up with that?',
  'By the way, if you ever need book recommendations, I can suggest some amazing reads.',
  'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still perfectly edible!',
  'I think you’re on the right track! Let’s break it down step-by-step and tackle this together.',
  "Isn't it fascinating how a simple conversation can spark new ideas and perspectives?",
  'Fun fact: Sloths can hold their breath longer than dolphins. They can stay submerged underwater for up to 40 minutes!',
  'If you could visit any place in the world, where would you go and why?',
  'It’s great that you’re curious! Learning something new every day is the best way to grow.',
  'That’s a cool idea! How do you envision it turning out?',
  "When life gives you lemons, make lemonade... or maybe a lemon meringue pie if you're feeling ambitious!",
  'If you need help brainstorming, I’ve got plenty of ideas up my sleeve.',
  'Time is an illusion, but a well-timed coffee break is a must!',
  'Feeling stuck? Sometimes all it takes is a change in perspective to get the wheels turning.',
  'I’m curious—what’s the most interesting thing you’ve learned recently?',
];

export function getRandomNumber(min, max) {
  // Ensure that min is at least 1
  min = Math.max(min, 1);

  // Return a random number between min and max (inclusive of min, exclusive of max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
