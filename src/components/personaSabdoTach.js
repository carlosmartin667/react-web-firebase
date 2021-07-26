import React, { useState, useEffect } from "react";
import { db } from "../firebase";
const PersonaSabdoTach = (props) => {
  const initialStateValues = {
    nombre: "",
    edad: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (x) => {
    const { name, value } = x.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditPersonaSabdoTach(values);
    setValues({ ...initialStateValues });
  };


  const getLinkById = async (id) => {
    const doc = await db.collection("PersonaSabdoTach").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);
  
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          nombre :{" "}
        </span>
        <input
          type="text"
          value={values.nombre}
          name="nombre"
          placeholder="nombre"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          edad :{" "}
        </span>
        <input
          type="text"
          value={values.edad}
          name="edad"
          placeholder="edad"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button type="GUARDAR" className="btn btn-primary">
        {props.currentId === "" ? "guardar" : "editar"}
      </button>
    </form>
  );
};

export default PersonaSabdoTach;
