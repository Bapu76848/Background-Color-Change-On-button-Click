import { useState } from "react";
import "./styles.css";

const colors = [
  "blue",
  "brown",
  "pink",
  "yellow",
  "green",
  "purple",
  "orange",
  "gray",
  "lime",
  "aqua",
  "wheat",
  "chocolate",
  "crimson",
  "navy",
  "teal",
  "darkblue"
];

export default function App() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div>
      <div style={{ height: "200px", width: "200px", backgroundColor: color }}>
        <h1 style={{ textAlign: "center" }}>{color}</h1>
      </div>
      <button onClick={changeColor}>Change Random Colors</button>
    </div>
  );
}
