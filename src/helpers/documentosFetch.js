// const url = "http://localhost:3000/api/guardias";
const url = "https://webserver-api.vercel.app/api/documentos"; // Update with your actual API URL
const getDocumentos = async () => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(url, {
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

const postDocumento = async (documento) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(documento),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getDocumentos, postDocumento };
