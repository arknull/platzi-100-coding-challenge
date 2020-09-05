//------------ Import libraries
import React, { useState } from "react";

//------------ Import components
import Button from "../components/Button";
import Input from "../components/Input";
import Next from "../components/Next";

// calculate seconds
const calculateSeconds = (hours, mins) => {
  // seconds in an hour and a minute
  const segInHour = 3600;
  const segInMin = 60;
  return hours * segInHour + mins * segInMin;
};

const Reto3 = () => {
  const [state, setState] = useState({
    message: "",
  });
  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: Number(event.target.value),
    });
  };

  const run = () => {
    const { hours, mins } = state;
    if (isNaN(hours) || isNaN(mins)) {
      setState({
        ...state,
        message: `Los datos ingresados ${hours}, ${mins} no son válidos. <br/> Ingresa sólo números.`,
      });
    } else {
      const seconds = calculateSeconds(hours, mins);
      setState({
        ...state,
        message: `Hay <strong>${seconds}</strong> segundos en ${hours} horas y ${mins} minutos.`,
      });
    }
  };

  return (
    <>
      <h1 className="content__title">Reto Día 3 | Reloj</h1>
      <p className="content__description">
        ¿Cuántos <strong>segundos</strong> hay?
      </p>
      <form className="content__form">
        <Input name="hours" placeholder="Horas" handleChange={handleInput} />
        <Input name="mins" placeholder="Minutos" handleChange={handleInput} />
      </form>
      <Button value="Calcular" handleClick={run} />
      <p className="content__result">{state.message}</p>
      <Next link="/reloj" />
    </>
  );
};

export default Reto3;
