import "./indexMenu.css";
import logo from "../../assets/logos/logo.png";
import { HashLink as Link } from "react-router-hash-link";
const Menu = (props) => {
  const remove = props.remove;

  return (
    <nav className={props.menu} id={props.dark ? "black" : ""}>
      {/* <div className={props.dark}></div> */}
      <ul className="ul">
        <div className="logo">
          <Link smooth to="/#" onClick={remove}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="lis">
          <li>
            <Link smooth to="/#sobre" onClick={remove}>
              Sobre
            </Link>
          </li>
          <li>
            <Link smooth to="/#projetos" onClick={remove}>
              Projetos
            </Link>
          </li>
          <li>
            <Link smooth to="/form/contato" onClick={remove}>
              Contato
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
