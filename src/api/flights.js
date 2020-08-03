import axios from "axios";

export async function showFlights() {
  try {
    console.log("firing");
    const { data } = await axios.get(`/api/flights`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
