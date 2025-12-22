import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Services } from "./components/services.js";
import { Projects } from "./components/projects.js";
import { ProjectCard } from "./components/projectcard.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";
import { ArrowUp } from "./components/arrowup.js";

//select the root element
const root = document.getElementById('root');

const projectsData = [
    { title: 'TABO-AN', description: 'Technopreneur Application for Business Operation of Anahawnon.', image: './assets/img/tabo-an.png', link: 'https://taboan.infinityfreeapp.com/' },
    { title: 'CHRISTMAS COUNTDOWN TIMER', description: 'Christmas Countdown webpage built using HTML, Bootstrap, and TypeScript.', image: './assets/img/christmas-countdown.png', link: 'https://iamkramztech.github.io/Christmas-Countdown/' },
    // ... more projects
];
// Function to render the entire page layout
function RenderPage() {
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', Navbar());

    // Insert main content sections (you'd add more here)
    root.insertAdjacentHTML('beforeend', Hero());
    root.insertAdjacentHTML('beforeend', About());
    root.insertAdjacentHTML('beforeend', Services());
    root.insertAdjacentHTML('beforeend', Projects());
     // Select the projects section and render cards
    const projectsSection = document.querySelector('#projects');
    const projectsRow = document.createElement('div');
    projectsRow.classList.add('row');

    projectsData.forEach(project => {
        projectsRow.insertAdjacentHTML('beforeend', ProjectCard(project));
    });
    projectsSection.appendChild(projectsRow);
   
    root.insertAdjacentHTML('beforeend', Contact());
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', Footer());
    document.body.insertAdjacentHTML('beforeend', ArrowUp());
}

// Initialize the page
RenderPage()