import { useState } from "react";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";
import { savePassenger } from "../Services/PassengerService";
//import { useNavigate } from "react-router-dom";
//import { Navigationbar } from "./Navigationbar";

export function PassengerDetailsForm(){
    const [passengerData, setPassengerData] =useState({FName:"",LName:"",Gender:"", Email:"", Contact:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    
    const handleChange=(e)=>{
        setPassengerData({...passengerData, [e.target.name]:e.target.value});
    }


   //-------------------for save passenger data on UI
   const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(passengerData);
        try {
           const result=await savePassenger(passengerData);
           setPassengerData({FName:"",LName:"",Gender:"", Email:"", Contact:""});
           setIsSubmitted(true);
           setTimeout(()=>{  //New .....................
            setIsSubmitted(false);
           }, 1500);
           console.log(result.message);
        } catch (error) {
            console.log(error);
        }
   }


   //const navigate = useNavigate();
   //--------------------------------
    return (
        <>

        <Container>
            
            <h4>Personal Details</h4>

            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3"  >
                             <Form.Label>FName</Form.Label>
                             <Form.Control type="text" value={isSubmitted?passengerData.FName:null}  placeholder="Enter Name" name="FName" onKeyUp={handleChange} />
                             
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                             <Form.Label>LName</Form.Label>
                             <Form.Control type="text" value={isSubmitted?passengerData.LName:null} placeholder="Enter Name" name="LName" onKeyUp={handleChange} />
                             
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Form.Label>Gender</Form.Label>
                     <Form.Check
                             
                             type="radio"
                             label="Male" 
                             name="Gender" 
                             value="male"  
                             onChange={handleChange} 
                        />
                         <Form.Check
                            
                             type="radio"
                             label="Female"  
                             name="Gender"
                             value="female"   
                             onChange={handleChange} 
                        />
                </Row>        
                <Row>
                   <Col lg={4}>
                        <Form.Group className="mb-3"  >
                             <Form.Label>Email Id</Form.Label>
                             <Form.Control type="email" value={isSubmitted?passengerData.Email:null} placeholder="Enter Email" name="Email" onKeyUp={handleChange} />
                          
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                             <Form.Label>Contact</Form.Label>
                             <Form.Control type="text"value={isSubmitted?passengerData.Contact:null}  placeholder="Enter contact no." name="Contact" onKeyUp={handleChange} />
                        
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                    <Button type="submit" variant="primary" >Register</Button>
                    </Col>
                </Row>
            </form>
            <Row className="mt-3"> 
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Passenger Registered</Alert>:null}
                </Col>
            </Row>
        </Container>
        </>
    );
}
// {()=>navigate("/passengerlist")}
//onClick={()=>navigate("/passengerlist")}