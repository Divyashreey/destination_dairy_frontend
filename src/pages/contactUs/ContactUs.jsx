import React, { useState } from 'react';
import './contactUs.css'; 
import emailjs from 'emailjs-com'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_6wde5dm', 'template_5zm7kko', e.target, 'HZWHMAGXrltuIc3-H')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={5} className="img-container">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D"  // Replace with the actual path to your image file
            alt="Contact Us"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h1>Contact Us</h1>
          <p style={{color:"black"}}>
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
            reach out to us.
          </p>
          <p style={{color:"black"}}>
            You can contact us via email at{' '}
            <a href="mailto:contact@destinationdiaries.com" style={{color:"#6A6C6D"}}>contact@destinationdiaries.com</a> or by filling out the form below.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name..."
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject..."
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
