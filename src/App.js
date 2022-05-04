import "./styles.css";
import "./bootstrap.min.css";
import React, { useState } from "react";

export default function App() {
  const [name, updName] = useState(0);
  const updateData = () => {
    try {
      updName(name + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>Empieza a contar!!!</h2>
      <p>{name}</p>
      <button class="btn btn-primary" onClick={updateData}>
        Actualizar
      </button>
    </div>
  );
}
