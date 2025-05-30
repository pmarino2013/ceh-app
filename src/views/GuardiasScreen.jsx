import React, { useEffect } from "react";
import { getGuardias } from "../helpers/guardiasFetch";

const GuardiasScreen = () => {
  useEffect(() => {
    const fetchGuardias = async () => {
      const guardias = await getGuardias();
      console.log(guardias);
    };

    fetchGuardias();
  }, []);

  return <div>GuardiasScreen</div>;
};

export default GuardiasScreen;
