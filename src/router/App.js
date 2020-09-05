//------------ Import libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//------------ Import components
import Layout from "../layout/Layout";
import Menu from "../components/Menu";
import Reto1 from "../retos/Reto1";
import Reto2 from "../retos/Reto2";
import Reto3 from "../retos/Reto3";
import Reto4 from "../retos/Reto4";
import Reto5 from "../retos/Reto5";
import Reto6 from "../retos/Reto6";
import Reto7 from "../retos/Reto7";
import Reto8 from "../retos/Reto8";
import Reto9 from "../retos/Reto9";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/helloworld" component={Reto1} />
          <Route exact path="/areatriangulo" component={Reto2} />
          <Route exact path="/reloj" component={Reto3} />
          <Route exact path="/repitepalabra" component={Reto4} />
          <Route exact path="/vocales" component={Reto5} />
          <Route exact path="/calculadora" component={Reto6} />
          <Route exact path="/piedrapapeltijeras" component={Reto7} />
          <Route exact path="/volumencilindro" component={Reto8} />
          <Route exact path="/numerosecreto" component={Reto9} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
