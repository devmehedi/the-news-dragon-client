import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const [succes, setSucces] = useState();
    const [error, setError] = useState();
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/categories/0";

    const handleLogin = event =>{
        event.preventDefault();
        setSucces('')
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSucces('User Loged In Successfully');
            navigate(from, { replace: true });
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
      <Container>
        <Form onSubmit={handleLogin} className="w-25 mt-5 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-muted text-secondary">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-success fw-bold">{succes}</Form.Text>
          <Form.Text className="text-danger fw-bold">{error}</Form.Text>
        </Form>
      </Container>
    );
};

export default Login;