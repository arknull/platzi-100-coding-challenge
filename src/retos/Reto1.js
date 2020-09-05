//------------ Import libraries
import React, { useState } from "react";

//------------ Import components
import Button from "../components/Button";
import Next from "../components/Next";

const Reto1 = () => {
  const [message, setMessage] = useState("");

  const run = (e) => {
    if (message === "") {
      setMessage("Platzi Hello World!");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <h1 className="content__title">Reto Día 1 | Hello World</h1>
      <p className="content__description">
        Que satisfactorio es el primer <strong>hello World</strong>
      </p>
      <Button value="Imprímelo" handleClick={run} />
      <p className="content__result">{message}</p>
      <Next link="/areatriangulo" />
    </>
  );
};

export default Reto1;
