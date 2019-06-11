import React from "react";

const UniqueDomains = ({ domains }) => {
  return (
    <details>
      <summary>
        {domains.length} Unique Domain{domains.length > 1 ? "s" : ""}:
      </summary>
      {domains.map(domain => (
        <p key={domain}>{domain}</p>
      ))}
    </details>
  );
};

export default UniqueDomains;
