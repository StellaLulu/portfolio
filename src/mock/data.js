import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Stella Chan',
  subtitle: "I'm a Software Engineer in Singapore",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'A Research Engineer at Singapore Institute of Technology. Graduated from Graduate Diploma in System Analysis at National University of Singapore in 2019. With 1.5 years working experience as a Business Analyst at DBS in Hong Kong and worked as Data Automation Engineer intern at Infineon.',
  paragraphTwo:
    'A data-driven person who enjoys data crunching and believes there’s a wealth of information out there that people can make use of it to improve life and business.',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'My Blog',
    info:
      'A blog to share the fragments of what I am learning, a platform to practise how to be a good writer',
    // info2: '',
    url: 'https://nordicfox.netlify.app/',
    repo: 'https://github.com/stellactyy/blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Homepage2.png',
    title: 'Face recogniztion Application',
    info:
      'A React App can detect face using Clarifai API to locate a face in a image, as well as a PostgreSQL database to keep track of the number of entries a user had made.',
    info2: 'Front End: react.js; Back End: Node.js / Express.js / PostgreSQL',
    url: '',
    repo: 'https://github.com/stellactyy/face-detection-website.git', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stellactyy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stella-chan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/stellactyy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
