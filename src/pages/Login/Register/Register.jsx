import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const [succes, setSucces] = useState();
    const [error,setError] = useState();
    const [accepted, setAccepted] = useState(false)
    const {createUser} = useContext(AuthContext)
    const handleRegister = event =>{
        event.preventDefault();
        setSucces('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email,password,photo);
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            setSucces(createdUser)
        })
        .catch(error=>{
            setError(error.message)
        })

    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
      <div>
        <Container>
          <h2>Plese Register</h2>
          <Form onSubmit={handleRegister} className="w-25 mt-5 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Photo url"
                name="photo"
                required
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                name="accept"
                label={
                  <>
                    Accept <Link to="/terms">terms and conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
              Register
            </Button>
            <br />
            <Form.Text className="text-muted text-secondary">
              Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
            <br />
            <Form.Text className="text-success fw-bold">
              <p>{succes}</p>
            </Form.Text>
            <Form.Text className="text-danger fw-bold">
              <p>{error}</p>
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
};

export default Register;