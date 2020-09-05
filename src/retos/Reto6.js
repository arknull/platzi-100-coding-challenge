import React, { Fragment } from "react";

const Reto6 = () => {
  return (
    <Fragment>
      <h1 className="content__title">Reto Día 6 | Calculadora</h1>
      <p className="content__description">
        ¿Qué <strong>números</strong> quieres calcular?
      </p>
      <form className="content__form">
        <input
          className="content__input"
          id="number1"
          type="text"
          placeholder="Número 1"
        />
        <select className="content__input" id="operation" name="operation">
          <option value="+">suma</option>
          <option value="-">resta</option>
          <option value="*">multiplica</option>
          <option value="/">divide</option>
        </select>
        <input
          className="content__input"
          id="number2"
          type="text"
          placeholder="Número 2"
        />
      </form>
      <button className="button">Calcular</button>
      <p className="content__result--big" id="result"></p>
      <a className="next" href="./7-piedraPapelTijera.html">
        >
      </a>
    </Fragment>
  );
};

export default Reto6;
