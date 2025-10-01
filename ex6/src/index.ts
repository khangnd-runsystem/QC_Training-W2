const arr = Array.from({ length: 50 }, (_, i) => i + 1);
const isEven = (num: number): boolean => num % 2 === 0;
console.log('Số chẵn:', arr.filter(isEven));
console.log('Số lẻ:', arr.filter(num => !isEven(num)));