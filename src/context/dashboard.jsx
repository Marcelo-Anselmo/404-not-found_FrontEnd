import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [ataModal, setAtaModal] = useState(false);
    const [editeAtaModal, setEditeAtaModal] = useState(false);
    const [deleteAtaModal, setDeleteAtaModal] = useState(false);
    const [createAlunoModal, setCreateAlunoModal] = useState(false);
    const [editeAlunoModal, setEditeAlunoModal] = useState(false);
    const [deleteAlunoModal, setDeleteAlunoModal] = useState(false);

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

    const openCreateAlunoModal = () => {
        setCreateAlunoModal(true);
    };
    const closeCreateAlunoModal = () => {
        setCreateAlunoModal(false);
    };

    const openEditeAlunoModal = () => {
        setEditeAlunoModal(true);
    };
    const closeEditeAlunoModal = () => {
        setEditeAlunoModal(false);
    };

    const openDeleteAlunoModal = () => {
        setDeleteAlunoModal(true);
    };
    const closeDeleteAlunoModal = () => {
        setDeleteAlunoModal(false);
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
                createAlunoModal,
                setCreateAlunoModal,
                openCreateAlunoModal,
                closeCreateAlunoModal,
                editeAlunoModal,
                setEditeAlunoModal,
                openEditeAlunoModal,
                closeEditeAlunoModal,
                deleteAlunoModal,
                setDeleteAlunoModal,
                openDeleteAlunoModal,
                closeDeleteAlunoModal,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
