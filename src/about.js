
import { Container, Row, Col, Card } from 'react-bootstrap';


function About() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center mb-4">About Us</h2>
            <Card className="bg-light shadow-sm">
              <Card.Body>
                <h4>Welcome to Coal Star</h4>
                <p>
                  We are a pioneering organization dedicated to leveraging the power of artificial intelligence (AI) to address some of the world’s most pressing challenges. Our mission is to drive impactful innovations across three critical sectors: healthcare, agriculture, and defense.
                </p>
                <h5>Healthcare:</h5>
                <p>
                  We are at the forefront of integrating AI into healthcare to revolutionize diagnostics, personalize treatment plans, and enhance patient care. Our projects aim to develop advanced AI tools that improve early detection of diseases, optimize treatment protocols, and make healthcare more accessible and efficient for underserved communities.
                </p>
                <h5>Agriculture:</h5>
                <p>
                  In the realm of agriculture, we harness AI to promote sustainable farming practices, increase crop yields, and ensure food security. Our initiatives focus on developing AI-driven solutions for precision agriculture, pest detection, and resource management, empowering farmers with the tools they need to thrive in a rapidly changing environment.
                </p>
                <h5>Defense:</h5>
                <p>
                  Our work in defense leverages AI to strengthen national security and support defense operations. We develop innovative AI applications for surveillance, threat detection, and strategic planning, contributing to the safety and resilience of communities and nations.
                </p>
                <p>
                  At [Your NGO’s Name], we believe in the transformative potential of AI to create a better world. We are committed to ethical AI practices, collaboration with stakeholders, and fostering a culture of innovation. Join us in our journey to harness AI for a healthier, more sustainable, and secure future.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default About;