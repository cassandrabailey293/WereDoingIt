import ScrollableAnchor from "react-scrollable-anchor";
import NavigationBar from "./nav-bar";
import { Affix } from "rsuite";

function Home() {
  return (
    <div className="home-page">
      <Affix>
        <NavigationBar />
      </Affix>
      <p className="home-text-1">CELEBRATING THE MARRIAGE OF</p>
      <h1 className="home-text-2">Cassandra and Andrew</h1>
      <p className="home-text-location">09/03/2022 - PARKER, COLORADO</p>
    </div>
  );
}

export default Home;
