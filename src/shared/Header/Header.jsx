import React from 'react';
import logo from '../../assets/logo.png'
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, } from 'react-bootstrap';


const Header = () => {
  
    return (
      <Container>
        <div className="text-center my-5">
          <img className="img-fluid" src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p className="text-secondary">
            {moment().format("dddd, MMMM D, YYYY")}
          </p>
        </div>
        <div className="d-flex bg-body-tertiary p-3">
          <Button variant="danger">Latest</Button>
          <Marquee speed={60}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            ipsum quod eaque inventore corporis, ea amet quisquam. Ducimus,
            aliquid libero.
          </Marquee>
        </div>
      </Container>
    );
};

export default Header;