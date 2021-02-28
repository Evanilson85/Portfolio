import "./indexHeader.css";
import ButtonOpen from "../Button";
import Redesocial from "../Social";
const Header = () => {
  return (
    <header>
      <ButtonOpen />

      <section className="section">
        {/* <div className="text"> */}
        <h1>
          Olá 😁 <br />
          Meu nome é Evanilson,
          <br />
          <b> Front-End Developer</b>.
        </h1>
        <p>
          Depois de conhecer esse mundo da programação acabei apaixonando e por
          esse motivo que estou me esforçando e estudando todos os dias para que
          possa conseguir chegar até os meus objetivos.
        </p>
        {/* </div> */}
      </section>

      <Redesocial />
    </header>
  );
};

export default Header;
