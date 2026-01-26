// Projects data - easily add, modify, or remove projects here
// Each project requires: id, title, description, image, technologies, link

export const projects = [
  {
    id: 1,
    title: 'Odor Prediction System',
    description:
      'A full-featured online odor profile prediction platform with scent database & recipe input.',
    image: '/public/images/odorPrediction.jpg',
    technologies: ['Python', 'javascript', 'quantumchemistry'],
    link: '#',
  },
  {
    id: 2,
    title: 'Restaurant Website',
    description:
      'Full functional & responsive website with menu, ordering, and more features.',
    image: '/public/images/restaurant-italy.png',
    technologies: ['React', 'API', 'SPA'],
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with forecasts, maps, and location-based data.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    technologies: ['React', 'API', 'Chart.js'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media Clone',
    description:
      'Full-stack social platform with posts, comments, likes, and user profiles.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['React', 'Express', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description:
      'Tool to create professional portfolios with customizable themes and sections.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    technologies: ['React', 'Tailwind', 'Redux'],
    link: '#',
  },
  {
    id: 6,
    title: 'Vacation App',
    description:
      'Traveling with your RV made easy. Plan trips, find campgrounds, and track expenses.',
    image: '/public/images/carthago.png',
    technologies: ['React', 'API', 'Tailwind'],
    link: '#',
  },
];

// To add a new project, simply add a new object following the same structure:
// {
//   id: 7,
//   title: "Your Project Title",
//   description: "Brief description of your project.",
//   image: "https://your-image-url.com/image.jpg",
//   technologies: ["Tech1", "Tech2", "Tech3"],
//   link: "https://project-link.com",
// },
