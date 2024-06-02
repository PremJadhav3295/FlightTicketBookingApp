
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
export function Login() {

   const[formData,setFormData] = useState({uname:"",phone:"",email:""});

   const handleChange=(e)=>{
       setFormData({ ...formData , [e.target.name]:e.target.value})
   }

   const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
   } 

    return (
        <Container className="mt-5">
            <h1>Login Page</h1>
            <br/>
            <div>
            <Form onSubmit={handleSubmit} className="login">

            <Row>
               <Col lg={5}>
               <Form.Group className="mb-3" controlId="formGroupEmail">
               <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" onKeyUp={handleChange} required/>
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
                </Form.Group>
                </Col>
            </Row>

            <Row>
               <Col lg={5}>
               <Form.Group className="mb-3" controlId="formGroupEmail">
               <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onKeyUp={handleChange} required/>
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
                </Form.Group>
                </Col>
              </Row>

            <Row>
                <Col lg={5}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
               <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" onKeyUp={handleChange} required/>
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
                </Form.Group>
                </Col>
            </Row>

                    <Col lg={5}>
                       <Button type="submit" variant="dark">Login</Button>
                       </Col>
                       </Form>
                <br/>
                <br/>
            <h4>Don't have an account? Create one from our Registration page.</h4>
            <p>Manage your Bookings and receive our latest news and offers just for you..</p>
            </div>
        </Container>
    );
}
