function createCar(brand, model) {
  return {
    brand,
    model,
    info() {
      return `${brand}, ${model}`;
    },
  };
}

export default createCar;
