import ProjectPage from './ProjectPage';
import OKMR from './ProjectPage/OKMR';
import FolderExplorer from './FolderExplorer';
import PhotoViewer from './PhotoViewer';
import PDFViewer from './PDFViewer';
import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import email from 'assets/windowsIcons/887(32x32).png';
import resumePdf from 'assets/pdfs/resume.pdf';
import cutefortisdog from 'assets/tomipics/cutefortis.jpg';
import litmuslastday from 'assets/tomipics/litmuslastday.jpg';
import folder from 'assets/windowsIcons/318(48x48).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  {
    component: Notepad,
    header: {
      title: 'Welcome!!!!!',
      icon: notepadLarge,
    },
    injectProps: {
      initialText: `    
Hiiii im tomi :) <3 <3 <3

i love
  > electronics engineering
  > running the IEEE
  > playing the bass guitar
  > snowboarding
  > community

plz click the desktop icons to learn more abt me 

as i have more freetime i will make the site more integrated <3 
for now plz check out my resume!

credits to https://github.com/ShizukuIchi/winXP for the backbone of this webapp!!!! cuz i am not a graphic designer Lol... </3
`,
    },
    defaultSize: {
      width: 670,
      height: 500,
    },
    defaultOffset: {
      x: 500,
      y: 100,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
  /*
  {
    component: InternetExplorer,
    header: {
      title: 'Internet Explorer',
      icon: iePaper,
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 130,
      y: 20,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Minesweeper,
    header: {
      title: 'Minesweeper',
      icon: mine,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 180,
      y: 170,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winamp,
      invisible: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  }, */
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
    },
    defaultSize: {
      width: 660,
      height: 550,
    },
    defaultOffset: {
      x: 250,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  // i wanna change this to 3 icons: project portfolio, resume, personal life
  {
    id: 0,
    icon: computerLarge,
    title: 'ECE Portfolio',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 1,
    icon: email,
    title: 'Resume',
    component: PDFViewer,
    isFocus: false,
  },
  {
    id: 2,
    icon: paintLarge,
    title: 'Personal Life',
    component: FolderExplorer,
    isFocus: false,
  },
  /*{
    id: 1,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 4,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },*/
];

// THIS IS WHERE PRESETS ARE STORED.........---------------------
export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'PDF Viewer': {
    header: {
      icon: iePaper,
      title: 'Resume - Internet Explorer',
    },
    component: PDFViewer,
    defaultSize: {
      width: 750,
      height: 600,
    },
    defaultOffset: {
      x: 150,
      y: 40,
    },
    injectProps: {
      docUrl: resumePdf,
      docTitle: 'Resume.pdf',
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  // PHOTO PRESETS ----------------------------------------------------------
  // fortis dog photo
  cutefortisdog: {
    header: {
      icon: paint, // imported from assets/windowsIcons
      title: 'Photos',
    },
    component: PhotoViewer,
    injectProps: {
      imgUrl: cutefortisdog,
      imgTitle: 'cutefortis.jpg',
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 160,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true, // true = can open multiple copies; false = single window
  },
  // litmus office photo
  litmuslastday: {
    header: {
      icon: paint, // imported from assets/windowsIcons
      title: 'Photos',
    },
    component: PhotoViewer,
    injectProps: {
      imgUrl: litmuslastday,
      imgTitle: 'litmuslastday.jpg',
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 160,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true, // true = can open multiple copies; false = single window
  },
  OKMR: {
    header: {
      title: 'OKMR.html - Internet Explorer',
      icon: iePaper,
    },
    component: ProjectPage,
    injectProps: {
      fileName: 'OKMR.html',
      ContentComponent: OKMR,
    },
    defaultSize: {
      width: 780,
      height: 600,
    },
    defaultOffset: {
      x: 180,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'Personal Life': {
    header: { title: 'Personal Life', icon: folder },
    component: FolderExplorer,
    injectProps: {
      title: 'Hobbies (folder in-progress)',
      items: [
        { name: 'Bass Guitar', icon: folder, app: 'PhotoGallery' },
        {
          name: 'Snowboarding',
          icon: folder,
          url: 'https://youtu.be/9dSKe6M3BNM?si=7uUrdSGxVsld1bzp',
        },
        { name: 'Fishing', icon: folder, url: 'https://github.com/...' },
      ],
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

export {
  InternetExplorer,
  Minesweeper,
  ErrorBox,
  MyComputer,
  Notepad,
  Winamp,
  PDFViewer,
  PhotoViewer as PhotoGallery,
  FolderExplorer,
};
