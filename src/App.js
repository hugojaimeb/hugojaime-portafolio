import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MnavBar } from "./components/MNavBar";
import { Banner } from "./components/Banner";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <MnavBar />
      <Banner />
      <Profile />
    </div>
  );
}

export default App;
