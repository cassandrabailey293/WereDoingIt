import Navbar from "./components/nav-bar";
import Home from "./components/home";
import Contact from "./components/contact";
import OurStory from "./components/our-story";
import Info from "./components/info";
import RSVP from "./components/rsvp";

import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <OurStory />
      <Info />
      <RSVP />
      <Contact />
    </div>
  );
}

export default App;
