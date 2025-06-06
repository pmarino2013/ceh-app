import React, { useEffect, useState } from "react";
import { getUsuarios } from "../helpers/usuariosFetch"; // Import helpers if needed
import { postGuardias } from "../helpers/guardiasFetch";
import { useForm } from "react-hook-form";

const AdminGuardiasScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    traerDatosUsuarios();
  }, []);

  const traerDatosUsuarios = async () => {
    const respuesta = await getUsuarios();

    setUsuarios(respuesta.usuarios);
  };

  const onSubmit = async (data) => {
    const respuesta = await postGuardias(data);

    if (respuesta) {
      alert("Guardia guardada correctamente");
      reset(); // Reset the form after successful submission
      setFocus("SEMANA"); // Set focus back to the SEMANA field
      // Optionally, you can reset the form or redirect
    } else {
      alert("Error al guardar la guardia");
      reset(); // Reset the form after unsuccessful submission
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>CEH</h1>
          <h2>Gestión de Guardias</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Semana</label>
              <input
                type="date"
                className="form-control"
                {...register("SEMANA", { required: true })}
              />
              {errors.SEMANA && (
                <div className="text-danger">
                  <p>Campo obligatorio</p>
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="asignado" className="form-label">
                Asignado
              </label>

              <select
                {...register("ASIGNADO", { required: true })}
                className="form-select"
              >
                <option value="">Seleccione un asignado</option>
                {usuarios.map((usuario) => (
                  <option key={usuario._id} value={usuario._id}>
                    {usuario.nombre}
                  </option>
                ))}
              </select>

              {errors.ASIGNADO && (
                <div className="text-danger">
                  <p>Campo obligatorio</p>
                </div>
              )}
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-outline-light">
                Agregar Guardia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminGuardiasScreen;
