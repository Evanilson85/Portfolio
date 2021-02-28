import "./indexFooter.css";
import li from "../../assets/logos/linkedin.svg";
import ins from "../../assets/logos/instagram.svg";
import git from "../../assets/logos/github.svg";
import wh from "../../assets/logos/whatsapp.svg";
import email from "../../assets/logos/email.svg";
const Footer = () => {
  return (
    <footer>
      <ul className="menuSocialFooter">
        <div className="hr"></div>
        <li>
          <a href="https://github.com/Evanilson85" target="blanck">
            <img className="color" src={git} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/evanilson-4561731a4/"
            target="blanck"
          >
            <img className="color" src={li} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="mailto:evanilsonmanoel85@gmail.com" target="blanck">
            <img className="color" src={email} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5538988247772&text=Oi%20Tudo%20Bem%3F"
            target="blanck"
          >
            <img className="color" src={wh} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/evanilson.freitas7/"
            target="blanck"
          >
            <img className="color" src={ins} alt="" />
          </a>
        </li>

        <div className="hr"></div>
      </ul>

      <h4>© 2021 All rights reserved.</h4>
    </footer>
  );
};
export default Footer;
