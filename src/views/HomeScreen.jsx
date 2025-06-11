import { Link } from "react-router-dom";
import useStore from "../store/store";
import { getUsuario } from "../helpers/usuariosFetch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const setUser = useStore((state) => state.agregarUser);

  useEffect(() => {
    if (userId) {
      fetchUser();
    } else {
      navigate("/login");
      console.log("No hay id");
    }
  }, [userId]);

  const fetchUser = async () => {
    const user = await getUsuario(userId);

    setUser(user.usuario);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-5">
          <h1 className="title-principal">CEH</h1>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-3 g-3">
        <div className="col">
          <Link to="/usuarios" className="text-decoration-none">
            <div className="card card-ceh text-bg-dark mb-3">
              <div className="card-header">Usuarios</div>
              <div className="card-body text-center mb-3">
                <i className="fa fa-users fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/guardias" className="text-decoration-none">
            <div className="card card-ceh text-bg-dark mb-3">
              <div className="card-header">GUARDIA</div>
              <div className="card-body text-center mb-3">
                <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="card card-ceh text-bg-dark mb-3">
            <div className="card-header">HOSPITALES</div>
            <div className="card-body text-center mb-3">
              <i className="fa fa-hospital-o fa-5x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-ceh text-bg-dark mb-3">
            <div className="card-header">LISTA MÉDICOS</div>
            <div className="card-body text-center mb-3">
              <i className="fa fa-user-md fa-5x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
