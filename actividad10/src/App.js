import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React from 'react';

function App() {
  
  const getConsulta = async () =>{
    
    try {
      const resultados = document.getElementById("resultados");
      let formData = new FormData();
      var consulta = document.getElementById("consulta").value;
      formData.append("consulta", consulta);
      const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";

        let result = await axios({
          url,
          method: 'POST',
          dataType: 'json',
          ContentType: 'application/json',
          data: formData
        });
        console.log(result);   
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Presiona el botón para consultar la lista de empleados
        </p>
        <input type="button" className="btn btn-light" onClick={getConsulta} value="Consultar" id="consulta"></input>
      </header>
    </div>
  );
}

export default App;
