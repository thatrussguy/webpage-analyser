import React, { useEffect, useState } from "react";

import Error from "../components/Error";

import fetchPageContents from "../page-functions/fetchPageContents";

const Results = ({ url }) => {
  const [error, setError] = useState(null);
  const [pageContents, setPageContents] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const pageContents = await fetchPageContents(url).catch(
        ({ message }) => mounted && setError(message)
      );
      mounted && setPageContents(pageContents);
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [error, url]);

  return (
    <div>
      <h2>Query results</h2>
      {pageContents && pageContents}
      {error && <Error error={error} />}
    </div>
  );
};

export default Results;
