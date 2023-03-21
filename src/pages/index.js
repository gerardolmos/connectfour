import React, { useState, useEffect } from "react";
import FlechaRoja from "../assets/flecharoja.svg";
import FlechaAmarilla from "../assets/flechaamarilla.svg";
import FichaRoja from "../assets/ficharoja.svg";
import FichaAmarilla from "../assets/fichaamarilla.svg";
import Tablero from "../assets/tablero.svg";
import { comprobacionJuegoGanado } from "./comprobacionJuegoGanado";
import { jugadaOrdenador } from "./jugadaOrdenador";
import PanelRojoGana from "../components/PanelRojoGana";
import PanelAmarilloGana from "../components/PanelAmarilloGana";

const Index = () => {
  const [jugador, setJugador] = useState("rojo");
  const [celdaEnRojo, setCeldaEnRojo] = useState(
    <FichaRoja className="animate-fromTop w-36 h-36" />
  );
  const [celdaEnAmarillo, setCeldaEnAmarillo] = useState(
    <FichaAmarilla className="animate-fromTop w-36 h-36" />
  );

  const [juegoRojoGanado, setjuegoRojoGanado] = useState(false);
  const [juegoAmarilloGanado, setJuegoAmarilloGanado] = useState(false);
  const [turno, setTurno] = useState(true);

  const popupGanador = (ganador) => {
    if (ganador === "rojo") {
      setjuegoRojoGanado(true);
    } else if (ganador === "amarillo") {
      setJuegoAmarilloGanado(true);
    } else {
      return null;
    }
  };

  const [celdasTablero, setCeldasTablero] = useState([
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
    { ficha: "", ocupado: "" },
  ]);

  const handleLanzar = (posicion) => {
    console.log(posicion);
    for (let index = posicion; index <= celdasTablero.length; index += 7) {
      if (celdasTablero[index].ocupado !== "") {
        break;
      }
      if (
        index + 7 <= celdasTablero.length &&
        index + 7 < 42 &&
        celdasTablero[index + 7].ocupado === ""
      ) {
        continue;
      }
      if (index + 7 === 42) {
        const nuevasCeldasTablero = celdasTablero;
        nuevasCeldasTablero[35].ocupado = jugador;
        nuevasCeldasTablero[35].ficha =
          jugador === "rojo" ? celdaEnRojo : celdaEnAmarillo;
        setCeldasTablero(nuevasCeldasTablero);
        popupGanador(comprobacionJuegoGanado(celdasTablero));
        cambioDeJugador();
        break;
      } else {
        const nuevasCeldasTablero = celdasTablero;
        nuevasCeldasTablero[index].ocupado = jugador;
        nuevasCeldasTablero[index].ficha =
          jugador === "rojo" ? celdaEnRojo : celdaEnAmarillo;
        setCeldasTablero(nuevasCeldasTablero);
        popupGanador(comprobacionJuegoGanado(celdasTablero));
        cambioDeJugador();
      }
    }
  };

  const cambioDeJugador = () => {
    if (jugador === "rojo") {
      setJugador("amarillo");
    } else {
      setJugador("rojo");
    }
  };

  useEffect(() => {
    if (jugador === "amarillo") {
      setTurno(true);
      setTimeout(() => {
        handleLanzar(jugadaOrdenador(celdasTablero));
      }, 800);
    } else {
      setTurno(false);
    }
  }, [jugador]);

  const gridCeldasCabecera = ["", "", "", "", "", "", ""];

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-blue-200 ">
      <div className=" text-center text-[#232ae0] border-4 border-blue-600 rounded-full py-2 px-10">
        por GERARD OLMOS -{" "}
        <a
          href="https://www.gerardolmos.com"
          rel="noopener noreferrer"
          className="relative font-bold cursor-pointer z-50 hover:text-orange-600"
          target="_blank"
        >
          GERARDOLMOS.COM
        </a>
      </div>
      <section className="w-6xl p-10">
        <div className="w-[1080px]">
          <div className="relative grid grid-cols-7 align-self px-8 z-50 ">
            {gridCeldasCabecera.map((celda, index) => (
              <div key={index} className="w-full h-full mb-5 group ">
                <button
                  className="w-full h-full flex items-center justify-center hover:scale-150 transition duration-100"
                  onClick={() => handleLanzar(index)}
                  disabled={turno}
                >
                  {jugador === "rojo" ? (
                    <FlechaRoja className="w-10 h-auto animate-bounce transition-all duration-150" />
                  ) : (
                    <FlechaAmarilla className="w-10 h-auto animate-bounce" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <div className="relative grid grid-cols-7 gap-0 grid-rows-6  border-8 border-transparent p-7 pb-0">
            {celdasTablero.map((celda, index) => (
              <div
                key={index}
                className={`w-36 h-36  flex items-center justify-center`}
              >
                {celda.ficha}
              </div>
            ))}
            <Tablero className="absolute -top-[149px] -right-20" />
          </div>
        </div>
        {juegoRojoGanado ? <PanelRojoGana /> : null}
        {juegoAmarilloGanado ? <PanelAmarilloGana /> : null}
      </section>
    </main>
  );
};

export default Index;
