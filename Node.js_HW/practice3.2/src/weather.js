import "dotenv/config";
import axios from "axios";

const { CITY } = process.env;

try {
  const cityWeather = await axios.get(`https://wttr.in/${CITY}?format=%t`);
  console.log(cityWeather);
} catch (error) {
  console.log(error.response.data);
}
