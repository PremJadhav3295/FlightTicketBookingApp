import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigationbar } from './components/Navigationbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { FlightdetailsList } from './components/FlightdetailsList';
import { PassengerDetailsForm } from './components/PassengerDetailsForm';
import { Passengerlist } from './components/Passengerlist';
import { EditPassenger } from './components/EditPassenger';
//import FlightBookingForm from './components/Flightbookingform';

//import { Flightdetails } from './components/Flightdetails';
function App() {
  return (
    <BrowserRouter>
       <Navigationbar></Navigationbar>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/About' element={<About/>}></Route>
           <Route path='/Login' element={<Login/>}></Route>
           <Route path='/Registration' element={<Registration/>}></Route>
           <Route path='/directflightlist' element={<FlightdetailsList/>}></Route>
           <Route path='/RegisterPassenger' element={<PassengerDetailsForm/>}></Route> 
           <Route path='/passengerlist' element={<Passengerlist/>}></Route> 
           <Route path="/edit/:FName" element={<EditPassenger/>}></Route>
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
