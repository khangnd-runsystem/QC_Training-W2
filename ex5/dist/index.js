"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync();
let name = prompt("Nhập tên: ");
let score = Number(prompt("Nhập điểm: "));
while (isNaN(score) || score < 0 || score > 10) {
    score = Number(prompt("Vui lòng nhập số hợp lệ: "));
}
var Grade;
(function (Grade) {
    Grade["A"] = "Gi\u1ECFi";
    Grade["B"] = "Kh\u00E1";
    Grade["C"] = "Trung b\u00ECnh";
})(Grade || (Grade = {}));
function categorizeScore(score) {
    if (score >= 8) {
        return Grade.A;
    }
    else if (score > 5 && score < 8) {
        return Grade.B;
    }
    else {
        return Grade.C;
    }
}
console.log(`${name} đạt loại: ${categorizeScore(score)}`);
//# sourceMappingURL=index.js.map