import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>naresh venkat</Card.Title>
        <Card.Text>
          given the funding for the books and the pens of the ngo
        </Card.Text>
        <Button variant="primary">naresh venkat</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;