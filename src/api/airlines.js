const axios = require("axios");
const params = {
  access_key: "9fbb5219c662a679706700a96dc13d5e",
};

export async function showAirlines() {
  try {
    const data = await axios.get("http://api.aviationstack.com/v1/airlines", {
      params,
    });
    console.log("airline data", data);
  } catch (error) {
    return error;
  }
}
