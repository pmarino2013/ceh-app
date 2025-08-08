const CradUserApp = ({ usuario }) => {
  return (
    <div className="card mb-3 card-user h-100">
      <div className="row g-0">
        <div className="col-12 col-md-4 text-center">
          <img
            src={usuario.img}
            className="img-fluid rounded m-2"
            alt={usuario.nombre}
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="card-body text-center ">
            <h5 className="card-title">{usuario.nombre}</h5>
            <small className="card-text">{usuario.email}</small>
            <p className="card-text">
              <a
                href={`https://wa.me/${usuario.contacto}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body-secondary">
                  <i
                    className="fa fa-whatsapp text-success"
                    aria-hidden="true"
                  ></i>{" "}
                  {usuario.contacto}
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CradUserApp;
