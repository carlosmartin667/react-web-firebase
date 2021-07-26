import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import PersonaSabdoTach from "./personaSabdoTach";

const ListaPersonaSabdoTach = () => {
  const [personas, setPersonas] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addOrEditPersonaSabdoTach = async (Persona) => {
    if (currentId === "") {
      await db.collection("PersonaSabdoTach").doc().set(Persona);
    } else {
      await db.collection("PersonaSabdoTach").doc(currentId).update(Persona);
    }
    setCurrentId("");
  };

  const onDeletePesona = async (id) => {
    await db.collection("PersonaSabdoTach").doc(id).delete();
  };

  const getListPersonaSabdoTach = async () => {
    await db.collection("PersonaSabdoTach").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setPersonas(docs);
    });
  };

  useEffect(() => {
    getListPersonaSabdoTach();
  }, []);

  var doc = 0;
  
  return (
    <div>
      <PersonaSabdoTach
        {...{ addOrEditPersonaSabdoTach, currentId, personas }}
      />
      <h1>lista</h1>
      <div className="card card-body">
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Funcion</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{(doc += 1)}</th>
                  <td>{item.nombre}</td>
                  <td>{item.edad}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => onDeletePesona(item.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => setCurrentId(item.id)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaPersonaSabdoTach;
