import React from "react";
import { Paper, Button } from '@material-ui/core';
import { Container, Row } from 'react-bootstrap';

//Login page. 
//this will not validate any user information 
//by clicking on the submit button you will be navigated to the List page
function Login() {

    const checkLogin = () => {

    }

    return (
        <div>
            <Paper style={{
                maxHeight: 935,
                minWidth: '650px',
            }}>
                <Container style={{ maxWidth: 200, marginLeft: 600, marginTop: 100, backgroundColor: '#f1f1f1', padding: 10, }}>
                    <Row>
                        <h1>Login</h1>
                    </Row>
                    <form action="/list" method="get">
                        <Row>
                            <input
                                type="text"
                                name="Username"
                                placeholder="Username"

                            />
                        </Row>
                        <Row>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                        </Row>
                        <Row>

                            <div style={{ padding: 20 }}>
                                <Button variant="contained" color="primary"
                                    type="submit"
                                    onClick={checkLogin}>
                                    Submit
                            </Button>
                            </div>

                        </Row>

                    </form>
                </Container>

            </Paper>

        </div>
    );
}

export default Login;