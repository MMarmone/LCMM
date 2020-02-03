import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
      <React.Fragment>
        <Login />
        <Register />
      </React.Fragment>
  );
}

export default App;
