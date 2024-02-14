import Navbar from './componets/navBar/navBar.js';
import Intro from './componets/Intro/intro.js';
import About from './componets/About/about.js';
import Portfolio from './componets/portfolio/portfolio.js';
import Project from './componets/projects/project.js';
import ContactMe from './componets/ContactMe/contactMe.js';
import Footer from './componets/footer/footer.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Project />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
