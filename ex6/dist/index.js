"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = Array.from({ length: 50 }, (_, i) => i + 1);
const isEven = (num) => num % 2 === 0;
console.log('Số chẵn:', arr.filter(isEven));
console.log('Số lẻ:', arr.filter(num => !isEven(num)));
//# sourceMappingURL=index.js.map