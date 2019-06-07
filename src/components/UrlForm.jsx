import React, { useState } from "react";

const UrlForm = ({ setUrl }) => {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setUrl(urlInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={({ target: { value } }) => setUrlInput(value)} />
      <button>Analyse</button>
    </form>
  );
};

export default UrlForm;
