import React, { useEffect, useState } from "react";
import { getUsuarios } from "../helpers/usuariosFetch";
import CradUserApp from "../components/CradUserApp";

const UsuariosScreen = () => {
  const [mensaje, setMensaje] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    traerUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const traerUsuarios = async () => {
    const datos = await getUsuarios();
    if (datos?.msg) {
      setMensaje(datos.msg);
    } else {
      setUsuarios(datos.usuarios);
      setMensaje("");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3 text-center pt-3">
        <div className="col">
          <h1 className="title-principal">CEH</h1>
          <small>Usuarios</small>
        </div>
      </div>
      {mensaje && (
        <div className="alert alert-danger text-center" role="alert">
          {mensaje}
        </div>
      )}

      {usuarios.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
          {usuarios.map((usuario) => (
            <div className="col" key={usuario._id}>
              <CradUserApp usuario={usuario} />
            </div>
          ))}
          {/* usuarios.map((usuario, index) => (
          <div className="col" key={index}>
            <CradUserApp usuario={usuario} />
          </div>
          )) */}
        </div>
      ) : (
        <div className="row">
          <div className="col-12 text-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsuariosScreen;
