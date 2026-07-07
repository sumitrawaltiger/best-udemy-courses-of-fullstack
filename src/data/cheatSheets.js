// Cheat Sheets gallery — quick-reference images for tools and topics.
// Each entry: { id, title, description, category, image, tags, source? }
// Drop the image file into public/cheatsheets/ with the matching filename.

export const CHEATSHEET_CATEGORIES = [
  { id: 'api-tools', label: 'API & Tools', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '💻' },
  { id: 'devops-cloud', label: 'DevOps & Cloud', icon: '☁️' },
];

export const CHEAT_SHEETS = [
  {
    id: 'postman',
    title: 'Postman Cheat Sheet',
    description:
      'A quick reference for API testing with Postman — HTTP methods, requests, auth types, variables, pre-request & test scripts, status codes, and handy shortcuts.',
    category: 'api-tools',
    image: '/cheatsheets/postman-cheat-sheet.jpg',
    tags: ['Postman', 'API Testing', 'REST'],
  },
  {
    id: 'linux-essential-commands',
    title: 'Linux Essential Commands',
    description:
      '25 essential Linux commands every developer should know — navigating the filesystem, working with files, searching, archiving, permissions, and managing processes.',
    category: 'devops-cloud',
    image: '/cheatsheets/linux-essential-commands.jpg',
    tags: ['Linux', 'CLI', 'Shell'],
  },
];
