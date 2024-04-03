import Header from "../components/Header/Header";
import Members from "../components/Members/Members";

export const DashboardPage = () => {
  return (
    <div>
      <Header />
      <section className="mainContent">
        <h1>Autentica Ulife</h1>
        <div className="ataSection">
          <button className="criaAta">Criar Ata</button>
        </div>
      </section>
      <Members />
    </div>
  );
};
