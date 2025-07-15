import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import GuardiasScreen from "../views/GuardiasScreen";
import UsuariosScreen from "../views/UsuariosScreen";
import AdminGuardiasScreen from "../views/AdminGuardiasScreen";
import MenuApp from "../components/MenuApp";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import HospitalesScreen from "../views/HospitalesScreen";

const RoutesPrimary = () => {
  return (
    <>
      <MenuApp />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/guardias" element={<GuardiasScreen />} />
        <Route path="/hospitales" element={<HospitalesScreen />} />


        <Route
          path="/admin/guardias"
          element={
            <ProtectedAdminRoutes>
              <AdminGuardiasScreen />
            </ProtectedAdminRoutes>
          }
        />
        <Route path="/usuarios" element={<UsuariosScreen />} />
      </Routes>
    </>
  );
};

export default RoutesPrimary;
