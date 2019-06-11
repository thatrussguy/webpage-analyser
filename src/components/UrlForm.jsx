import React, { useState } from "react";

const UrlForm = ({ setUrl }) => {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setUrl(urlInput);
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <input
        className="url-input"
        onChange={({ target: { value } }) => setUrlInput(value)}
        placeholder={"Enter a URL"}
      />
      <button disabled={!urlInput}>Analyse</button>
    </form>
  );
};

export default UrlForm;
