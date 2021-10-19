import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../Hooks/UseAuth';
import './Header.css';

const Header = () => {
    const LogOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    {/* Logo & Name */}
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/512/3004/3004451.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '} MediCare</Navbar.Brand>
                    {/* Logo & Name */}

                    {/* Responsive Toggle Navbar */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#about">Home</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/home#featured-services">Top Services</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Doctors" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/home#featured-doctors">Top Doctors</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/doctors">Our Team</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            {user?.email ?
                                <Navbar.Text>
                                    Welcome! <a href="#login">{user?.displayName}</a>
                                </Navbar.Text> :
                                <Navbar.Text>Have an account?</Navbar.Text>
                            }
                            {user?.email ?
                                <Button onClick={logout} variant="light ms-2">Log out {LogOutIcon}</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    {/* Responsive Toggle Navbar */}

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;