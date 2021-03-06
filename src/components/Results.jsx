import React, { useEffect, useState } from "react";

import Error from "../components/Error";
import SecuritySummary from "../components/SecuritySummary";
import UniqueDomains from "../components/UniqueDomains";

import fetchPageContents from "../page-functions/fetchPageContents";
import {
  checkForGoogleAnalytics,
  getDomainsFromLinks,
  getLinks,
  getPageTitle
} from "../page-functions/parsePageContents";

const Results = ({ url }) => {
  const [domains, setDomains] = useState(null);
  const [error, setError] = useState(null);
  const [googleAnalytics, setGoogleAnalytics] = useState(null);
  const [links, setLinks] = useState([]);
  const [pageContents, setPageContents] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      mounted && setError(null);
      const { pageContents, error } = await fetchPageContents(url).catch(
        ({ message }) => {
          mounted && setError({ message });
          mounted && setPageContents(null);
        }
      );
      mounted && setPageContents(pageContents);
      mounted && setError(error);
      if (pageContents) {
        const links = getLinks(pageContents);
        mounted && setLinks(links);
        const domains = getDomainsFromLinks(links);
        mounted && setDomains(domains.length ? domains : null);
        mounted && setGoogleAnalytics(checkForGoogleAnalytics(pageContents));
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div className="results">
      <h2>
        Query results for{" "}
        <a
          href={
            url.startsWith("http:") || url.startsWith("https:")
              ? url
              : `//${url}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </h2>
      {pageContents && (
        <div>
          <div className={"page-title"}>
            <h3>Page title:</h3>
            <p>{getPageTitle(pageContents) || "No title found"}</p>
          </div>
          <div className="links">
            <h3>Link count:</h3>
            <p>{links.length}</p>
            {domains && <UniqueDomains domains={[...new Set(domains)]} />}
          </div>
          <SecuritySummary url={url} />
          <div className="google-analytics">
            <h3>Google Analytics available?</h3>
            <p>{googleAnalytics ? "Yes" : "No"}</p>
          </div>
        </div>
      )}
      {error && <Error error={error} url={url} />}
    </div>
  );
};

export default Results;
