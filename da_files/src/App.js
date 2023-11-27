import Nav from './Components/nav';
import Page1 from './Components/page1';
import './App.css';
import Timer from './Components/timer';
import socials from './Components/socials';
import Projects from './Components/projects';
import Gallery from './Components/gallery';
import Team from './Components/team';
import Footer from './Components/footer';
import Socials from './Components/socials';

function App() {
  return (
    <div className="App">
 
    <Timer />
    <Nav />
    <Socials />
    <Page1 />
    <Projects />
    <Team />
    <Gallery />
    <Footer />
    </div>
  );
}

export default App;
