import axios from "axios";
import { BASE_URL } from "./APIConstants";
export async function fetchflightdetails() {
    try {
        const response = await axios.get(`${BASE_URL}/flights`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

