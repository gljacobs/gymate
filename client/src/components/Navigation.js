import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
} from 'reactstrap';
import GM from '../GM.png'

function Navigation() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "black" }} dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={GM} style={{ height: 45 }} />
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar />
                    <NavLink className="text-danger" style={{ fontWeight: "bold" }} href="/pages/signIn">Sign-in</NavLink>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
