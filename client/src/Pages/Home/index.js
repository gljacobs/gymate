import React from 'react';
import { Col, Row, Container } from "../../Components/Grid";
import { Link } from 'react-router-dom'

class Home extends React.Component {

    render() {
        return (
            <Container>

                <form class="box">
                    <h1>Login</h1>
                    <input type="text" name="" placeholder="Username" />
                    <input type="password" name="" placeholder="Password" />
                    <input type="submit" name="" value="Login" />
                    <Link to="/Signup"><span className="signuplink">No account? Sign up here</span></Link>
                </form>
                
            </Container>
        )
    }
}

export default Home