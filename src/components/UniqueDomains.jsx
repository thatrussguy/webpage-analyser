import React from "react";

const UniqueDomains = ({ domains }) => {
  return (
    <div>
      <h3>
        {domains.length} Unique Domain{domains.length > 1 ? "s" : ""}:
      </h3>
      {domains.map(domain => (
        <p key={domain}>{domain}</p>
      ))}
    </div>
  );
};

export default UniqueDomains;
