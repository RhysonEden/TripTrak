const axios = require("axios");
const params = {
  access_key: "9fbb5219c662a679706700a96dc13d5e",
};

// axios
//   .get("https://api.aviationstack.com/v1/flights", { params })
//   .then((response) => {
//     const apiResponse = response.data;
//     if (Array.isArray(apiResponse["results"])) {
//       apiResponse["results"].forEach((flight) => {
//         if (!flight["live"]["is_ground"]) {
//           console.log(
//             `${flight["airline"]["name"]} flight ${flight["flight"]["iata"]}`,
//             `from ${flight["departure"]["airport"]} (${flight["departure"]["iata"]})`,
//             `to ${flight["arrival"]["airport"]} (${flight["arrival"]["iata"]}) is in the air.`
//           );
//         }
//       });
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export async function showFlights() {
  try {
    const data = await axios.get("http://api.aviationstack.com/v1/flights", {
      params,
    });
    console.log("flight", data);
    return data.data.cartItems;
  } catch (error) {
    return error;
  }
}
