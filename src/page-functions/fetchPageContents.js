import axios from "axios";

const fetchPageContents = async url => {
  const pageContents = await axios.post(
    "https://webpage-analyser-api.herokuapp.com/page-contents",
    { url }
  );
  return pageContents.data;
};

export default fetchPageContents;
