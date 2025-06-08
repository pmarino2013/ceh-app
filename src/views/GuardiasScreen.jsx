import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGuardias } from "../helpers/guardiasFetch";
import useStore from "../store/store";

const GuardiasScreen = () => {
  const user = useStore((state) => state.user);
  const [guardias, setGuardias] = useState([]);
  useEffect(() => {
    fetchGuardias();
  }, []);

  const fetchGuardias = async () => {
    const respuesta = await getGuardias();
    console.log(respuesta);
    respuesta.guardias.sort((a, b) => a.SEMANA.localeCompare(b.SEMANA));
    setGuardias(respuesta.guardias);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Guardias </h1>
        </div>
      </div>
      {user?.rol === "ADMIN_ROLE" && (
        <div className="row">
          <div className="col mb-2">
            <Link to="/admin/guardias" className="btn btn-primary">
              Ir a Administración de Guardias
            </Link>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col ">
          {guardias.length > 0 ? (
            guardias.map((guardia) => (
              <div className="card mb-3" key={guardia._id}>
                <div className="card-header">Semana: {guardia.SEMANA}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Asignado: {guardia.ASIGNADO.nombre}
                  </h5>
                  <p className="card-text">
                    Contacto:{" "}
                    <a
                      href={`https://wa.me/${guardia.ASIGNADO.contacto}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {guardia.ASIGNADO.contacto}
                    </a>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-info" role="alert">
              No hay guardias asignadas.
            </div>
          )}
          {/* <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Semana</th>
                <th>Nombre</th>
                <th>Contacto</th>
              </tr>
            </thead>
            <tbody>
              {guardias.map((guardia) => (
                <tr key={guardia._id}>
                  <td>{guardia.SEMANA}</td>
                  <td>{guardia.ASIGNADO.nombre}</td>
                  <td>{guardia.ASIGNADO.contacto}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default GuardiasScreen;
