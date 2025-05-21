import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

const MenuApp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span  onClick={handleShow}>
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
            <li><i className="fa fa-sign-out" aria-hidden="true"></i>Cerrar sesión</li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuApp;
