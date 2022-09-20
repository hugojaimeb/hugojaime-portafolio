import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MnavBar } from "./components/MNavBar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <MnavBar />
      <Banner />
    </div>
  );
}

export default App;
