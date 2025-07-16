const url = "https://webserver-api.vercel.app/api/auth";
// const url = "http://localhost:3000/api/auth";

const logIn = async (datos) => {
  try {
    const resp = await fetch(url + "/login", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { logIn };
