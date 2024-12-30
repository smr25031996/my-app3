import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import React from "react";
import Counter from "./Counter";
import Employees from "./Employees";

function App() {
  return (
    <React.Fragment>
      <Counter />
      <Employees />
    </React.Fragment>
  );
}

export default App;
