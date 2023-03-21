export const jugadaOrdenador = (celdasTablero) => {
  // COMPROVACIONES ANTES DE REALIZAR LA TIRADA

  for (let index = 0; index <= 17; index++) {
    if (index === 4) {
      index = 7;
    }
    if (index === 11) {
      index = 14;
    }
    // comprovacion horizontal
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 7].ocupado !== ""
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 8].ocupado !== ""
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 9].ocupado !== ""
    ) {
      return index + 2;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "" &&
      celdasTablero[index + 10].ocupado !== ""
    ) {
      return index + 3;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === ""
    ) {
      return index + 2;
    }

    // Comprovacion vertical
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 7].ocupado === "rojo" &&
      celdasTablero[index + 14].ocupado === "rojo" &&
      celdasTablero[index + 21].ocupado === "rojo"
    ) {
      return index;
    }

    // comprovacion diagonal
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 8].ocupado === "rojo" &&
      celdasTablero[index + 16].ocupado === "rojo" &&
      celdasTablero[index + 24].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 8].ocupado === "" &&
      celdasTablero[index + 16].ocupado === "rojo" &&
      celdasTablero[index + 24].ocupado === "rojo"
    ) {
      return index + 8;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 8].ocupado === "rojo" &&
      celdasTablero[index + 16].ocupado === "" &&
      celdasTablero[index + 24].ocupado === "rojo"
    ) {
      return index + 16;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 8].ocupado === "rojo" &&
      celdasTablero[index + 16].ocupado === "rojo" &&
      celdasTablero[index + 24].ocupado === ""
    ) {
      return index + 24;
    }
  }

  // COMPROVACION VERTICALES 18-20
  for (let index = 18; index <= 20; index++) {
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 7].ocupado === "rojo" &&
      celdasTablero[index + 14].ocupado === "rojo" &&
      celdasTablero[index + 21].ocupado === "rojo"
    ) {
      return index;
    }
  }

  // COMPROVACION DIAGONALES IZQUIERDA
  for (let index = 3; index <= 20; index++) {
    if (index === 7) {
      index = 10;
    }
    if (index === 14) {
      index = 17;
    } else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 6].ocupado === "rojo" &&
      celdasTablero[index + 12].ocupado === "rojo" &&
      celdasTablero[index + 18].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 6].ocupado === "" &&
      celdasTablero[index + 12].ocupado === "rojo" &&
      celdasTablero[index + 18].ocupado === "rojo"
    ) {
      return index + 6;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 6].ocupado === "rojo" &&
      celdasTablero[index + 12].ocupado === "" &&
      celdasTablero[index + 18].ocupado === "rojo"
    ) {
      return index + 12;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 6].ocupado === "rojo" &&
      celdasTablero[index + 12].ocupado === "rojo" &&
      celdasTablero[index + 18].ocupado === ""
    ) {
      return index + 18;
    }
  }

  // comprovacion horizontal
  for (let index = 21; index <= 28; index++) {
    if (index === 25) {
      index = 28;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 7].ocupado !== ""
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 8].ocupado !== ""
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "" &&
      celdasTablero[index + 3].ocupado === "rojo" &&
      celdasTablero[index + 9].ocupado !== ""
    ) {
      return index + 2;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "" &&
      celdasTablero[index + 10].ocupado !== ""
    ) {
      return index + 3;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === ""
    ) {
      return index + 2;
    }
  }

  // comprovacion horizontal
  for (let index = 35; index <= 38; index++) {
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === "rojo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "" &&
      celdasTablero[index + 3].ocupado === "rojo"
    ) {
      return index + 2;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo" &&
      celdasTablero[index + 3].ocupado === ""
    ) {
      return index + 3;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "rojo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "rojo" &&
      celdasTablero[index + 1].ocupado === "rojo" &&
      celdasTablero[index + 2].ocupado === ""
    ) {
      return index + 2;
    }
  }

  // LA TIRADA ---------------------------------------

  for (let index = 0; index <= 17; index++) {
    if (index === 4) {
      index = 7;
    }
    if (index === 11) {
      index = 14;
    }
    // comprovacion horizontal
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === "amarillo" &&
      celdasTablero[index + 7].ocupado !== ""
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === "amarillo" &&
      celdasTablero[index + 8].ocupado !== ""
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "" &&
      celdasTablero[index + 3].ocupado === "amarillo" &&
      celdasTablero[index + 9].ocupado !== ""
    ) {
      return index + 2;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === "" &&
      celdasTablero[index + 10].ocupado !== ""
    ) {
      return index + 3;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "amarillo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === ""
    ) {
      return index + 2;
    }

    // Comprovacion vertical
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 7].ocupado === "amarillo" &&
      celdasTablero[index + 14].ocupado === "amarillo" &&
      celdasTablero[index + 21].ocupado === "amarillo"
    ) {
      return index;
    }

    // comprovacion diagonal
    else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 8].ocupado === "amarillo" &&
      celdasTablero[index + 16].ocupado === "amarillo" &&
      celdasTablero[index + 24].ocupado === "amarillo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 8].ocupado === "" &&
      celdasTablero[index + 16].ocupado === "amarillo" &&
      celdasTablero[index + 24].ocupado === "amarillo"
    ) {
      return index + 8;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 8].ocupado === "amarillo" &&
      celdasTablero[index + 16].ocupado === "" &&
      celdasTablero[index + 24].ocupado === "amarillo"
    ) {
      return index + 16;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 8].ocupado === "amarillo" &&
      celdasTablero[index + 16].ocupado === "amarillo" &&
      celdasTablero[index + 24].ocupado === ""
    ) {
      return index + 24;
    }
  }

  // COMPROVACION VERTICALES 18-20
  for (let index = 18; index <= 20; index++) {
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 7].ocupado === "amarillo" &&
      celdasTablero[index + 14].ocupado === "amarillo" &&
      celdasTablero[index + 21].ocupado === "amarillo"
    ) {
      return index;
    }
  }

  // COMPROVACION DIAGONALES IZQUIERDA
  for (let index = 3; index <= 20; index++) {
    if (index === 7) {
      index = 10;
    }
    if (index === 14) {
      index = 17;
    } else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 6].ocupado === "amarillo" &&
      celdasTablero[index + 12].ocupado === "amarillo" &&
      celdasTablero[index + 18].ocupado === "amarillo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 6].ocupado === "" &&
      celdasTablero[index + 12].ocupado === "amarillo" &&
      celdasTablero[index + 18].ocupado === "amarillo"
    ) {
      return index + 6;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 6].ocupado === "amarillo" &&
      celdasTablero[index + 12].ocupado === "" &&
      celdasTablero[index + 18].ocupado === "amarillo"
    ) {
      return index + 12;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 6].ocupado === "amarillo" &&
      celdasTablero[index + 12].ocupado === "amarillo" &&
      celdasTablero[index + 18].ocupado === ""
    ) {
      return index + 18;
    }
  }

  // comprovacion horizontal
  for (let index = 21; index <= 38; index++) {
    if (index === 25) {
      index = 28;
    }
    if (index === 32) {
      index = 35;
    } else if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === "amarillo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === "amarillo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "" &&
      celdasTablero[index + 3].ocupado === "amarillo"
    ) {
      return index + 2;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo" &&
      celdasTablero[index + 3].ocupado === ""
    ) {
      console.log("no deberia disparar");
      return index + 3;
    }
    if (
      celdasTablero[index].ocupado === "" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === "amarillo"
    ) {
      return index;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "" &&
      celdasTablero[index + 2].ocupado === "amarillo"
    ) {
      return index + 1;
    } else if (
      celdasTablero[index].ocupado === "amarillo" &&
      celdasTablero[index + 1].ocupado === "amarillo" &&
      celdasTablero[index + 2].ocupado === ""
    ) {
      return index + 2;
    }
  }

  for (let index = 1; index <= 100; index++) {
    const casilla = Math.floor(Math.random() * 7);
    if (celdasTablero[casilla].ocupado === "") {
      return casilla;
    }
  }
};
