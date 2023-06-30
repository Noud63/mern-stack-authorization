import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { FaOrcid } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <Navbar className="header" style={{ background: 'rgba(102, 126, 234, 1)'}} expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold fs-2 d-flex align-items-center"><FaOrcid/>&nbsp;M E R N - A U T H</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaSignInAlt /> Sign In
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
