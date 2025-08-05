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

export const sendEmail = (user, semana) => {
  const fecha = convertirFecha(semana);
  const datos = {
    email: user.email,
    // email: "pmarino2013@gmail.com",
    message: `Hola amigo!\nTenés asignada una guardia para la semana del ${fecha}.\nRevisa por favor la app y cualquier consulta puedes escribir al presidente.\nMuchas gracias por tu fiel servicio.`,
    name: "CEH Tucumán",
  };
  emailjs
    .send("service_hhue5xj", "template_1bj02so", datos, {
      publicKey: "LhJbnWRzz0G1gICac",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
