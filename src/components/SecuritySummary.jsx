import React, { useEffect, useState } from "react";

import checkSsl from "../page-functions/checkSsl";

const UniqueDomains = ({ url }) => {
  const [sslDetails, setSslDetails] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const { sslDetails } = await checkSsl(url).catch(({ message }) => {
        mounted && setSslDetails(null);
      });
      mounted && setSslDetails(sslDetails);
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div className={sslDetails && sslDetails.valid ? "secure" : "insecure"}>
      <h3>Security Summary:</h3>
      <p>
        Is a valid SSL certificate available for {url}?{" "}
        {sslDetails && sslDetails.valid ? "Yes" : "No"}
      </p>
      {sslDetails && (
        <details>
          <summary>More details...</summary>
          <p>Valid from: {sslDetails.valid_from}</p>
          <p>Valid to: {sslDetails.valid_to}</p>
          <p>Days remaining until expiration: {sslDetails.days_remaining}</p>
        </details>
      )}
    </div>
  );
};

export default UniqueDomains;
