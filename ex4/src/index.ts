import promptSync = require("prompt-sync");
const prompt = promptSync();
let num = Number(prompt("Nhập số nguyên: "));
while(isNaN(num) ||Math.floor(num) !== num  ){
        num = Number(prompt("Vui lòng nhập số hợp lệ: "));
    }
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log((isEven(num)) ? `${num} chia hết cho 2` : `${num} không chia hết cho 2`);
