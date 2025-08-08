import emailjs from "@emailjs/browser";
import { useState } from "react";
import { convertirFecha } from "../helpers/emailJs";

const CardGuardiaApp = ({ guardia, user }) => {
  const [respMail, setRespMail] = useState({
    loading: false,
    message: "",
  });

  const [show, setShow] = useState(false);

  const sendEmail = (guardia) => {
    setRespMail({
      loading: true,
      message: "Enviando mail...",
    });
    const fecha = convertirFecha(guardia.SEMANA);
    const datos = {
      email: guardia.ASIGNADO.email,
      // email: "pmarino2013@gmail.com",
      message: `Hola ${guardia.ASIGNADO.nombre}!\nTenés asignada una guardia para la semana del ${fecha}.\nRevisa por favor la app y cualquier consulta puedes escribir al presidente.\nMuchas gracias por tu fiel servicio.`,
      name: "CEH Tucumán",
    };
    emailjs
      .send("service_hhue5xj", "template_1bj02so", datos, {
        publicKey: "LhJbnWRzz0G1gICac",
      })
      .then(
        () => {
          setRespMail({
            loading: false,
            message: "Correo enviado con éxito!!",
          });
          setShow(true);

          setTimeout(() => {
            setShow(false);
          }, 2000);
        },
        (error) => {
          setRespMail({
            loading: false,
            message: `FAILED... ${error.text}`,
          });
          setShow(true);

          setTimeout(() => {
            setShow(false);
          }, 2000);
        }
      );
  };

  return (
    <div className="card mb-3 card-guardia" key={guardia._id}>
      <div className="card-header">
        Semana: {convertirFecha(guardia.SEMANA)}
      </div>
      <div className="card-body">
        <h5 className="card-title">Asignado: {guardia.ASIGNADO.nombre}</h5>
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

        {guardia?.AUXILIAR && (
          <>
            <hr />
            <h5 className="card-title mt-2">
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
        {user?.rol === "ADMIN_ROLE" && (
          <div className="d-flex justify-content-end mb-2  ">
            <button
              className="btn btn-primary"
              onClick={() => sendEmail(guardia)}
              disabled={respMail.loading}
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              Recordatorio
            </button>
          </div>
        )}
      </div>
      {show && (
        <div className="overlay d-flex justify-content-center align-items-center">
          <span className="fs-4">{respMail.message}</span>
        </div>
      )}
    </div>
  );
};

export default CardGuardiaApp;
