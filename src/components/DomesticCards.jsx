
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export function DomesticCards() {
  return (
<Row>
     <Col lg= {3}>
        <Card style={{ width: '18rem' }}>
          
         <Card.Img variant="top" src="./Images/i8.jpg" />
         <Card.Body>
            <Card.Title>Hyderabad to Banglore</Card.Title>
            <Card.Text>
              Visit the "Garden city of India"!!..
              Fares starting at Rs. 2898*
            </Card.Text>
         </Card.Body>
        </Card>
   </Col>   

   <Col lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/i7.jpg" />
      <Card.Body>
        <Card.Title>Mumbai to Goa</Card.Title>
        <Card.Text>
          Visit the "Rome of East!!"..
          Fares starting at Rs. 1799*
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

     <Col lg= {3}>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="./Images/i3.jpg" />
         <Card.Body>
            <Card.Title>New Delhi to Amritsar</Card.Title>
            <Card.Text>
              Visit the "Golden City of India"!!..
              Fares starting at Rs. 2041*
            </Card.Text>
         </Card.Body>
        </Card>
   </Col>   

   <Col lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/i4.jpg" />
      <Card.Body>
        <Card.Title>New Delhi to Chennai</Card.Title>
        <Card.Text>
          Visit the "Detroit of India!!"..
          Fares starting at Rs. 2799*
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
 </Row>
  );
  }
