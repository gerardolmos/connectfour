export const comprobacionJuegoGanado = (celdasTablero) => {
  // FOR DE COMPROVACION DE LAS FILAS HORIZONTALES

  for (let index = 0; index <= 3; index++) {
    //  COMPROVACIONES HORIZONTALES 0-3
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 7; index <= 10; index++) {
    //  COMPROVACIONES HORIZONTALES 7-10
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 14; index <= 17; index++) {
    //  COMPROVACIONES HORIZONTALES 14-17
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 21; index <= 24; index++) {
    //  COMPROVACIONES HORIZONTALES 21-24
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 28; index <= 31; index++) {
    //  COMPROVACIONES HORIZONTALES 28-31
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 35; index <= 38; index++) {
    //  COMPROVACIONES HORIZONTALES 35-38
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 1].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 2].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 3].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }

  // --------------------------- FOR DE COMPROVACION DE LAS COLUMNAS VERTICALES -----------------------------

  for (let index = 0; index <= 20; index++) {
    //  COMPROVACIONES VERTICALES 0-20
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 7].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 14].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 21].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }

  // --------------------------- FOR DE COMPROVACION DE LAS DIAGONALES DERECHA -----------------------------

  for (let index = 0; index <= 3; index++) {
    //  COMPROVACIONES DIAGONALES DERECHA 0-3
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 8].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 16].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 24].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 7; index <= 10; index++) {
    //  COMPROVACIONES DIAGONALES DERECHA 7-10
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 8].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 16].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 24].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 14; index <= 17; index++) {
    //  COMPROVACIONES DIAGONALES DERECHA 10-13
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 8].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 16].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 24].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }

  // --------------------------- FOR DE COMPROVACION DE LAS DIAGONALES IZQUIERDA -----------------------------

  for (let index = 3; index <= 6; index++) {
    //  COMPROVACIONES DIAGONALES IZQUIERDA 3-6
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 6].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 12].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 18].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 10; index <= 13; index++) {
    //  COMPROVACIONES DIAGONALES IZQUIERDA 10-13
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 6].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 12].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 18].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
  for (let index = 17; index <= 20; index++) {
    //  COMPROVACIONES DIAGONALES IZQUIERDA 17-20
    if (
      celdasTablero[index].ocupado !== "" &&
      celdasTablero[index].ocupado === celdasTablero[index + 6].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 12].ocupado &&
      celdasTablero[index].ocupado === celdasTablero[index + 18].ocupado
    ) {
      return celdasTablero[index].ocupado;
    }
  }
};
