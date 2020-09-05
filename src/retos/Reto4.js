import React, { Fragment } from "react";

const Reto4 = () => {
  return (
    <Fragment>
      <h1 className="content__title">Reto Día 4 | Repite la palabra</h1>
      <p className="content__description">
        Ingresa un <strong>mensaje</strong> y la <strong>cantidad</strong> de
        veces que quieres que se repita
      </p>
      <form className="content__form">
        <input
          className="content__input"
          id="msg"
          type="text"
          placeholder="Mensaje"
        />
        <input
          className="content__input"
          id="repeat"
          type="text"
          placeholder="Repeticiones"
        />
      </form>
      <button className="button">Calcular</button>
      <p className="content__result--multiple" id="result"></p>
      <a className="next" href="./5-necesitamosVocales.html">
        >
      </a>
    </Fragment>
  );
};

export default Reto4;
