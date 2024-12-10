import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg">
            <Navbar.Brand href="/" className="text-lg font-bold text-white">
                FitNest
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto space-x-4">
                    <Nav.Link as={Link} to="/" className="text-white hover:text-yellow-300 transition duration-300">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" className="text-white hover:text-yellow-300 transition duration-300">
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register" className="text-white hover:text-yellow-300 transition duration-300">
                        Register
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard" className="text-white hover:text-yellow-300 transition duration-300">
                        Dashboard
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
