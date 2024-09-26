import { centenas, decenas, unidades } from "../tools/WordOfNumbers";

const traducirNumero = (numero) => {
  if (numero === 0) {
    return "cero";
  }
  if (numero === 100) {
    return "cien";
  }
  if (numero === 1000) {
    return "mil";
  }

  let texto = "";

  const cientos = Math.floor(numero / 100);
  if (cientos > 0) texto += centenas[cientos] + " ";

  const resto = numero % 100;
  if (resto <= 20) {
    texto += unidades[resto];
  } else {
    const decena = Math.floor(resto / 10);
    const unidad = resto % 10;

    if (decena === 2 && unidad > 0) {
      texto += decenas[decena] + unidades[unidad];
    } else {
      texto += decenas[decena];
      if (unidad > 0) texto += " y " + unidades[unidad];
    }
  }

  return texto.trim();
};

export default traducirNumero;
