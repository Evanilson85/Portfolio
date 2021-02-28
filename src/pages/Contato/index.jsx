import "./indexContacts.css";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import img from "../../assets/pag/Email campaign-pana.svg";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Button />
      <main className="mainContatos">
        <div className="div" id="form">
          <form action="" method="POST" onSubmit={prevent}>
            <h2> Nome</h2>
            <input type="text" name="name" id="nome" />
            <h2>Email</h2>
            <input type="email" name="email" id="email" />
            <h2> Telefone</h2>
            <input type="number" name="fone" id="fone" />
            <h2>Sua Mensagem</h2>
            <textarea name="mensagem" id="msm" cols="20" rows="7"></textarea>
            <input className="submit" type="submit" value="Enviar" />
          </form>

          <img src={img} alt="" />
        </div>
      </main>
      {/* <div className="mainLoader">
        <div className="loader"></div>
      </div> */}
      <Footer />
    </div>
  );
};
export default Contact;
