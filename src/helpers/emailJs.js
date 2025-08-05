import emailjs from "@emailjs/browser";

// const datos = {
//   email: "pmarino2013@gmail.com",
//   message: "Hola mundo",
//   name: "CEH Tucumán",
// };
export function convertirFecha(formatoISO) {
  const [anio, mes, dia] = formatoISO.split("-");
  return `${dia}-${mes}-${anio}`;
}

export const sendEmail = (guardia) => {
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
        alert("Mensaje enviado!!");
      },
      (error) => {
        alert("FAILED...", error.text);
      }
    );
};
