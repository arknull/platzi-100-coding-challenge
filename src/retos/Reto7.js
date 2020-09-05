import React, { Fragment } from "react";

const Reto7 = () => {
  return (
    <Fragment>
      <h1 className="content__title">Reto Día 7 | Piedra Papel o Tijeras</h1>
      <p className="content__description">
        <strong>Escoje</strong> bien, la máquina es un duro rival. <br /> Gana
        el que complete <strong>3 victorias</strong>.
      </p>
      <form className="content__form">
        <select className="content__input" id="userOption" name="userOption">
          <option value="1">Piedra</option>
          <option value="2">Papel</option>
          <option value="3">Tijeras</option>
        </select>
      </form>
      <button className="button">Jugar</button>
      <p className="content__result" id="randomOption"></p>
      <p className="content__result msg" id="message"></p>
      <p className="content__result msg" id="score"></p>
      <a className="next" href="./8-valumencilindro.html">
        >
      </a>
    </Fragment>
  );
};

export default Reto7;
