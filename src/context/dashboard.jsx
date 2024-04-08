import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [ataModal, setAtaModal] = useState(false);
    const [editeAtaModal, setEditeAtaModal] = useState(false);
    const [deleteAtaModal, setDeleteAtaModal] = useState(false);

    const openAtaModal = () => {
        setAtaModal(true);
    };
    const closeAtaModal = () => {
        setAtaModal(false);
    };

    const openEditeAtaModal = () => {
        setEditeAtaModal(true);
    };
    const closeEditeAtaModal = () => {
        setEditeAtaModal(false);
    };

    const openDeleteAtaModal = () => {
        setDeleteAtaModal(true);
    };
    const closeDeleteAtaModal = () => {
        setDeleteAtaModal(false);
    };

    return (
        <DashboardContext.Provider
            value={{
                ataModal,
                setAtaModal,
                openAtaModal,
                closeAtaModal,
                editeAtaModal,
                setEditeAtaModal,
                openEditeAtaModal,
                closeEditeAtaModal,
                deleteAtaModal,
                setDeleteAtaModal,
                openDeleteAtaModal,
                closeDeleteAtaModal,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
