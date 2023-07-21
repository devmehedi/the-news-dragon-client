import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
      <div className="bg-black text-white my-4">
        <Container>
          <div className="row">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </Container>
      </div>
    );
};

export default Footer;