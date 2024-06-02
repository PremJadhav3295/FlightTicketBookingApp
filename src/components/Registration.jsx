import { Col, Form, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";

export function Registration(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

     return (
        <Container >
          
        <h1>Registration Page</h1>
        <br/>
        <div>
            <h4>It takes a minute to register for yur account..</h4>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
             <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                       <Form.Label>Name</Form.Label>
                       <Form.Control type="text" placeholder="Name" required/>
                      <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
                  </Form.Group> 
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                           <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                           </Form.Text>
                           
                    </Form.Group>
                </Col>
            </Row>

            <Row>
               <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" required/>
                       <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                  </Form.Group>
                  </Col>
            </Row>

            <Row>
               <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="phone" placeholder="Phone number" required />
                      <Form.Control.Feedback type="invalid">Phone number required</Form.Control.Feedback>
                  </Form.Group>
               </Col>
            </Row>

            <Row>
                <Col lg={4}>
                  <Form.Label>Gender</Form.Label>
                   <Form.Check 
                   required
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                     />
                   <Form.Check 
                   required
                    type="radio"
                    label="female"
                    name="gender"
                    value="female"
                     />
                   </Col>
            </Row>       
              <br></br>     
            <Row>

            </Row>
                  
                    <Row>
                        <Col lg={3}>
                      <Button variant="primary" type="submit">Create an Account</Button>
                        </Col>
                    </Row>
            </Form>   
        </div>
        
    </Container>
     );

}