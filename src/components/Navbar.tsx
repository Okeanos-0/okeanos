import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';

const _Navbar: FC = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand
                    style={{ marginLeft: '20px', marginBottom: '5px' }}
                >
                    <Link to="/" className="navbar-brand">
                        Home
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default _Navbar;
