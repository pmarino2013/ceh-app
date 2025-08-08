import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGuardias } from "../helpers/guardiasFetch";
import useStore from "../store/store";
import CardGuardiaApp from "../components/CardGuardiaApp";

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
        <div className="col-12 text-center">
          <h1 className="title-principal">CEH</h1>
          <small>Tucumán</small>
          <h3>Guardias</h3>
        </div>
      </div>
      {user?.rol === "ADMIN_ROLE" && (
        <div className="row  ">
          <div className="col-12 col-md-6 offset-md-3  mb-2">
            <div className="d-grid">
              <Link to="/admin/guardias" className="btn btn-primary">
                Ir a Administración de Guardias
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="row ">
        {loading ? (
          <div className="col d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="col-12 col-md-6 offset-md-3 my-3">
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

            <div className="col-12 col-md-6  offset-md-3">
              {filterFechas.length > 0 ? (
                filterFechas.map((guardia) => (
                  <CardGuardiaApp
                    key={guardia._id}
                    guardia={guardia}
                    user={user}
                  />
                ))
              ) : (
                <div className="alert alert-info" role="alert">
                  No hay guardias asignadas.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GuardiasScreen;
