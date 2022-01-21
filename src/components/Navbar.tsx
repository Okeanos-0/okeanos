import React, { FC } from 'react';

import { Nav, Navbar } from 'react-bootstrap';

const _Navbar: FC = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand
                    href="/"
                    style={{ marginLeft: '20px', marginBottom: '5px' }}
                >
                    Home
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default _Navbar;
