import { Nav } from "rsuite";

//sticky to top of page
const NavBar = () => {
  return (
    <Nav justified>
      <Nav.Item href="#Home" active>
        Home
      </Nav.Item>
      <Nav.Item>Our Story</Nav.Item>
      <Nav.Item>Info</Nav.Item>
      <Nav.Item>RSVP</Nav.Item>
      <Nav.Item href="#Contact">Contact</Nav.Item>
    </Nav>
  );
};

export default NavBar;
