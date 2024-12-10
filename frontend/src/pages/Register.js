import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles.css'; // Ensure the global CSS is imported

const Register = () => {
    return (
        <div className="register-container">
            <h2 className="register-heading">Register</h2>
            <form className="register-form">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" className="register-input" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" className="register-input" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" className="register-input" />
                </Form.Group>
                <Button variant="primary" type="submit" className="register-button">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Register;
