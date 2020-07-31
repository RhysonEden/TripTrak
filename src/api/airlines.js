import axios from "axios";

export async function showAirlines() {
  try {
    console.log("firing");
    const { data } = await axios.get(`/api/airlines`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
