import { createContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [ataModal, setAtaModal] = useState(false);
    const [editeAtaModal, setEditeAtaModal] = useState(false);
    const [deleteAtaModal, setDeleteAtaModal] = useState(false);
    const [createAlunoModal, setCreateAlunoModal] = useState(false);
    const [editeAlunoModal, setEditeAlunoModal] = useState(false);
    const [deleteAlunoModal, setDeleteAlunoModal] = useState(false);
    const [ataOnline, setAtaOnline] = useState([]);
    const [idAluno, setIdAluno] = useState("");

    const ataId = localStorage.getItem("ataId");

    useEffect(() => {
        getAtaID(ataId);
    }, []);

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

    async function createAta(data) {
        await Api.post("/professor/", data)
            .then((res) => {
                toast.success("Ata criada com sucesso!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getAtaID(res.data.id);
                localStorage.setItem("ataId", res.data.id);
                closeAtaModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao criar ATA!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    async function getAtaID(id) {
        await Api.get(`/professor/${id}/`)
            .then((res) => {
                setAtaOnline(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getAlunoId(alunoId) {
        setIdAluno(alunoId);
    }

    async function createAluno(data, profId) {
        await Api.post(`/aluno/${profId}/`, data)
            .then((res) => {
                toast.success("Aluno adicionado com sucesso!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getAtaID(profId);
                closeCreateAlunoModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao adicionar Aluno!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    async function editeAta(data, profId) {
        await Api.patch(`/professor/${profId}/`, data)
            .then((res) => {
                toast.success("Ata atualizada!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getAtaID(profId);
                closeEditeAtaModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao atualizar ata!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    async function deleteAta(profId) {
        await Api.delete(`/professor/${profId}/`)
            .then((res) => {
                toast.success("Ata deletada!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                localStorage.removeItem("ataId");
                setAtaOnline([]);
                closeDeleteAtaModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao excluir ata!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    async function editeAluno(data, profId) {
        await Api.patch(`/alunoID/${idAluno}/`, data)
            .then((res) => {
                toast.success("Aluno atualizado!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getAtaID(profId);
                closeEditeAlunoModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao atualizar aluno!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

    async function deleteAluno(profId) {
        await Api.delete(`/alunoID/${idAluno}/`)
            .then((res) => {
                toast.success("Aluno deletado!", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "colored",
                });
                getAtaID(profId);
                closeDeleteAlunoModal();
            })
            .catch(
                (err) => (
                    console.log(err),
                    toast.error("Falha ao deletar aluno!", {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "dark",
                    })
                )
            );
    }

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
                createAta,
                getAtaID,
                ataOnline,
                setAtaOnline,
                createAluno,
                editeAta,
                deleteAta,
                editeAluno,
                idAluno,
                getAlunoId,
                deleteAluno,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};