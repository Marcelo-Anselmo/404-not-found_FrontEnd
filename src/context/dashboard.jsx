import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [ataModal, setAtaModal] = useState(false);

  const openAtaModal = () => {
    setAtaModal(true);
  };
  const closeAtaModal = () => {
    setAtaModal(false);
  };

  return (
    <DashboardContext.Provider
      value={{ ataModal, setAtaModal, openAtaModal, closeAtaModal }}>
      {children}
    </DashboardContext.Provider>
  );
};
