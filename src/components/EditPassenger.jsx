import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPassengerbyFname, updatePassenger } from "../Services/PassengerService";
//import { Navigationbar} from "./Navigationbar";


export function EditPassenger() {
    const params=useParams();
    const [passengerData,setPassengerData]=useState({FName:"",LName:"",Gender:"", Email:"",Contact:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setPassengerData({...passengerData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result=await updatePassenger(passengerData,params.FName);
           setIsSubmitted(true);
           setTimeout(()=>{  //New .....................
            setIsSubmitted(false);
           }, 1500);
           console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const populatePassengerState=async()=>{
        try {
            const result=await fetchPassengerbyFname(params.FName);
            setPassengerData(result.Customer);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populatePassengerState();
    },[]);

    return (
        <>
        <Container>
            <h1>Update Passenger details</h1>
            {passengerData?<Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>FName</Form.Label>
                            <Form.Control type="text" value={passengerData.FName} placeholder="Enter first name" name="FName" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>LName</Form.Label>
                            <Form.Control type="text" value={passengerData.LName} placeholder="Enter last name" name="LName" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="Gender"
                            value="male"
                            onChange={handleChange}
                            checked={passengerData.Gender==="male"?true:false}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="Gender"
                            value="female"
                            onChange={handleChange}
                            checked={passengerData.Gender==="female"?true:false}
                        />
                    </Col>
                    </Row>

                    <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={passengerData.Email} placeholder="Enter email" name="Email" onChange={handleChange}/>
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" value={passengerData.Contact} placeholder="Enter contact" name="Contact" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Update</Button>
                    </Col>
                    
                </Row>
            </Form>:<p>No data found for given passenger name.</p>}
            
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Passenger details updated</Alert>:null}
                </Col>
            </Row>
        </Container>
        </>
    );
}