import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { LinkContainer } from "react-router-bootstrap";
// import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">
              Assignment 1
            </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;