//スプレット演算子
// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(...nums);//←配列要素を展開する時のスプレット演算子
// console.log(result);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1];//別々の配列として扱う

// console.log(newArr);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name="初春"

 console.log(newObj,obj);
 //↑元の配列に影響しないためnewObj,objで値が変わる

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
//↑では1がnに入る