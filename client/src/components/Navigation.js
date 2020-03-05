import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Container,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import GM from '../GM.png'

function Navigation() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "black" }} dark expand="md">
                <Container>
                    <NavbarBrand>
                        <Link to="/">
                            <img src={GM} style={{ height: 45 }} />
                        </Link>
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar />
                    <Form className="navform" inline>
                        <FormGroup className="logform mb-2 mr-sm-2 mb-sm-0">
                            <Label for="loginEmail" className="mr-sm-2 text-danger">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup className="logform mb-2 mr-sm-2 mb-sm-0">
                            <Label for="loginPass" className="mr-sm-2 text-danger">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" required/>
                        </FormGroup>
                        <Button className="btn-danger">Login</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
