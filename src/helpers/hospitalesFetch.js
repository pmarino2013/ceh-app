// const url = "http://localhost:3000/api/hospitales";
const url = "https://webserver-api.vercel.app/api/hospitales"; // Update with your actual API URL

const getHospitales = async () => {
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

const postHospital = async (hospital) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(hospital),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getHospitales, postHospital };
