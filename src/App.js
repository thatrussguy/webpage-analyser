import React from "react";
import "./App.css";

import UrlForm from "./components/UrlForm";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <UrlForm />
    </div>
  );
};

export default App;
