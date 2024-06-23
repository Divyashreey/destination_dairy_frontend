// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>Subscribe NewsLetter & Get Lastest News</h3>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutUs">About</a></li>
              <li><a href="/contactUs">Contact</a></li>
              <li><a href="/explore">Explore</a></li>
              <li><a href="/contactUs">Manage your Booking</a></li></ul>
          </Col>
          <Col md="4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/category/tech">Tech</a></li>
              <li><a href="/category/lifestyle">Lifestyle</a></li>
              <li><a href="/category/lifestyle">How to</a></li>
              <li><a href="/category/lifestyle">Features</a></li>
              <li><a href="/category/travel">Travel</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md="12" className="text-center">
            <p>&copy; 2023 Destination Diaries. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
