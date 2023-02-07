import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt me!</h1>
    <Pet name = "Luna" animal = "Dog" breed = "Havanese"/>
    <Pet name = "Pepper" animal = "Bird" breed = "Cuckoo"/>
    <Pet name = "Doin" animal = "cat" breed = "Mixed"/>
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
