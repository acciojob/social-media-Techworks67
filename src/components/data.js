export const initialUsers = [
  { id: '0', name: 'User One' },
  { id: '1', name: 'User Two' },
  { id: '2', name: 'User Three' },
];

export const initialPosts = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the first post content',
    userId: '0',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'This is the second post content',
    userId: '1',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];