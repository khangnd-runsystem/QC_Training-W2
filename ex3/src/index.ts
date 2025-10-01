import promptSync = require("prompt-sync");
const prompt = promptSync();
let num = Number(prompt("Nhập số thứ nhất: "));
    while(isNaN(num)){
        num = Number(prompt("Vui lòng nhập số hợp lệ: "));
    }
function isPrime(num: number): boolean {
    if( Math.floor(num) !== num ){
        return false;
    }
    else{
        return true;
    }
}
console.log((isPrime(num)) ? `${num} là số nguyên` : `${num} không phải là số nguyên`);