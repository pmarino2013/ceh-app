import React from "react";

const CardHospitalApp = ({ hospital }) => {
  const { HOSPITALES, CEH, GVP } = hospital; // Destructure hospital properties as needed

  return (
    <div className="card h-100">
      <div className="card-header">{HOSPITALES}</div>
      <div className="card-body card-hospital">
        <h5 className="card-title">{CEH?.nombre}</h5>
        <p className="card-text">
          <b>GVP: </b>
          {GVP}
        </p>
        <div className="d-grid">
          <a
            href={`https://wa.me/${CEH?.contacto}`}
            className="btn btn-success text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i> Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardHospitalApp;
