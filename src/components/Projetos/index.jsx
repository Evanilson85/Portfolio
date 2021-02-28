import "./indexProjetos.css";
import img from "../../assets/capa/deezer.jpg";
import imgDeezer from "../../assets/projetos/deezer.jpg";

import ferrariCapa from "../../assets/capa/ferrari.jpg";
import ferrari from "../../assets/projetos/ferrari.jpg";

import burguerCapa from "../../assets/capa/burguer.jpg";
import burger from "../../assets/projetos/burguer.jpg";

import amongCapa from "../../assets/capa/among-us.png";
import among from "../../assets/projetos/amoug.jpg";

import esportsCapa from "../../assets/capa/esportes.jpg";
import esports from "../../assets/projetos/esportes.jpg";

import net from "../../assets/capa/netflix.jpg";
import tes from "../../assets/projetos/netflix.jpg";

// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Projetos = () => {
  const projetos = [
    {
      id: 1,
      imagen: img,
      project: imgDeezer,
      title: "Deezer",
      tecnologia: ["Html5, css3, javaScript"],
      p:
        "Deezer-Clone consumindo uma API (axios) do proprio Deezer, que retorna alguns albuns de artistas e musicas. Desenvolvido com HTML5, CSS3 e JavaScript,  totalmente responsivo.",
      link: "https://deezer-clone-1f7fa.web.app/",
    },
    {
      id: 2,
      imagen: net,
      project: tes,
      title: "Netflix",
      tecnologia: ["Html5, css3, javaScript, React.Js"],
      p:
        "Site Netflix-clone pagina inicial. Desenvolvido com React.js e consumindo API de filmes, usando react-router para as rotas, totalmente responsivo.",
      link: "https://github.com/Evanilson85/Netflix-Clone-React",
    },
    {
      id: 3,
      imagen: ferrariCapa,
      project: ferrari,
      title: "Ferrari",
      tecnologia: ["Html5, css3, javaScript, Next.Js, Mysql, Adonis"],
      p: ` Site da Ferrari, \n  Foi desenvolvido com Professores no curso do Hcode-lab, com tela de cadastro, login e administrativo. Front-End usamos Next.js e Back-End Adonis com Node.js.`,
      link: "https://github.com/Evanilson85/hcodelab-next2505",
    },
    {
      id: 4,
      imagen: burguerCapa,
      project: burger,
      title: "Burger",
      tecnologia: ["Html5, css3, javaScript, Next.Js, Mysql, Adonis"],
      p:
        "Site de uma Hamburgueria, Foi desenvolvido em Grupo no curso do Hcode-lab, com tela de cadastro, login e administrativo. Front-End usamos Next.js e Back-End Adonis com Node.js.",
      link: "https://hcode-burger-next.now.sh/",
    },
    {
      id: 5,
      imagen: amongCapa,
      project: among,
      title: "Among Us",
      tecnologia: ["Html5, css3"],
      p: `Você conhece o jogo Among Us?
      É um jogo muito bom 😁 e por esse motivo fiz um dos desafios 31 Dias CSS.
      O projeto foi um desenho do personagem de Among us desenvolvido em HTML5 e CSS3.`,
      link: "https://github.com/Evanilson85/AmongUs-CSS3",
    },
    {
      id: 6,
      imagen: esportsCapa,
      project: esports,
      title: "Esportes",
      tecnologia: ["Html5, css3, javaScript, Next.Js, Mysql, Adonis"],
      p: ` Site da Hsport Club,  Foi desenvolvido no curso do Hcode-lab como projeto individual, com tela de cadastro, login e administrativo. Front-End usei Next.js e Back-End Adonis com Node.js.`,
      link: "https://h-sport-next.vercel.app/",
    },
  ];

  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>
      <div className="new">
        {projetos.map((item, key) => (
          <section key={key} className="container">
            <div
              className="content"
              style={{
                backgroundImage: "url(" + item.imagen + " )",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <h3>{item.title}</h3>
            <button>
              <Link
                onMouseOver={() => {
                  sessionStorage.setItem("title", item.title);
                  sessionStorage.setItem("capa", item.imagen);
                  sessionStorage.setItem("info", item.p);
                  sessionStorage.setItem("tecnologia", item.tecnologia);
                  sessionStorage.setItem("foto", item.project);
                  sessionStorage.setItem("link", item.link);
                }}
                to={`/projeto/${item.id}#init`}
              >
                +
              </Link>
            </button>
          </section>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Projetos;
