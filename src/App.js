import Home from "./components/home";
import Registry from "./components/registry";
import OurStory from "./components/our-story";
import Info from "./components/info";
import RSVP from "./components/rsvp";
import SizeHelper from "./components/size-helper";

import "rsuite/dist/styles/rsuite-default.css";
import "./index.css";
import "./fonts/font.woff";
import "./fonts/font.woff2";

function App() {
  return (
    <div>
      <SizeHelper>
        <Home />
        <OurStory />
        <Info />
        <Registry />
        <RSVP />
      </SizeHelper>
    </div>
  );
}

export default App;
