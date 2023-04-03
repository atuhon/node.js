// 三項演算子（ ? : ）

const a = true;
let resultA =a?10:-10;
//trueの場合は前の数字が、falseの場合は後ろの数字が入る

if(a) {
  resultA = "true";
} else {
  resultA = "false";
}
console.log(resultA);

// function getResult() {
//   return a ? "true" : "false";
// }

// console.log(getResult());
