import "./indexErro.css";
import erro from "../../assets/pag/404.svg";
import Button from "../../components/Button";
const Erro = () => {
  return (
    <div>
      <Button />
      <main className="mainErro">
        <img src={erro} alt="" />
        <h1>Pagina não encontrada</h1>
      </main>
    </div>
  );
};
export default Erro;
