import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from 'firebase/compat/app'; // Import firebase
import 'firebase/compat/auth'; // Import the authentication module if you're using it
import 'firebase/firestore'; // Import other modules if you're using them
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCin0UcKZun8gTbLgDoKew5d3PDhQEVQ",
  authDomain: "flickpick-43896.firebaseapp.com",
  projectId: "flickpick-43896",
  storageBucket: "flickpick-43896.appspot.com",
  messagingSenderId: "616144074894",
  appId: "1:616144074894:web:e9c4dd0154edef43a0b1df",
  measurementId: "G-0E4V98DBRB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
