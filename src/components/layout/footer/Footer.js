import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
    <Row className='my-4 mx-auto'>
        <Col className='text-center'>
        <h5>Copyright by &copy; The Ibex CRM {currentYear}</h5>
        </Col>
    </Row>
   
    </footer>
  );
};

export default Footer;

