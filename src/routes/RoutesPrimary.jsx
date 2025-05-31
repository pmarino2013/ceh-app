import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import GuardiasScreen from "../views/GuardiasScreen";
import UsuariosScreen from "../views/UsuariosScreen";

const RoutesPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/guardias" element={<GuardiasScreen />} />
      <Route path="/usuarios" element={<UsuariosScreen />} />
    </Routes>
  );
};

export default RoutesPrimary;
