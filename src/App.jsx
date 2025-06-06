import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeScreen from './views/HomeScreen'
// import MenuApp from "./components/MenuApp";
import LoginScreen from "./views/LoginScreen";
import RoutesPrimary from "./routes/RoutesPrimary";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesPrimary />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
