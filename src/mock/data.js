import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anton Kristiono', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anton Kristiono',
  subtitle: "I'm Software Engginer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'an.png',
  paragraphOne: " Hello my name is Anton Kristiono, i am a software engineer. For now I am working on various web applications. Therefore I try to optimaze Javascript for Front End and Beck End. Of course im interested in serverless and jamstack",
  paragraphTwo: "I'm currently interested in learning Rust, because over the years Rust has been the most loved on stackoverflow, and several articles say if you want to become a better programmer learn Rust.",
  paragraphThree: '-',
  resume: 'https://my.indeed.com/p/antonk-9qzcd41/preview', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stt-salatiga.png',
    title: 'Project Landing STT Universtiy Project',
    info: ' This Projects just for information University, Im choose use Static Site Generator Gatsby.JS. Is best choice because for now the university not use dynamic data. for hosting im use Netlify free tier 100Gb/Month is enough for landing page',
    info2: '',
    url: 'https://sttsalatiga.netlify.app/',
    repo: 'https://github.com/sttsalatiga/landing', // if no repo, the button will not show up
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
  email: 'antonkristiono47@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AntonKristiono',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/antonkristiono',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AntonKristiono',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
