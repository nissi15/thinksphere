export const challenges = [
  {
    id: 1,
    title: "Challenge 1",
    description: "Setting the foundation for innovation.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_1",
    position: { x: 50, y: 40 },
  },
  {
    id: 2,
    title: "Challenge 2",
    description: "Deepening our understanding and research.",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_2",
    position: { x: 320, y: 40 },
  },
  {
    id: 3,
    title: "Challenge 3",
    description: "Prototyping and testing our ideas.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_3",
    position: { x: 590, y: 40 },
  },
  {
    id: 4,
    title: "Challenge 4",
    description: "Iterating based on real-world feedback.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_4",
    position: { x: 50, y: 260 },
  },
  {
    id: 5,
    title: "Challenge 5",
    description: "Scaling our solution and measuring impact.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_5",
    position: { x: 320, y: 260 },
  },
  {
    id: 6,
    title: "Challenge 6 — Digital Print",
    description: "The website you're looking at right now.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop",
    videoId: "PLACEHOLDER_6",
    position: { x: 590, y: 260 },
  },
];

export const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 1, to: 4 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
];

export const teamMembers = [
  { name: "Member 1", role: "Role / Title", avatar: "https://placehold.co/160x160/d4d4d8/52525b?text=1" },
  { name: "Member 2", role: "Role / Title", avatar: "https://placehold.co/160x160/d4d4d8/52525b?text=2" },
  { name: "Member 3", role: "Role / Title", avatar: "https://placehold.co/160x160/d4d4d8/52525b?text=3" },
  { name: "Member 4", role: "Role / Title", avatar: "https://placehold.co/160x160/d4d4d8/52525b?text=4" },
  { name: "Member 5", role: "Role / Title", avatar: "https://placehold.co/160x160/d4d4d8/52525b?text=5" },
];

export const stats = [
  { label: "Challenges", target: 6 },
  { label: "Members", target: 5 },
  { label: "Points", target: 5000 },
];
