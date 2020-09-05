//------------ Import libraries
import React, { useState } from "react";

//------------ Import components
import Button from "../components/Button";
import Input from "../components/Input";
import Next from "../components/Next";

// calculate the area of the triangle with the three sides's dimensions
const calculateArea = (lado1, lado2, lado3) => {
  let semiperimeter = (lado1 + lado2 + lado3) / 2;
  return Math.sqrt(
    Math.abs(
      semiperimeter *
        (semiperimeter - lado1) *
        (semiperimeter - lado2) *
        (semiperimeter - lado3)
    )
  ).toFixed(2);
};

// validate the type of the triangle
const validateTriangleType = (lado1, lado2, lado3) => {
  if (lado1 === lado2 && lado2 === lado3 && lado3 === lado1) {
    return "equilátero";
  } else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {
    return "escaleno";
  } else {
    return "isóceles";
  }
};

const Reto2 = () => {
  // Set the state from Inputs
  let [sides, setSides] = useState({ message: "" });
  const handleInput = (e) => {
    setSides({
      ...sides,
      [e.target.name]: Number(e.target.value),
    });
  };

  // Run the program to calculate the area and type
  const run = () => {
    const { lado1, lado2, lado3 } = sides;

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
      setSides({
        ...sides,
        message: `Los datos ingresados ${lado1}, ${lado2}, ${lado3} no son válidos.
        Ingresa sólo números.`,
      });
    } else {
      let area = calculateArea(lado3, lado2, lado3);
      let triangleType = validateTriangleType(lado1, lado2, lado3);
      setSides({
        ...sides,
        message: `El área del triágulo es ${area} m2.
        Es un triángulo ${triangleType}.`,
      });
    }
  };

  return (
    <>
      <h1 className="content__title">Reto Día 2 | Área de un Triángulo</h1>
      <p className="content__description">
        ¿Cuál es el <strong>área</strong> de un triángulo? ¿qué{" "}
        <strong>tipo</strong> de triángulo es?
      </p>
      <form className="content__form">
        <Input name="lado1" placeholder="Lado 1" handleChange={handleInput} />
        <Input name="lado2" placeholder="Lado 2" handleChange={handleInput} />
        <Input name="lado3" placeholder="Lado 3" handleChange={handleInput} />
      </form>
      <Button value="Calcular" handleClick={run} />
      <p className="content__result">{sides.message}</p>
      <Next link="/reloj" />
    </>
  );
};

export default Reto2;
