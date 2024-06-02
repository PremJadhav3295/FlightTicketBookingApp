import React, { useState } from 'react';
import {Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

  
  export function Flightbookingform () {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fromCity,toCity,departureDate,returnDate);
  };

  const navigate = useNavigate();

  return (
     <Container className="box"> 
    <Form onSubmit={handleSubmit}>
   <Row>
        <Col lg={3}>
      <Form.Group controlId="fromCity">
        <Form.Label>From City</Form.Label>
        <Form.Control
         type="text"
         placeholder="Enter from city"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />
      </Form.Group>
      </Col>
    

      <Col lg={3}>
      <Form.Group controlId="toCity">
        <Form.Label>To City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter to city"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />
      </Form.Group>
      </Col>

      <Col lg={3}>
      <Form.Group controlId="departureDate">
        <Form.Label>Date of Departure</Form.Label>
        <Form.Control
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </Form.Group>
      </Col>

      <Col lg={3}>
      <Form.Group controlId="returnDate">
        <Form.Label>Return date</Form.Label>
        <Form.Control
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </Form.Group>
      </Col>
      <br/>
      
      <Col lg={4}>
        <br/>
      <Button variant="dark" type="submit" onClick={()=>navigate("/directflightlist")}>
        Search flight
      </Button>
      </Col>
     </Row>
    </Form>  

    </Container>
  );
    };