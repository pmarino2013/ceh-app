import { useState } from "react";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

const MenuApp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fixed-top">
      <span onClick={handleShow}>
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title-principal">CEH</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>Perfil</li>
            <li>Sobre nosotros</li>
            <li>
              <Link to="/login" onClick={() => setShow(false)}>
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
