import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import GuardiasScreen from "../views/GuardiasScreen";
import UsuariosScreen from "../views/UsuariosScreen";
import AdminGuardiasScreen from "../views/AdminGuardiasScreen";
import MenuApp from "../components/MenuApp";

const RoutesPrimary = () => {
  return (
    <>
      <MenuApp />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/guardias" element={<GuardiasScreen />} />

        <Route path="/admin/guardias" element={<AdminGuardiasScreen />} />
        <Route path="/usuarios" element={<UsuariosScreen />} />
      </Routes>
    </>
  );
};

export default RoutesPrimary;
