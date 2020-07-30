import axios from "axios";
const params = {
  access_key: "9fbb5219c662a679706700a96dc13d5e",
};

export async function getSomething() {
  try {
    const data = await axios.get("http://api.aviationstack.com/v1/flights", {
      params,
    });
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
}
