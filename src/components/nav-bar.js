import { Navbar, Nav } from "rsuite";
import { goToAnchor, configureAnchors } from "react-scrollable-anchor";

const NavigationBar = () => {
  configureAnchors({ offset: -50, scrollDuration: 1000 });
  return (
    <Navbar style={{ background: "black", opacity: ".4" }}>
      <Nav justified style={{ width: "100%" }}>
        <Nav.Item onSelect={() => goToAnchor("Home")}>Home</Nav.Item>
        <Nav.Item onSelect={() => goToAnchor("OurStory")}>Our Story</Nav.Item>
        <Nav.Item onSelect={() => goToAnchor("Info")}>Info</Nav.Item>
        <Nav.Item onSelect={() => goToAnchor("RSVP")}>RSVP</Nav.Item>
        <Nav.Item onSelect={() => goToAnchor("Contact")}>Contact</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
