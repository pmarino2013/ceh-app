import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocumentos } from "../helpers/documentosFetch";
import { recursos } from "../data/información";
import Offcanvas from "react-bootstrap/Offcanvas";

const MenuApp = () => {
  const [show, setShow] = useState(false);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    traerDataDocumentos();
  }, []);

  const traerDataDocumentos = async () => {
    const { documentos } = await getDocumentos();
    setDocs(documentos);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fixed-top menu-ceh">
      <span onClick={handleShow}>
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title-principal">CEH</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="menu-app">
          <ul>
            <li>
              <Link className="nav-link" to="/" onClick={() => setShow(false)}>
                <i className="fa fa-home" aria-hidden="true"></i> Inicio
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/usuarios"
                onClick={() => setShow(false)}
              >
                <i className="fa  fa-users" aria-hidden="true"></i> Usuarios
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/guardias"
                onClick={() => setShow(false)}
              >
                <i className="fa  fa-calendar" aria-hidden="true"></i> Guardias
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/hospitales"
                onClick={() => setShow(false)}
              >
                <i className="fa  fa-hospital-o" aria-hidden="true"></i>{" "}
                Hospitales
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-medkit" aria-hidden="true"></i> Información
                médica
              </a>
              <ul className="dropdown-menu">
                {recursos.map((info) => (
                  <li key={info.id}>
                    <a
                      className="dropdown-item"
                      href={info.url}
                      target="_blank"
                    >
                      {info.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
                Documentos para pacientes
              </a>
              <ul className="dropdown-menu">
                {docs.map((doc) => (
                  <li key={doc._id}>
                    <a
                      className="dropdown-item"
                      href={doc.enlace}
                      target="_blank"
                    >
                      {doc.documento}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/login"
                onClick={() => setShow(false)}
              >
                <i className="fa fa-sign-out" aria-hidden="true"></i> Cerrar
                sesión
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MenuApp;
