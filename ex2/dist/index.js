import promptSync from "prompt-sync";
const prompt = promptSync();
var Operator;
(function (Operator) {
    Operator["+"] = "+";
    Operator["-"] = "-";
    Operator["*"] = "*";
    Operator["/"] = "/";
    Operator["all"] = "all";
})(Operator || (Operator = {}));
function input() {
    let num1 = prompt("Nhập số thứ nhất: ");
    while (isNaN(Number(num1))) {
        num1 = prompt("Vui lòng nhập số hợp lệ: ");
    }
    let num2 = prompt("Nhập số thứ hai: ");
    while (isNaN(Number(num2))) {
        num2 = prompt("Vui lòng nhập số hợp lệ: ");
    }
    let op = prompt("Chọn thao tác (+, -, *, /, all): ");
    while (!(op in Operator)) {
        op = prompt("Vui lòng chọn thao tác hợp lệ (+, -, *, /, all): ");
    }
    return [Number(num1), Number(num2), op];
}
function calculate(num1, num2, op) {
    switch (op) {
        case Operator["+"]:
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case Operator["-"]:
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case Operator["*"]:
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case Operator["/"]:
            if (num2 === 0) {
                console.log("Không thể chia cho 0");
            }
            else {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
        case Operator["all"]:
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            if (num2 === 0) {
                console.log("Không thể chia cho 0");
            }
            else {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
    }
}
let [num1, num2, op] = input();
calculate(num1, num2, op);
//# sourceMappingURL=index.js.map