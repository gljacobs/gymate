import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css'

class Signup extends React.Component {

    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        verify: "",
        date: "",
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });        
    }

    handleSignup = () => {
        
    }

    render() {
        return (
            <div id="signup" className="container">
                <Card body id="sign-card" className="text-center">
                    <CardTitle tag="h2">Create an Account</CardTitle>
                    <Form>
                        <Row form>
                            <Col md={{ size: 3, offset: 3 }}>
                                <FormGroup>
                                    <Label for="sign-fname">First Name</Label>
                                    <Input type="text" name="fname" id="fname" placeholder="First Name" required value={this.state.fname} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="sign-lname">Last Name</Label>
                                    <Input type="text" name="lname" id="lname" placeholder="Last Name" required value={this.state.lname} onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="sign-email" name="email" id="sign-email" placeholder="Enter Valid Email" required value={this.state.email} onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={{ size: 3, offset: 3 }}>
                                <FormGroup>
                                    <Label for="sign-pass">Password</Label>
                                    <Input type="password" name="password" id="sign-pass" placeholder="New Password" required value={this.state.password} onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="verify" id="verify-pass" placeholder="Verify Password" required value={this.state.verify} onChange={this.handleChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="birthDate">Birthday</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="birthDate"
                                        placeholder="MM/DD/YYYY"
                                        value={this.state.date} onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>Sign Up</Button>
                    </Form>
                    <br />
                    <Link to="/">Return to Home</Link>
                </Card>
            </div>
        );
    }
}

export default Signup;