import React from "react";
import { Col, Row, Container } from "../../Components/Grid";

class SignUp extends React.Component {

    render() {
        return (
            <Container>
                <form class="box">
                    <h1>Sign Up</h1>
                    <input type="text" name="" placeholder="Username" />
                    <input type="password" name="" placeholder="Password" />
                    <div className="input-group">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input filebtn"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <input type="submit" name="" value="Sign Up" />
                </form>
                <div className="form-group">
                   
                </div>
            </Container>
        );
    }
}

export default SignUp;


