// Rohit Negi · Coder Army — Javascript Full Course (matches Thunder day-wise topics)
// https://www.youtube.com/@CoderArmy9

export const thunderYoutubeByDay = {
  1: {
    url: 'https://www.youtube.com/watch?v=611_04Ml25c',
    title: 'Introduction to JavaScript | Javascript Full Course #01',
  },
  2: {
    url: 'https://www.youtube.com/watch?v=UXYJGHhuGA8',
    title: 'Variables & Data Types (var, let, const) | Javascript Full Course #02',
  },
  3: {
    url: 'https://www.youtube.com/watch?v=7dMQr2-T--4',
    title: 'Operators, Comparison & Type Coercion | Javascript Full Course #04',
  },
  4: {
    url: 'https://www.youtube.com/watch?v=7dMQr2-T--4&t=2903',
    title: 'Loops, Numbers & Math Precision | Javascript Full Course #04',
  },
  5: {
    url: 'https://www.youtube.com/watch?v=HTcT-TuraHM',
    title: 'Numbers, Math Object & Patterns | Javascript Full Course #05',
  },
  6: {
    url: 'https://www.youtube.com/watch?v=fuA8BQkQO_E',
    title: 'Arrays Explained In-Depth | Javascript Full Course #07',
  },
  7: {
    url: 'https://www.youtube.com/watch?v=iuZkPCBBV5U',
    title: 'Objects Explained In-Depth | Javascript Full Course #08',
  },
  8: {
    url: 'https://www.youtube.com/watch?v=1VpZGlGw5xE',
    title: 'Functions, Arrow Functions & Rest/Spread | Javascript Full Course #09',
  },
  9: {
    url: 'https://www.youtube.com/watch?v=UByPRYaMEkI',
    title: 'map, filter, reduce, forEach & Set | Javascript Full Course #12',
  },
  10: {
    url: 'https://www.youtube.com/watch?v=wLp99HGG8GQ',
    title: 'DOM Manipulation | Javascript Full Course #13',
  },
  11: {
    url: 'https://www.youtube.com/watch?v=2jVOkYiAl2s',
    title: 'CRUD Operations in DOM | Javascript Full Course #14',
  },
  12: {
    url: 'https://www.youtube.com/watch?v=CGjHpnm8TeE',
    title: 'Events & Event Handlers | Javascript Full Course #15',
  },
  13: {
    url: 'https://www.youtube.com/watch?v=dQDteO0RXrc',
    title: '10 JavaScript Projects for Beginners | Javascript Full Course #16',
  },
  14: {
    url: 'https://www.youtube.com/watch?v=dQDteO0RXrc',
    title: 'JavaScript Projects — Build Real Apps | Javascript Full Course #16',
  },
  15: {
    url: 'https://www.youtube.com/watch?v=LYe1my0KkPo',
    title: 'JSON vs JS Object & fetch API | Javascript Full Course #19',
  },
  16: {
    url: 'https://www.youtube.com/watch?v=WRBFDQR0oM4',
    title: 'Memory Management: Stack vs Heap | Javascript Full Course #03',
  },
  17: {
    url: 'https://www.youtube.com/watch?v=9KwCG9aVwvQ',
    title: 'Prototypes & Classes | Javascript Full Course #21',
  },
  18: {
    url: 'https://www.youtube.com/watch?v=CTJLBCYod9E',
    title: 'Callback Hell & Promises | Javascript Full Course #18',
  },
  19: {
    url: 'https://www.youtube.com/watch?v=UBCPtXXMAWs',
    title: 'Closures, Scope & this Keyword | Javascript Full Course #11',
  },
};

// Supplemental video when a lecture covers two major topics
export const thunderYoutubeSupplement = {
  4: {
    url: 'https://www.youtube.com/watch?v=8dgsUGEgPXo',
    title: 'Strings & String Methods | Javascript Full Course #06',
  },
  7: {
    url: 'https://www.youtube.com/watch?v=8dgsUGEgPXo',
    title: 'Strings & Date Objects | Javascript Full Course #06',
  },
  8: {
    url: 'https://www.youtube.com/watch?v=8dgsUGEgPXo',
    title: 'Date Objects Explained | Javascript Full Course #06',
  },
  16: {
    url: 'https://www.youtube.com/watch?v=ijPq-u3y9cs',
    title: 'How JS Code Runs & Hoisting | Javascript Full Course #10',
  },
  17: {
    url: 'https://www.youtube.com/watch?v=rsepF1ugeC8',
    title: 'Event Loop | Javascript Full Course #17',
  },
  19: {
    url: 'https://www.youtube.com/watch?v=7tRyccjYgF0',
    title: 'this Keyword, call, apply & bind | Javascript Full Course #22',
  },
};

export function getYoutubeForDay(day) {
  return thunderYoutubeByDay[day] || null;
}

export function getYoutubeSupplementForDay(day) {
  return thunderYoutubeSupplement[day] || null;
}
