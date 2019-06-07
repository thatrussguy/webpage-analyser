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
      mounted && setError(null);
      const pageContents = await fetchPageContents(url).catch(
        ({ message }) => mounted && setError(message)
      );
      mounted && setPageContents(pageContents);
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div>
      <h2>Query results</h2>
      {pageContents && (
        <div>
          <p>Page title: {getPageTitle(pageContents)}</p>
          <p>Link count: {getLinks(pageContents).length}</p>
        </div>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

const getPageTitle = html => {
  const $ = cheerio.load(html);
  return $("title").text();
};
const getLinks = html => {
  const links = [];
  const $ = cheerio.load(html);
  $("a").each((_, link) => {
    links.push($(link).attr("href"));
  });
  console.log(links);
  return links;
};

export default Results;
