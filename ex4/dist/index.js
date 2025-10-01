"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync();
let num = Number(prompt("Nhập số nguyên: "));
while (isNaN(num) || Math.floor(num) !== num) {
    num = Number(prompt("Vui lòng nhập số hợp lệ: "));
}
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log((isEven(num)) ? `${num} chia hết cho 2` : `${num} không chia hết cho 2`);
//# sourceMappingURL=index.js.map