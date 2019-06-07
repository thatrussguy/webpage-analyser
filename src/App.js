import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Results from "./components/Results";
import UrlForm from "./components/UrlForm";

const App = () => {
  const [url, setUrl] = useState(null);

  return (
    <div className="App">
      <Header />
      <UrlForm setUrl={setUrl} />
      {url && <Results url={url} />}
    </div>
  );
};

export default App;
