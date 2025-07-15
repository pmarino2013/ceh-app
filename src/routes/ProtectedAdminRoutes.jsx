import { Navigate } from "react-router-dom";
import useStore from "../store/store";

const ProtectedAdminRoutes = ({ children }) => {
  const user = useStore((state) => state.user);

  if (user?.rol === "ADMIN_ROLE") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedAdminRoutes;
