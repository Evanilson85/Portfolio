import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Projetos from "../pages/Projetos/index.jsx";
import Erro from "../pages/404/index.jsx";
import Contato from "../pages/Contato/index.jsx";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projeto/:id" component={Projetos} />
        <Route exact path="/form/contato" component={Contato} />

        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}
