import PortfolioLogo from '../assets/images/portfolio.png';
import GameLogo from '../assets/images/game-logo.jpg';
import BurgerLogo from '../assets/images/burger-logo.png';
import COVIDLogo from '../assets/images/covid101-logo.jpg';
import RNGOLogo from '../assets/images/rngo-logo.png';

const SreeAgastyaPeethamApp = {
    appID: 0,
    name: 'Sree Agastya Peetham',
    status: 'In progress',
    published: 'Jul 12, 2020',
    description: 'This is my first live website. Learn about Shri Swami Sugunananda Gayathri and his divinity!',
    languages: 'React.js, JavaScript, HTML5, CSS3',
    appLink: 'http://www.agastyapeetam.org/',
    githubLink: 'https://github.com/nifty-coder/agastya-peetam/',
    appLogo: RNGOLogo
};

const PortfolioApp = {
    appID: 1,
    name: "Surya Kasibhatla's Portfolio",
    status: 'Completed',
    published: 'May 2, 2020',
    description: 'This react application is about me.',
    languages: 'React.js, HTML5, CSS3',
    appLink: '/',
    githubLink: 'https://github.com/nifty-coder/my-portfolio-public/',
    appLogo: PortfolioLogo
};

const COVIDApp = {
    appID: 2,
    name: 'COVID 101',
    status: 'Completed',
    published: 'April 17, 2020',
    description: 'This react application covers the core basics of coronavirus. It covers symptoms, precautions, time effectiveness, and the live stats.',
    languages: 'React.js, HTML5, CSS3',
    appLink: 'https://covid101-by-suryak-us.web.app/',
    githubLink: 'https://github.com/nifty-coder/covid-19-dos-and-donts/',
    appLogo: COVIDLogo
};

const RBBApp = {
    appID: 3,
    name: 'Royal Burger Bell (RBB)',
    status: 'Need to add few features',
    published: 'February 29, 2020',
    description: 'This is a react E-Commerce replica. Users can signup/login, build a customized burger, and order it.',
    languages: 'React.js, Redux, JavaScript, HTML5, CSS3',
    appLink: 'https://mcburger-reactjs-app.firebaseapp.com/',
    githubLink: 'https://github.com/nifty-coder/royal-burger-bell/',
    appLogo: BurgerLogo
};

const MathManiaGame = {
    appID: 6,
    name: 'Math Mania Game',
    status: 'Completed',
    published: 'December 14, 2017',
    description: 'This is a math game for grades Pre-K to 3rd and higher.',
    languages: 'CSS3, JavaScript, HTML5',
    appLink: 'http://saketsmathmania.azurewebsites.net/',
    githubLink: 'https://github.com/nifty-coder/MathMania/',
    appLogo: GameLogo
};

let projectsDB = [MathManiaGame, RBBApp, COVIDApp, PortfolioApp, SreeAgastyaPeethamApp]

export default projectsDB;