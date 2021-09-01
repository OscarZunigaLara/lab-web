//A01376466_A01746926_A01746769_A01654827

import React, { useState, useEffect } from "react";
import { InfoVideojuegos } from "./InfoVideojuegos";
export const ResultadoVideojuegos = ({ genero }) => {
  const [infoJuegos, setInfoJuegos] = useState([]);

  useEffect(() => {
    getVideojuegos();
  }, []);

  const getVideojuegos = async () => {
    const url =
      "https://api.rawg.io/api/games?key=6e6d676e6d0f49c9a78783fd3ca56cb7&genres=action";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const juegos = results.map((juego) => {
      return {
        id: juego.id,
        nombre: juego.name,
        imagen: juego.background_image,
        rating: juego.rating,
        metacritic: juego.metacritic,
      };
    });
    setInfoJuegos(juegos);
  };

  return (
    <>
      <h3 className="card-title">{genero}</h3>
      <div className="d-flex flex-wrap">
        {infoJuegos.map(({ id, nombre, imagen, rating, metacritic }) => (
          <InfoVideojuegos
            key={id}
            nombre={nombre}
            imagen={imagen}
            rating={rating}
            metacritic={metacritic}
          />
        ))}
      </div>
    </>
  );
};
