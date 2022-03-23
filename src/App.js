import NavigationBar from "./components/nav-bar";
import Home from "./components/home";
import Registry from "./components/registry";
import OurStory from "./components/our-story";
import Info from "./components/info";
import RSVP from "./components/rsvp";

import { Affix } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./fonts/Magnaline.ttf";

function App() {
  return (
    <div>
      <Affix>
        <NavigationBar />
      </Affix>
      <Home />
      <OurStory />
      <Info />
      <Registry />
      <RSVP />
    </div>
  );
}

export default App;
