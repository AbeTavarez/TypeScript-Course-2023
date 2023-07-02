const cokeClassic = {
  color: "brown",
  sugarFree: false,
  calories: 90,
};

type Tuple = [string, boolean, number];

const cokeZero: Tuple = ["brown", true, 0];

console.log(cokeZero[2]);
