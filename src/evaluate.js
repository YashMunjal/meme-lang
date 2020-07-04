const { environment } = require('./standard-library');
const last = (collection) => collection[collection.length - 1];

const apply = (e) => {
  const fn = environment[e.name];
  const args = e.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`${e.name} is not a function`);
  }
  return fn(...args);
};
const getIdentifier = e => {
  if (environment[e.name]) return environment[e.name];
  throw new ReferenceError(`${e.name} is not defined`);
};
const evaluate = (node) => {
  if (node.type === 'CallExpression') return apply(node);
  if (node.type === 'Identifier') return getIdentifier(node);
  if (node.value) return node.value;
};

module.exports = { evaluate };
