const product = {
  name: 'Harry Potter'
};

Object.prototype.hasOwnProperty = () => 'new function';
Object.prototype.someNewMethod = () => 'new function';

console.log(product.hasOwnProperty('hasOwnProperty'));
console.log(product.someNewMethod());
