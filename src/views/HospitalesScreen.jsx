import { useEffect, useState } from "react";
import { getHospitales } from "../helpers/hospitalesFetch";
import CardHospitalApp from "../components/CardHospitalApp";

const HospitalesScreen = () => {
  const [datos, setDatos] = useState({
    hospitales: [],
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    fetchHospitales();
  }, []);

  useEffect(() => {
    searchHospital();
  }, [textValue]);

  const fetchHospitales = async () => {
    const { hospitales, total } = await getHospitales();
    setDatos({
      hospitales,
      total,
    });
    localStorage.setItem("hospitales", JSON.stringify(hospitales));
    localStorage.setItem("total", total);
    setLoading(false);
  };

  const searchHospital = () => {
    const hospitales = JSON.parse(localStorage.getItem("hospitales"));
    const total = JSON.parse(localStorage.getItem("total"));

    if (textValue.trim() === "") {
      setDatos({
        hospitales,
        total,
      });
    } else {
      const filteredHospitales = hospitales.filter((hospital) =>
        hospital.HOSPITALES.toLowerCase().includes(textValue.toLowerCase())
      );
      setDatos({
        hospitales: filteredHospitales,
        total: filteredHospitales.length,
      });
    }
  };
  const buscarHospitales = (e) => {
    e.preventDefault();
    searchHospital();
  };

  return (
    <div className="container">
      <div className="row my-2 text-center pt-3">
        <div className="col">
          <h1 className="title-principal">CEH</h1>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row text-center">
            <div className="col">
              <h3>{datos.total} Hospitales</h3>
            </div>
          </div>

          <div className="row">
            <div className="col my-3">
              <form onSubmit={buscarHospitales}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Hospital"
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
              </form>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {datos.hospitales.map((hospital) => (
              <div className="col" key={hospital._id}>
                <CardHospitalApp hospital={hospital} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HospitalesScreen;
