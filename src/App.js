import React from "react";
import "./styles/styles.css";
import logoImage from "./assets/images/Brand_Logo.png";

function App() {
  return (
    <div className="centered-container">
      <img src={logoImage} alt=":( loading" />
      <h1>Download All sneaker photos from StockX.</h1>
      <input type="text" placeholder="Product Name" />
      <input type="text" placeholder="Color" />
      <button>Button</button>
      <p>
        <span className="light-text">made remotely by</span>{" "}
        <span className="dark-text">Suchit & Avinash</span>
      </p>
    </div>
  );
}

export default App;
