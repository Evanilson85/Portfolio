import Button from "../../components/Button";
import img from "../../assets/logos/github.svg";
import "./indexProjeto.css";
import { useEffect, useState } from "react";
const Projetos = () => {
  const [scrool, setScroll] = useState(window.scrollY);

  useEffect(() => {}, [scrool]);
  const teste = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", teste);

  return (
    <header className="project" id="init">
      <Button />

      <div
        className="background"
        style={{
          backgroundImage: "url(" + sessionStorage.capa + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "210px",
          width: "100%",
          margin: "0 auto",
        }}
      ></div>
      <section className="sectionProjeto">
        <h1>{sessionStorage.title}</h1>
        <hr />
        <div style={{ height: "100%" }}>
          <img src={sessionStorage.foto} alt="" />
          <p>{sessionStorage.info}</p>
          {/* <button>
              Link do codigo:
            </button> */}
          <hr />
          <h2>Tecnologias:</h2>
          <p>{sessionStorage.tecnologia}</p>

          <div className="link">
            <button onClick={() => window.open(sessionStorage.link)}>
              {sessionStorage.title}

              <img src={img} alt="" />
            </button>
          </div>
          <hr />
        </div>
      </section>
    </header>
  );
};
export default Projetos;
