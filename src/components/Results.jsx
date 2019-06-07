import cheerio from "cheerio";
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
      {pageContents && <p>Page title: {getPageTitle(pageContents)}</p>}
      {error && <Error error={error} />}
    </div>
  );
};

const getPageTitle = html => {
  const $ = cheerio.load(html);
  return $("title").text();
};

export default Results;
