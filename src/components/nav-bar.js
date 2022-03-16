import { Nav } from "rsuite";

const NavBar = () => {
  return (
    <Nav justified>
      <Nav.Item active>Home</Nav.Item>
      <Nav.Item>Our Story</Nav.Item>
      <Nav.Item>Info</Nav.Item>
      <Nav.Item>RSVP</Nav.Item>
      <Nav.Item>Contact</Nav.Item>
    </Nav>
  );
};

export default NavBar;
