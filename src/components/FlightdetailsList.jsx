import { Container, Table, Button } from "react-bootstrap";
import { useEffect,useState } from "react";
import { fetchflightdetails } from "../Services/FlightService";
import { useNavigate } from "react-router-dom";
export function FlightdetailsList(){
const [flightDetails, setFlightDetails] = useState([]);

   async function populateFlightList(){
 try {
   const data = await fetchflightdetails();
   setFlightDetails(data.flights);   //key is flights
 } catch (error) {
    console.log(error);
   }
}


useEffect(()=>{
    populateFlightList();
},[]);

const navigate = useNavigate();

return (
    <Container>
      
          <h1>List of Flights</h1>
         <Table className="mt-4">
             <thead>
                <tr>
                  <th>Flight Number</th>
                  <th>Departure City</th>
                  <th>Arrival City</th>
                  <th>Departure date and time</th>
                  <th>Arrival date and time</th>
                  <th>ticket price per person</th>
                  <th>Options</th>
                </tr>
             </thead>
             <tbody>
                 {
                     flightDetails.map((f)=>{
                     return(
                        <tr>
                           <td>{f.flightNumber}</td>
                           <td>{f.departureCity}</td>
                           <td>{f.arrivalCity}</td>
                           <td>{f.departureTime}</td>
                           <td>{f.arrivalTime}</td>
                           <td>{f.price}</td>
                            <td><Button variant="dark" type="submit" onClick={()=>navigate("/RegisterPassenger")}>Book tickets</Button> &nbsp;&nbsp; 
                           </td>
                        </tr>
                        
                    )
                     })
                 }
             </tbody>
          </Table>
    </Container>
);

}