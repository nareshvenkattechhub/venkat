// src/home.js
import { Container, Navbar, Nav, Button, Form, FormControl, Row, Col } from 'react-bootstrap';

import BrandExample from './brand'

import BasicExample from './card';
import Carosel from './carou';

import Sup from './supa';


import Mission from './mission';

function Naresh() {
    return (
        <div>
        {/* Header */}

        <Container>
        
        <Carosel/>
        </Container>


        <Container>

        <Mission/>
        </Container>
  

       <sup/>

      


       {/* About Us Section */}
       <section id="about" className="my-5">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">We are dedicated to improving lives through education, health initiatives, and women empowerment programs.</p>
        </Container>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="my-5">
        <Container>
          <h2 className="text-center mb-4">Our Initiatives</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <h3>Education</h3>
              <p>Providing quality education to underprivileged children to help them achieve their dreams.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <h3>Health</h3>
              <p>Ensuring access to basic healthcare services for all, especially in rural areas.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <h3>Women Empowerment</h3>
              <p>Empowering women with skills and opportunities to lead better lives.</p>
            </Col>
          </Row>
        </Container>
      </section>


      




 {/* Events Section */}
      <section id="events" className="my-5">
        <Container>
          <h2 className="text-center mb-4">Latest Events</h2>
          <p className="text-center">Check out our recent and upcoming events aimed at making a difference in the community.</p>
        </Container>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="my-5">
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} required />
            </Form.Group>
            <Button variant="warning" type="submit">Submit</Button>
          </Form>
        </Container>
      </section>


      

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2024 Coal star. All rights reserved.</p>
          <div>
            <a href="#" className="text-white mx-2">Facebook</a>
            <a href="#" className="text-white mx-2">Twitter</a>
            <a href="#" className="text-white mx-2">Instagram</a>
          </div>
        </Container>
      </footer>


      </div>
    );
  }
  
  export default Naresh;
  