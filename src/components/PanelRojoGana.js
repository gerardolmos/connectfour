import React from "react";

const PanelRojoGana = () => {
  return (
    <article className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 ">
      <div className="p-5 bg-red-500 rounded-3xl shadow-xl bg-opacity-95">
        <div className="flex flex-col py-10 px-20 border-8 border-dotted items-center justify-center rounded-3xl animate-bordeIntermitente">
          <p className="text-white font-bold text-5xl text-center">
            ¡¡¡ JUGADOR ROJO GANA !!!
          </p>
          <a
            href="/"
            className="px-8 py-3 rounded-lg bg-white text-red-500 font-bold shadow-md mt-5 hover:bg-red-200 focus:scale-105 transition duration-200 uppercase hover:text-black"
          >
            Reiniciar!
          </a>
        </div>
      </div>
    </article>
  );
};

export default PanelRojoGana;
