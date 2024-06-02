  import axios from "axios";
  import { BASE_URL } from "./APIConstants";

export async function fetchPassenger(){
    try {
        const response=await axios.get(`${BASE_URL}/customers`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

  export async function savePassenger(passengerData){
     try {
         const response=await axios.post(`${BASE_URL}/customers`,passengerData);
         return response.data;
     } catch (error) {
                 console.log(error);
           }
 }  

export async function deletePassenger(FName){
    try {
        const response= await axios.delete(`${BASE_URL}/customers/${FName}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}  

export async function fetchPassengerbyFname(FName){
    try {
        const response=await axios.get(`${BASE_URL}/customers/${FName}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export async function updatePassenger(updatedData,FName){
    try {
        const response=await axios.put(`${BASE_URL}/customers/${FName}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}