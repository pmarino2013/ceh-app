import React, { useEffect, useState } from "react";
import { getUsuarios } from "../helpers/usuariosFetch";
import CradUserApp from "../components/CradUserApp";
import SearchUserApp from "../components/SearchUserApp";

const UsuariosScreen = () => {
  const [mensaje, setMensaje] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [usuariosFilter, setUsuariosFilter] = useState([]);
  useEffect(() => {
    traerUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filtrarUsuarios();
  }, [inputValue]);

  const traerUsuarios = async () => {
    const datos = await getUsuarios();
    if (datos?.msg) {
      setMensaje(datos.msg);
    } else {
      const usuariosSort = datos.usuarios.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );

      setUsuarios(usuariosSort);
      setUsuariosFilter(usuariosSort);
      setMensaje("");
    }
  };

  const filtrarUsuarios = () => {
    const filtro = usuarios.filter((user) => {
      return user.nombre.toLowerCase().includes(inputValue.toLowerCase());
    });

    setUsuariosFilter(filtro);
  };
  return (
    <div className="container">
      <div className="row mt-3 text-center pt-3">
        <div className="col">
          <h1 className="title-principal">CEH</h1>
          <small>Tucumán</small>
          <h3>Usuarios</h3>
        </div>
      </div>
      {mensaje && (
        <div className="alert alert-danger text-center" role="alert">
          {mensaje}
        </div>
      )}

      {usuarios.length > 0 ? (
        <>
          <SearchUserApp
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          {usuariosFilter.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
              {usuariosFilter.map((usuario) => (
                <div className="col" key={usuario._id}>
                  <CradUserApp usuario={usuario} />
                </div>
              ))}
            </div>
          ) : (
            <div className="container ">
              <div className="row mt-5">
                <div className="col-12 col-md-6 offset-md-3">
                  <div className="alert alert-info" role="alert">
                    <span> No se encontraron registros.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
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
