import React from "react";

const Error = ({
  error: {
    config: { url }
  }
}) => {
  return <p>Could not read page contents from {url}</p>;
};

export default Error;
