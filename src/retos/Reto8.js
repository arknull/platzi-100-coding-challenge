import React, { Fragment } from "react";

const Reto8 = () => {
  return (
    <Fragment>
      <h1 className="content__title">Reto Día 8 | Volumen de un cilindro</h1>
      <p className="content__description">
        ¿Como se haya el <strong>volumen</strong> de un cilindro?
      </p>
      <form className="content__form">
        <input
          className="content__input"
          id="radio"
          type="text"
          placeholder="Radio del círculo"
        />
        <input
          className="content__input"
          id="height"
          type="text"
          placeholder="Altura"
        />
      </form>
      <button className="button">Calcular</button>
      <p className="content__result" id="result"></p>
      <a className="next" href="./9-numeroSecreto.html">
        >
      </a>
    </Fragment>
  );
};

export default Reto8;
