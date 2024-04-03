import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeView } from "./Views/HomeView/HomeView";
import { SignInView } from "./Views/SignInView/SignInView";

import logo from "./logo.png";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogout = () => {
  //   setAccessToken(null)
  //   setIsAuthenticated(false)
  // }

  return (
    <Router>
      <div className="App" id="App">
        <header>
          <img src={logo} height={100} />
          <h1>Menu</h1>
        </header>
        <Routes>
          <Route
            path="/signin"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <SignInView onSignIn={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/home"
            element={
              <HomeView
                //onLogout={handleLogout}
                processSignIn={() => {
                  setIsAuthenticated(true);
                }}
              />
            }
          />
          {/* <Route path="/search/:query" component={ResultsPage} />

        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Devs />} />
        <Route path="/faq" element={<FAQ />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
