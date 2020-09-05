//------------ Import libraries
import React, { Fragment } from "react";

//------------ Import components
import ListMenu from "./ListMenu";

const Menu = () => {
  return (
    <Fragment>
      <h1 className="content__title">
        100 retos diarios para aprender a programar
      </h1>
      <p className="content__description">
        Me estoy entrenando para ser un Frontend Developer,
        <br />
        por eso los retos los voy a resolver con <strong>Javascript</strong> y
        vinculandolos con interfaces en el navegador
      </p>
      <ol className="content__list">
        <ListMenu route="/helloworld" title="Hello World" />
        <ListMenu route="/areatriangulo" title="Area de un triangulo" />
        <ListMenu route="/reloj" title="Reloj" />
        <ListMenu route="/repitepalabra" title="Repite la palabra" />
        <ListMenu route="/vocales" title="¿Necesitamos vocales?" />
        <ListMenu route="/calculadora" title="Calculadora" />
        <ListMenu route="/piedrapapeltijeras" title="Piedra, papel o tijera" />
        <ListMenu route="/volumencilindro" title="Volumen de un cilindro" />
        <ListMenu route="/numerosecreto" title="Número secreto" />
        <ListMenu route="/piglatin" title="Traductor de Pig Latin" />
        <ListMenu route="/passwords" title="Generador de contraseñas" />
        <ListMenu route="/birthday" title="Próximo cumpleaños" />
        <ListMenu route="/propina" title="Calculadora de propina" />
        <ListMenu route="/numerosprimos" title="Números primos" />
      </ol>
    </Fragment>
  );
};

export default Menu;
