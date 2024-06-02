import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
export function About(){
    return(
        <Container>
                 <br/>
                <h1>About Us</h1>
         
            <p>AeroEase.com is a leading global online travel portal providing a diverse range of world-class, hassle-free travel services online. Our services include domestic and international flight booking, tailor-made and inclusive holidays,  worldwide attraction tickets, sightseeings, foreign exchange, and much more. Our online platform allows users to search and book discounted flight tickets, holiday packages, visas and other services online from the comfort of their homes, office or smartphone effortlessly. With offices in India and abroad, we have more than 150 branches worldwide that extends the companys reach to almost all major travel destinations of the world.</p> <br/>
                 
                  <h2>Our Members-</h2>
                  <br/>
            <Row>
                 <Col lg={4}>
                  <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="./Images/teamImg1.jpg" />
                   <Card.Body>
                    <Card.Title>Akanksha Kurundkar</Card.Title>
               <Card.Text>
               Phone- 7498409463 <br/>
               Email- kurundkarakanksha@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   
                
           <Col lg={4}>
                  <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="./Images/teamImg2.jpg" />
                   <Card.Body>
                    <Card.Title>Prem Jadhav</Card.Title>
               <Card.Text>
                    Phone- 7378506062 <br/>
                    Email- premjadhav3295@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   

           <Col lg={4}>
                  <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="./Images/teamImg3.jpg" />
                   <Card.Body>
                    <Card.Title>Pratik Vajale</Card.Title>
               <Card.Text>
                         Phone- 7498110134 <br/>
                         Email- pratikvajale4@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   
            
            </Row>
        </Container>



     );
 }