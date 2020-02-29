import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
} from 'reactstrap';
import GM from '../GM.png'

function Navigation() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "black" }} dark expand="md">
                <NavbarBrand href="/">
                    <img src={GM} style={{height: 40}}/>
                </NavbarBrand>
                <Nav className="mr-auto" navbar />
                <NavLink className="text-danger" href="/pages/signIn">Sign-in</NavLink>
            </Navbar>
        </div>
    );
}

export default Navigation;
