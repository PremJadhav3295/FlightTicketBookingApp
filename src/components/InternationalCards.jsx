import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export function InternationalCards() {
  return (

<Row>
     <Col lg= {3}>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="./Images/i9.jpg" />
         <Card.Body>
            <Card.Title>Mumbai to New York</Card.Title>
            <Card.Text>
              Visit the "City of Dreams"!!..
              Fares starting at Rs. 37607*
            </Card.Text>
         </Card.Body>
        </Card>
   </Col>   

   <Col lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/i10.jpg" />
      <Card.Body>
        <Card.Title>Mumbai to Washington D.C.</Card.Title>
        <Card.Text>
          Visit the "Evergreen State!!"..
          Fares starting at Rs. 36,608*
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col lg= {3}>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="./Images/i11.jpg" />
         <Card.Body>
            <Card.Title>Mumbai to Chicago</Card.Title>
            <Card.Text>
              Visit the "Heart of America"!!..
              Fares starting at Rs. 37,604*
            </Card.Text>
         </Card.Body>
        </Card>
   </Col>   

   <Col lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/i13.webp" />
      <Card.Body>
        <Card.Title>Mumbai to Melbourne</Card.Title>
        <Card.Text>
          Visit the "Sporting Capital of India!!"..
          Fares starting at Rs. 47,799*
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
</Row>
  );
}