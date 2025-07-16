// const url = "http://localhost:3000/api/usuarios";

const url = "https://webserver-api.vercel.app/api/usuarios"; // Update with your actual API URL
const getUsuarios = async () => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(url + "?limite=20", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUsuario = async (id) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getUsuarios, getUsuario };
