// Video resources per Thunder lecture day
// Paid in-depth: Rohit Negi Thunder course portal
// YouTube: verified free tutorials from any quality channel

export const PAID_COURSE_URL =
  'https://rohittnegi.akamai.net.in/new-courses/18/content?activeTab=Content';

export const PAID_COURSE_LABEL = 'Full In-Depth Lecture — Thunder Course';

export const youtubeByDay = {
  1: {
    url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
    title: 'JavaScript Crash Course For Beginners',
    channel: 'Traversy Media',
  },
  2: {
    url: 'https://www.youtube.com/watch?v=nCwQY8inRvU',
    title: 'Data Types in JavaScript',
    channel: 'Code with Ania',
  },
  3: {
    url: 'https://www.youtube.com/watch?v=ovWYhDVQiR8',
    title: 'JavaScript Logical Operators',
    channel: 'Code with Ania',
  },
  4: {
    url: 'https://www.youtube.com/watch?v=s9wW2PpJsmQ',
    title: 'JavaScript Loops',
    channel: 'Programming with Mosh',
  },
  5: {
    url: 'https://www.youtube.com/watch?v=VjGYVG9oyPY',
    title: 'Star Pattern Programs with Loops',
    channel: 'Code Step By Step',
  },
  6: {
    url: 'https://www.youtube.com/watch?v=yQ1fz8LY354',
    title: 'JavaScript Arrays',
    channel: 'Code with Ania',
  },
  7: {
    url: 'https://www.youtube.com/watch?v=lo7o91qLzxc',
    title: 'JavaScript Objects',
    channel: 'Code with Ania',
  },
  8: {
    url: 'https://www.youtube.com/watch?v=FOD408a0EzU',
    title: 'How To Create & Use Functions',
    channel: 'Chris Courses',
  },
  9: {
    url: 'https://www.youtube.com/watch?v=PojpwEbOQJg',
    title: 'map(), filter() & reduce()',
    channel: 'Code with Ania',
  },
  10: {
    url: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
    title: 'JavaScript DOM Crash Course',
    channel: 'Traversy Media',
  },
  11: {
    url: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M',
    title: 'JavaScript Event Listeners',
    channel: 'Web Dev Simplified',
  },
  12: {
    url: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M',
    title: 'JavaScript Event Listeners',
    channel: 'Web Dev Simplified',
  },
  13: {
    url: 'https://www.youtube.com/watch?v=2ml4x0rO1PQ',
    title: '5 Mini JavaScript Projects for Beginners',
    channel: 'Ania Kubów',
  },
  14: {
    url: 'https://www.youtube.com/watch?v=2ml4x0rO1PQ',
    title: '5 Mini JavaScript Projects for Beginners',
    channel: 'Ania Kubów',
  },
  15: {
    url: 'https://www.youtube.com/watch?v=Oive66jrwBs',
    title: 'Fetch API Introduction',
    channel: 'Traversy Media',
  },
  16: {
    url: 'https://www.youtube.com/watch?v=EvfRXyKa_GI',
    title: 'Learn JavaScript Hoisting',
    channel: 'Web Dev Simplified',
  },
  17: {
    url: 'https://www.youtube.com/watch?v=1UTqFAjYx1k',
    title: 'JavaScript Prototypal Inheritance',
    channel: 'Traversy Media',
  },
  18: {
    url: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
    title: 'Async JS — Callbacks, Promises, Async Await',
    channel: 'Traversy Media',
  },
  19: {
    url: 'https://www.youtube.com/watch?v=3a0I8ICR1Vg',
    title: 'Learn Closures In 7 Minutes',
    channel: 'Web Dev Simplified',
  },
};

export const youtubeSupplementByDay = {
  4: {
    url: 'https://www.youtube.com/watch?v=wssvLtVSFeI',
    title: 'Useful JavaScript String Methods',
    channel: 'Code with Ania',
  },
  16: {
    url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
    title: 'What the heck is the event loop anyway?',
    channel: 'Philip Roberts · JSConf',
  },
  17: {
    url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
    title: 'What the heck is the event loop anyway?',
    channel: 'Philip Roberts · JSConf',
  },
  19: {
    url: 'https://www.youtube.com/watch?v=gvicrj31JOM',
    title: 'JavaScript this Keyword',
    channel: 'Programming with Mosh',
  },
};

export function getPaidLectureUrl() {
  return PAID_COURSE_URL;
}

export function getYoutubeForDay(day) {
  return youtubeByDay[day] || null;
}

export function getYoutubeSupplementForDay(day) {
  return youtubeSupplementByDay[day] || null;
}
