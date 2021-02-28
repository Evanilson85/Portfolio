import { useEffect, useState } from "react";
import Menu from "../Menu";
import "./button.css";

const teste = () => {
  alert("Ola teste");
};

const Button = () => {
  const [menu, setMenu] = useState("");
  const [dark, setDark] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        setDark(true);
      } else {
        setDark(false);
      }
    };

    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const openMenu = () => {
    if (!menu) {
      if (window.innerWidth < 767) {
        setMenu("open");
        setChecked(true);
      } else {
        return false;
      }
    } else {
      setMenu("");
      setChecked(false);
    }
  };

  return (
    <div className="bt">
      <Menu menu={menu} dark={dark} remove={openMenu} />
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        name=""
        id="click"
      />
      <label htmlFor="click" className="open" onClick={openMenu}>
        <div className="menu" id={dark ? "black" : ""}>
          <span className="burgur"></span>
        </div>
      </label>
    </div>
  );
};

export default Button;
