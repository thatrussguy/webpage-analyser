import React, { useEffect, useState } from "react";

import Error from "../components/Error";

import checkSsl from "../page-functions/checkSsl";

const UniqueDomains = ({ url }) => {
  const [error, setError] = useState(null);
  const [sslDetails, setSslDetails] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      mounted && setError(null);
      const { sslDetails, error } = await checkSsl(url).catch(({ message }) => {
        mounted && setError(message);
        mounted && setSslDetails(null);
      });
      mounted && setSslDetails(sslDetails);
      mounted && setError(error);
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div>
      {sslDetails && (
        <div>
          <h3>Security Summary:</h3>
          <p>
            Is a valid SSL certificate available for {url}?{" "}
            {sslDetails.valid ? "Yes" : "No"}
          </p>
          <p>Valid from: {sslDetails.valid_from}</p>
          <p>Valid to: {sslDetails.valid_to}</p>
          <p>Days remaining until expiration: {sslDetails.days_remaining}</p>
        </div>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

export default UniqueDomains;
