import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaOrcid } from "react-icons/fa6";
import { useLogoutMutation } from "../slices/usersApiSlice";     /* for backend httprequest destroy cookie */
import { logout } from "../slices/authSlice";                    /* for state and localstorage */

const Header = () => {

  const { userInfo } = useSelector((state) => state.auth)
  console.log(userInfo)

const [ logoutApiCall ] = useLogoutMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async() => {
        try {
          await logoutApiCall().unwrap()  /* destroy cookie */
         dispatch(logout())               /* only local! */
         navigate("/")
      } catch (error) {
               console.log(error)
         }
      }
 

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
              {userInfo ? 
              (
                <>
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item className="profile text-black fs-6 bg-transparent hover-shadow">
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item className="logout text-black fs-6 bg-transparent" onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                </>
              ) : 
              (<>
              
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
              </>)
            }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
