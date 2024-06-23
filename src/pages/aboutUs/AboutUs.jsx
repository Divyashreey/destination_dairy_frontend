// AboutUs.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './aboutUs.css'; // Import the stylesheet

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p style={{color:"black"}}>
          Welcome to Destination Diaries, where every journey is an adventure and every destination is a story waiting to be told.
         We are passionate explorers, storytellers, and wanderlust enthusiasts dedicated to sharing the magic of travel with the world.
         Whether you're a seasoned globetrotter or a first-time traveler, Destination Diaries is your companion on the road less traveled. Join us as we explore, learn, and share the beauty of the world, one adventure at a time.
         <h3>Thank you for being a part of our journey.</h3>
         <h4> Happy travels!</h4> 

    Destination Diaries Team
         </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Team Member 1"
            />
            <Card.Body>
              <Card.Title>Sarah</Card.Title>
              <Card.Text style={{color:"black"}} >

<h3><i>Feedback:</i></h3>
Sarah navigated the blog effortlessly, finding engaging travel narratives, practical tips, and stunning photography. She appreciated the detailed guides on hidden gems and local experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Team Member 2"
            />
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Text style={{color:"black"}}>
              <h3><i>Feedback:</i></h3>
              The app was easy to navigate, and I quickly figured out how to read blog posts and leave comments. It's straightforward, and I appreciate that. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Team Member 3"
            />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
              <Card.Text style={{color:"black"}}>
              <h3><i>Feedback:</i></h3>
              it would be great to see more advanced editing features. Managing multiple drafts and scheduling posts was seamless
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
