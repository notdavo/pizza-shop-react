import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.map((pizza) => {
        return <Pizza key={pizza.name} pizza={pizza} />;
      })}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. We're currently open
    </footer>
  );
}

function Pizza(props) {
  const pizzaNameForImage = props.pizza.name.match(/(?:\w+\s)?(\w+)$/);
  return (
    <div className="pizza">
      <img
        src={`pizzas/${pizzaNameForImage[1].toLowerCase()}.jpg`}
        alt={pizzaNameForImage}
      />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <spa>${props.pizza.price}</spa>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
