import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BasicExample from './card';

function Collab() {
  // Create an array of BasicExample components
  const examples = Array(15).fill(<BasicExample />);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Collaborators</h2>
      <Row>
        {examples.map((example, index) => (
          <Col md={4} key={index} className="mb-4">
            {example}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Collab;
