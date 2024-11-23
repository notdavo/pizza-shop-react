import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <>
      {pizzaData.map((pizza) => {
        const nameForImage = pizza.name.match(/(?:\w+\s)?(\w+)/);

        return (
          <div key={pizza.name}>
            <img
              src={`pizzas/${nameForImage[1].toLowerCase()}.jpg`}
              alt={nameForImage}
            />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
          </div>
        );
      })}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
