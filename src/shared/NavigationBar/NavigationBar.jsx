import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const hanleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" className="my-3">
          <Container>
            <Navbar.Brand className="text-primary" href="#home">
              Dragon News
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">
                  <Link to="/categories/0">Home</Link>
                </Nav.Link>
                <Nav.Link href="/about">
                  <Link>About</Link>
                </Nav.Link>
                <Nav.Link href="/career">
                  <Link>Career</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <Nav.Link href="#deets">
                    {user && (
                      <FaUserCircle
                        style={{ "font-size": "2rem" }}
                      ></FaUserCircle>
                    )}
                  </Nav.Link>
                )}
                <Nav.Link eventKey={2} href="#memes">
                  {user ? (
                    <Button onClick={hanleLogOut} variant="dark">Logout</Button>
                  ) : (
                    <Link to="/login">
                      <Button variant="dark">Login</Button>
                    </Link>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;