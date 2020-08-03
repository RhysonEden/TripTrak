import axios from "axios";

export async function showFlightPath() {
  try {
    console.log("firing");
    const { data } = await axios.get(`/api/paths`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
