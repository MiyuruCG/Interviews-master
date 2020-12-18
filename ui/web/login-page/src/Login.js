import React from "react";
import { Paper } from '@material-ui/core';
import { Image, Container, Col, Row, } from 'react-bootstrap';

function Login() {
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
                            <button
                                type="submit"
                            >Submit</button>
                        </Row>

                    </form>
                </Container>

            </Paper>

        </div>
    );
}

export default Login;