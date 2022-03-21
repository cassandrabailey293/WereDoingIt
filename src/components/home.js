import ScrollableAnchor from "react-scrollable-anchor";
import background from "../img/florida-crossover.jpg";

function Home() {
  return (
    <div className="home-page">
      {/* <ScrollableAnchor id={"Home"}></ScrollableAnchor> */}
      <h6 className="home-text-1">Celebrating the marrage of</h6>
      <h1 className="home-text-2">Cassandra and Andrew</h1>
      <p className="home-text-location">09/03/2022 - Parker, Colorado</p>
    </div>
  );
}

export default Home;
