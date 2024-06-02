import { useEffect, useState } from "react";
import { deletePassenger,fetchPassenger } from "../Services/PassengerService";
import { Button, Container, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import { Navigationbar } from "./Navigationbar";
export function Passengerlist() {
  const [passenger, setPassenger] = useState([]);
  //---------------
  const [showDialog, setShowDialog] = useState(false);//this state is used for modal
  const [selectedFName, setSelectedFName]= useState("");//this state is use for get the fName dyanmically for deletion
  const navigate = useNavigate();

  const openModalDialog = () => {
    setShowDialog(true);
  }

  const closeModalDialog = () => {
    setShowDialog(false);
  }

  //-----------------------------------------
  async function fetchPassengerList() {
    try {
      const data = await fetchPassenger();
      setPassenger(data.Customer);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPassengerList();
  });
  //--------------------------------------------------
  const handleDeleteClick = async () => {
    try {
      await deletePassenger(selectedFName); //this function call from Service.jsx
      fetchPassenger(); //this function will show updated iist on UI
      closeModalDialog();//this function we call to hide modal box
    } catch (error) {
      console.log(error);
    }
  }
  //------------------------------------------------------
  return (
    <>
    <Container>
      <br/>
      <h1><center>Passenger List</center></h1>

      {passenger.length!==0?<Table className="mt-5">
        <thead>
          <tr>
            <th>FName</th>
            <th>LName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
             passenger.map((p) => {
            return (
              <tr>
                <td>{p.FName}</td>
                <td>{p.LName}</td>
                <td>{p.Gender}</td>
                <td>{p.Email}</td>
                <td>{p.Contact}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      openModalDialog(); // this functiom declare above
                      setSelectedFName(p.FName);
                    }}>Delete</Button> &nbsp;&nbsp;

                  <Button variant="primary" onClick={()=>{
                    navigate(`/edit/${p.FName}`)
                    }}> Update </Button>
                </td>
              </tr>
            )
          })
          
          }
        </tbody>
      </Table>:<p>No Passenger Found....!</p>}
      

      <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete Passenger {selectedFName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{
            handleDeleteClick();
          }}>
            Yes
          </Button>
          <Button variant="danger" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
}