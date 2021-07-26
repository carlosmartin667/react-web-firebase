import React from "react";
import "./App.css";
import ListaPersonaSabdoTach from "./components/listaPersonaSabdoTach";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <ListaPersonaSabdoTach />
      </div>
    </div>
  );
}

export default App;
