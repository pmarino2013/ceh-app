import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import GuardiasScreen from "../views/GuardiasScreen";

const RoutesPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/guardias" element={<GuardiasScreen />} />
    </Routes>
  );
};

export default RoutesPrimary;
