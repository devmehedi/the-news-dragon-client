import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import bg from '../../assets/bg.png';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
const RightNav = () => {
    return (
      <div>
        <div>
          <h2>Login With</h2>
          <Button className="w-75 p-2 my-2" variant="outline-primary">
            <FaGoogle className="me-2" />
            Login with Google
          </Button>
          <Button className="w-75 p-2 my-2" variant="outline-primary">
            <FaGithub className="me-2" />
            Login with GitHub
          </Button>
        </div>
        <div>
          <h4>Find us on</h4>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook className="me-2 text-primary" />
              Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter className="me-2 text-primary" />
              Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram className="me-2 text-danger" />
              Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone></QZone>
        <div className="position-relative text-center">
          <img className='w-100 rounded' src={bg} alt="" />
          <div className="position-absolute top-0 start-0 w-100 p-5 text-white">
            <h3>Create an Amazing Newspaper</h3>
            <p className='my-5'>
              <small>
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </small>
            </p>
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    );
};

export default RightNav;