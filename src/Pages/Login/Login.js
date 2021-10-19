import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/UseAuth';
import "./Login.css";

const Login = () => {
    const { login, error, signInUsingGoogle, handleName, handleEmail, handlePassword, handleLogin, handleRegister } = useAuth();
    return (
        <div className="login-container">
            <div>
                <Form className="container">
                    {login ? " " :
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>User name</Form.Label>
                                <Form.Control onBlur={handleName} type="text" placeholder="Enter your name" />
                            </Form.Group>
                        </div>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted" required>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleLogin} type="checkbox" label="Already a User?" />
                    </Form.Group>
                    <div className="middle mb-2">{error}</div>
                    <div className="middle">
                        <Button onClick={handleRegister} variant="primary" type="submit">
                            {login ? "Log In" : "Register"}
                        </Button>
                    </div>
                </Form>
                <br />
                <div className="middle">
                    <Button onClick={signInUsingGoogle} variant="primary" type="submit">
                        Google Login
                    </Button>
                </div>

                {/* <button onClick={signInUsingGoogle}>google</button> */}
            </div>
            <div>
                <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5375.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;