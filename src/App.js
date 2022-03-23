import Home from "./components/home";
import Registry from "./components/registry";
import OurStory from "./components/our-story";
import Info from "./components/info";
import RSVP from "./components/rsvp";

import "rsuite/dist/styles/rsuite-default.css";
import "./fonts/Magnaline.ttf";

function App() {
  return (
    <div>
      <Home />
      <OurStory />
      <Info />
      <Registry />
      <RSVP />
    </div>
  );
}

export default App;
