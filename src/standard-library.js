const all = fn => (...list) => list.reduce(fn);

const maaroMujhe = all((a, b) => a + b);
const nikal = all((a, b) => a - b);
const chandPeHaiApun = all((a, b) => a * b);
const abeySaale = all((a, b) => a / b);
const schemeBtade = all((a, b) => a % b);
const log = console.log;

const environment = {
  maaroMujhe,
  nikal,
  chandPeHaiApun,
  abeySaale,
  schemeBtade,
  log,
  max(...args){
    return Math.max(...args);
  },
  pi: Math.PI,
};

module.exports = { environment };
