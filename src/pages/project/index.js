import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  // wordleClone,
  // gpt3,
  // gericht,
  // huddle,
  // restCOuntry,
  colorGame,
  fitness,
  gogul,
  memory,
  watch,
  myConnect ,
  sound,
  myPortfolio,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Project Management Site',
    desc:
      'A site where team members can assign and give updates on project',
    stack: 'React Firebase',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/project-management-website',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://myconnect-site.web.app/',
    },
    imgUrl: myConnect,
  },
  {
    id: 2,
    name: 'Sounds_solo',
    desc: 'An ecommerce website with sanity',
    stack: 'Nextjs Sanity Stripe',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/nextjs-ecommerce-website',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://azeem-sound-ecommerce.vercel.app/',
    },
    imgUrl: sound,
  },
  {
    id: 3,
    name: 'W-waTch',
    desc: 'Turned a figma design into this beautiful ecommerce website. WIP',
    stack: 'React Firebase Figma',
    imgUrl: watch,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/W-waTch',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://w-watch.vercel.app/',
    },
  },
  {
    id: 4,
    name: 'Test Your Memory',
    desc: 'Find a match by flipping cards...',
    stack: 'HTML CSS JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/memory-game',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-memory-game-gamma-six.vercel.app/',
    },
    imgUrl: memory,
      // 'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  },

  {
    id: 5,
    name: 'Gogul 2.2',
    desc: 'A google clone using rapid api',
    stack: 'React Tailwind',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/gogul-2.2',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gogul-2-2.vercel.app/search',
    },
    imgUrl: gogul,
  },
  {
    id: 6,
    name: 'Be_Fit',
    desc: 'A gym website. Built using rapid api',
    stack: 'React Material-UI',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/react-fitness-website',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-fitness-website.vercel.app/',
    },
    imgUrl: fitness,
  },
  {
    id: 4,
    name: 'Color Game',
    desc: 'A fun hex color game',
    stack: 'HTML CSS JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/colorGame',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://color-game-nu.vercel.app/',
    },
    imgUrl: colorGame,
      // 'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  },
  {
    id: 2,
    name: 'Porfolio Website',
    desc: 'A Responsive Portfolio website',
    stack: 'Nextjs',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Muhammedabdulhazeem/portfolio-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://portfolio-project-neon.vercel.app/',
    },
    imgUrl: myPortfolio,
  },
]
