

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Mission() {
  return (
    <Card className="text-center">
      <Card.Header><span> Mission</span></Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        <p>
  Our NGO is dedicated to empowering communities by providing quality education, ensuring child safety, advancing women empowerment, and promoting technological skills.
  We strive to create a safer, more educated, and empowered society equipped for the future.
</p>           </Card.Text>
        <Button href="/contact" variant="warning" size="lg" className="mt-3">Get Involved</Button>

      </Card.Body>
    </Card>
  );
}

export default Mission;

