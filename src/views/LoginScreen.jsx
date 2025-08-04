import { useForm } from "react-hook-form";
import { logIn } from "../helpers/loginAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

import logo from "../../public/logo_ceh.jpeg";
const LoginScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const agregarUserId = useStore((state) => state.setUserId);

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await logIn(data);

    if (respuesta?.token) {
      localStorage.setItem("token", JSON.stringify(respuesta.token));

      agregarUserId(respuesta.usuario);

      navigate("/");
    } else {
      setMessage(respuesta.msg);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-8 ">
          <div className="mb-3 text-center">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img className="logo" src={logo} alt="logo" />
              <h1 className="title-principal ">CEH</h1>
            </div>
            <small>Tucumán</small>
          </div>
          <div className="card p-4 card-ceh text-bg-dark">
            <h3 className="text-center mb-4">Iniciar sesión</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="tucorreo@example.com"
                />
                {errors.email && (
                  <p className="text-danger">El dato es obligatorio</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-danger">El dato es obligatorio</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-outline-light w-100"
                disabled={loading ? true : false}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
          {message && (
            <div className="mt-1 text-center">
              <small className="text-danger ">{message}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
