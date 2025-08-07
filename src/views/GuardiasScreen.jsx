import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGuardias } from "../helpers/guardiasFetch";
import { sendEmail, convertirFecha } from "../helpers/emailJs";
import useStore from "../store/store";

const GuardiasScreen = () => {
  const user = useStore((state) => state.user);
  const [guardias, setGuardias] = useState([]);
  const [filterFechas, setFilterFechas] = useState([]);
  const [fecha, setFecha] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGuardias();
  }, []);

  useEffect(() => {
    if (fecha) {
      SearchFecha();
    } else {
      setFilterFechas(guardias);
    }
  }, [fecha]);

  const fetchGuardias = async () => {
    setLoading(true);
    try {
      const respuesta = await getGuardias();
      respuesta.guardias.sort((a, b) => a.SEMANA.localeCompare(b.SEMANA));
      setGuardias(respuesta.guardias);
      setFilterFechas(respuesta.guardias);
    } catch (error) {
      console.error("Error fetching guardias:", error);
    } finally {
      setLoading(false);
    }
  };

  const SearchFecha = () => {
    const filteredGuardias = guardias.filter((guardia) =>
      guardia.SEMANA.includes(fecha)
    );
    setFilterFechas(filteredGuardias);
  };

  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-12 text-md-center">
          <h1>Guardias </h1>
        </div>
      </div>
      {user?.rol === "ADMIN_ROLE" && (
        <div className="row  ">
          <div className="col-12 col-md-6 offset-md-3  mb-2">
            <div className="d-md-grid">
              <Link to="/admin/guardias" className="btn btn-primary">
                Ir a Administración de Guardias
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="row  my-3">
        <div className="col-12 col-md-6 offset-md-3">
          <form>
            <input
              type="month"
              name="fecha"
              id="fecha"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="row ">
        {loading ? (
          <div className="col d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="col-12 col-md-6  offset-md-3">
            {filterFechas.length > 0 ? (
              filterFechas.map((guardia) => (
                <div className="card mb-3" key={guardia._id}>
                  <div className="card-header">
                    Semana: {convertirFecha(guardia.SEMANA)}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Asignado: {guardia.ASIGNADO.nombre}
                    </h5>
                    <p className="card-text m-0">
                      Contacto:{" "}
                      <a
                        href={`https://wa.me/${guardia.ASIGNADO.contacto}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {guardia.ASIGNADO.contacto}
                      </a>
                    </p>
                    {user?.rol === "ADMIN_ROLE" && (
                      <div className="d-flex justify-content-end mb-2  ">
                        <button
                          className="btn btn-primary"
                          onClick={() => sendEmail(guardia)}
                        >
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    )}

                    {guardia?.AUXILIAR && (
                      <>
                        <h5 className="card-title">
                          Auxiliar: {guardia.AUXILIAR.nombre}
                        </h5>
                        <p className="card-text">
                          Contacto:{" "}
                          <a
                            href={`https://wa.me/${guardia.AUXILIAR.contacto}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {guardia.AUXILIAR.contacto}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-info" role="alert">
                No hay guardias asignadas.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuardiasScreen;
