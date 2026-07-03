// Projects data - easily add, modify, or remove projects here
// Each project requires: id, title, description, image, technologies, link

export const projects = [
  {
    id: 1,
    title: 'ML Projects',
    description: 'Developed models for Polymer- and Inorganic Chemistry.',
    image:
      'https://plus.unsplash.com/premium_photo-1764692560001-ec7cd92b21ee?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //'https://media.istockphoto.com/id/1457951939/de/foto/k%C3%BCnstliche-intelligenz-gehirn-cpu-konzept.jpg?s=1024x1024&w=is&k=20&c=ZcGmAmEWzDxlqKYEKRensUeeZf4MZBEv7GUu7JQWmj4=',
    //'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['PyTorch', 'scikit-learn', 'JMP', 'RDKit'],
    link: '#',
  },
  {
    id: 2,
    title: 'Restaurant Website',
    description:
      'Full functional & responsive website with menu, ordering, and more features.',
    image: '/public/images/restaurant-italy.png',
    technologies: ['React', 'API', 'SPA', 'UX/UI'],
    link: 'https://github.com/osalago/littleLemon-capstone.git',
  },
  {
    id: 3,
    title: 'Quantumchemical Odor Prediction',
    description:
      'A full-featured online odor profile prediction platform with scent database & recipe input.',
    image: '/public/images/odorPrediction-v2.jpg',
    technologies: ['Py', 'JS', 'ML', 'backend', 'KNIME'],
    link: 'https://patents.google.com/patent/US20230360744A1/en',
  },
  {
    id: 4,
    title: 'Google Scholar',
    description:
      'View my publications, patents, and book-contribution on Google Scholar.',
    image: 'images/OS-logo-app-icon-v1.png',
    //'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    technologies: ['Cheminformatics', 'Chemistry', 'Science'],
    link: 'https://scholar.google.com/citations?user=4V-m6ZcAAAAJ&hl=de',
  },

  {
    id: 5,
    title: 'Online Games',
    description: 'Full functional online gaming platforms. More to come.',
    image: 'images/blackjack-gameplatform.png',
    //  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    technologies: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/osalago/blackjack-v2.git',
  },
  {
    id: 6,
    title: 'Vacation App',
    description:
      'Traveling with your RV made easy. Plan trips, find campgrounds, and track expenses. Coming soon..',
    image: '/public/images/vacation-image-1.jpg',
    technologies: ['React', 'API', 'Backend', 'UX/UI', 'Python'],
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
//
