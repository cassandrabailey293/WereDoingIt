import { Navbar, Nav, Icon } from "rsuite";
import { goToTop, goToAnchor, configureAnchors } from "react-scrollable-anchor";

const DesktopNav = (
  <Navbar style={{ background: "black", opacity: ".4" }}>
    <Nav justified style={{ width: "100%" }}>
      <Nav.Item onSelect={() => goToAnchor("Home")}>Home</Nav.Item>
      <Nav.Item onSelect={() => goToAnchor("OurStory")}>Our Story</Nav.Item>
      <Nav.Item onSelect={() => goToAnchor("Info")}>Info</Nav.Item>
      <Nav.Item onSelect={() => goToAnchor("Registry")}>Registry</Nav.Item>
      <Nav.Item onSelect={() => goToAnchor("RSVP")}>RSVP</Nav.Item>
    </Nav>
  </Navbar>
);

const MobileNav = (
  <Navbar style={{ background: "black", opacity: ".4", textAlign: "center" }}>
    <Nav justified style={{ width: "100%" }}>
      <Nav.Item
        onSelect={() => goToTop()}
        icon={<Icon icon="home" />}
      ></Nav.Item>
      <Nav.Item
        onSelect={() => goToAnchor("OurStory")}
        icon={<Icon icon="heart" />}
      ></Nav.Item>
      <Nav.Item
        onSelect={() => goToAnchor("Info")}
        icon={<Icon icon="info" />}
      ></Nav.Item>
      <Nav.Item
        onSelect={() => goToAnchor("Registry")}
        icon={<Icon icon="tags" />}
      ></Nav.Item>
      <Nav.Item
        onSelect={() => goToAnchor("RSVP")}
        // icon={<Icon icon="calendar-check-o" />}
      >
        RSVP
      </Nav.Item>
    </Nav>
  </Navbar>
);

const NavigationBar = (props) => {
  console.log(props);
  configureAnchors({ offset: -50, scrollDuration: 1000 });
  return props.isDesktopOrLaptop ? DesktopNav : MobileNav;
};

export default NavigationBar;
