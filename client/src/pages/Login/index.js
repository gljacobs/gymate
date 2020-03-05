import React from 'react';
import {
    Card, Button, CardText,
    CardTitle
} from 'reactstrap';
import './style.css';
import logo from '../../PERSON.png'

function Login() {
    return (
        <div id="login" className="container">
            <Card body id="log-card" className="text-center text-light">
                <CardText><img src={logo}/></CardText>
                <CardTitle tag="h1">Commit to be Fit.</CardTitle>
                <Button className="btn-danger" size="lg">Sign Up</Button>
            </Card>
        </div>
    );
}

export default Login;