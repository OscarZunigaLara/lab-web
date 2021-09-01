//A01376466_A01746926_A01746769_A01654827

import React, { useState } from "react";
import { AgregaGenero } from "./componentes/AgregaGenero";
import { ResultadoVideojuegos } from "./componentes/ResultadoVideojuegos";

export const VideojuegosApp = () => {
  const [generos, setGeneros] = useState(["action"]);

  const agregaGenero = () => {
    setGeneros((estadoActualGeneros) => [
      ...estadoActualGeneros,
      "Nuevo Género",
    ]);
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Gamebook</h1>
          <p className="lead">
            ¡Bienvenido a la página donde podrás consultar información de
            videojuegos!
          </p>
          <AgregaGenero setGeneros={setGeneros} />
          <ol className="list-group list-group-numbered">
            {generos.map((genero) => {
              return <ResultadoVideojuegos key={genero} genero={genero} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
