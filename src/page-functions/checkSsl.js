import axios from "axios";

const checkSsl = async url => {
  const sslDetails = await axios.post(
    "https://webpage-analyser-api.herokuapp.com/ssl-check",
    { url }
  );
  return sslDetails.data;
};

export default checkSsl;
