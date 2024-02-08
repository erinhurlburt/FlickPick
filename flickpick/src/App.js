//import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./Views/HomeView";
import "./App.css";

function App() {
  return (
    <div className="App" id="App">
      <h2>Welcome to FlickPick!</h2>
      <HomeView />
    </div>
  );
}

export default App;
