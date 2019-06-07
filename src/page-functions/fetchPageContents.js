import axios from "axios";

const fetchPageContents = async url => {
  const pageContents = await axios.get(
    `https://cors-anywhere.herokuapp.com/${url}`
  );
  return pageContents.data;
};

export default fetchPageContents;
