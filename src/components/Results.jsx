import React, { useEffect, useState } from "react";

import Error from "../components/Error";
import UniqueDomains from "../components/UniqueDomains";

import fetchPageContents from "../page-functions/fetchPageContents";
import {
  getDomainsFromLinks,
  getLinks,
  getPageTitle
} from "../page-functions/parsePageContents";

const Results = ({ url }) => {
  const [domains, setDomains] = useState(null);
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);
  const [pageContents, setPageContents] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      mounted && setError(null);
      const pageContents = await fetchPageContents(url).catch(
        ({ message }) => mounted && setError(message)
      );
      const links = getLinks(pageContents);
      mounted && setPageContents(pageContents);
      mounted && setLinks(links);
      const domains = getDomainsFromLinks(links);
      mounted && setDomains(domains.length ? domains : null);
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
          <h3>Page title:</h3>
          <p>{getPageTitle(pageContents)}</p>
          <h3>Link count:</h3>
          <p>{links.length}</p>
          {domains && <UniqueDomains domains={[...new Set(domains)]} />}
        </div>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

export default Results;
