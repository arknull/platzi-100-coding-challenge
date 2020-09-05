import React, { Fragment } from "react";

const Reto9 = () => {
  return (
    <Fragment>
      <h1 className="content__title">Reto Día 9 | Número secreto</h1>
      <p className="content__description">
        Encuentra el número secreto.
        <br /> Te diremos si es <strong>mayor o menor</strong> hasta que lo
        encuentres.
      </p>
      <form className="content__form hide" id="form">
        <input
          className="content__input"
          id="number"
          type="text"
          placeholder="Escribe un número"
        />
      </form>
      <button className="button" id="init">
        Iniciar Juego
      </button>
      <p className="content__result" id="result"></p>
      <a className="next" href="/">
        >
      </a>
    </Fragment>
  );
};

export default Reto9;
