// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }
// let n = 0;
// do{
//     console.log(n);
//     n++;
// }
// while(n <= 10)
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//   continue;
//  }
//  console.log(array[i]);
// }
// let total = 0
// for(let i = 61; i <= 100; i++){
//     if(i % 2 ===1){
//         total = total + i
//         console.log(i)
//     }

// }
// console.log(total)
// v
// const x = ""
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }
// const str = "Hello";
// str[0] = "h";
// console.log(str);
let word = "Apple";
let countA = (word.match(/A/g) || []).length;
console.log(countA); 