const Multiplicar = (num, end) => {
  const result = [];
  for (let i = 1; i <= end; i++) {
    result.push(`${num} x ${i} = ${num * i}`);
  }
  return result;
};

export default Multiplicar;
