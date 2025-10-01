import promptSync = require("prompt-sync");
const prompt = promptSync();


let name = prompt("Nhập tên: ");
let score = Number(prompt("Nhập điểm: "));
while(isNaN(score) || score < 0 || score > 10 ){
        score = Number(prompt("Vui lòng nhập số hợp lệ: "));
    }

enum Grade {
    A = "Giỏi",
    B = "Khá",
    C = "Trung bình"
}
function categorizeScore(score: number): Grade  {
    if( score >= 8 ){
        return Grade.A;
    }

    else if(score > 5 && score < 8){
        return Grade.B;
    }
    else{
        return Grade.C;
    }
}
console.log(`${name} đạt loại: ${categorizeScore(score)}`);