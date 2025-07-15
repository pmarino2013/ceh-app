const url = "http://localhost:3000/api/guardias";
const getGuardias = async () => {
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

const postGuardias = async (guardia) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(guardia),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getGuardias, postGuardias };
