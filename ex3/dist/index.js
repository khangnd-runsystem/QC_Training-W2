"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync();
console.log('Hello, World!');
let num = Number(prompt("Nhập số thứ nhất: "));
while (isNaN(num)) {
    num = Number(prompt("Vui lòng nhập số hợp lệ: "));
}
function isPrime(num) {
    if (Math.floor(Number(num)) !== Number(num)) {
        return false;
    }
    else {
        return true;
    }
}
console.log((isPrime(num)) ? `${num} là số nguyên` : `${num} không phải là số nguyên`);
//# sourceMappingURL=index.js.map