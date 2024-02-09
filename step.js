/*
*Multi_Level Condition

*/ 

// const price = 40000;
// if(price >= 5000){
//     // 10% discount 
//     const discount = price * 10 / 100;
//     const payAmount = price - discount
//     console.log(payAmount)
// }
// else if (price >= 4010) {
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else {
//     console.log(price)
// }

const age = 46;
const foodPrice = 500;
if(age <= 12){
    console.log('You can eat for free')
}
else if(age >=50 ){
// 50% discount
const discount = foodPrice * 50 / 100;
const payAmount = foodPrice - discount;
console.log(payAmount)
}
else if (age >= 45) {
// 27% discount
const discount = foodPrice * 27 / 100;
const payAmount = foodPrice - discount;
console .log(payAmount)
}
else {
    console.log(foodPrice)
}

 const grade = 55;
 if(grade >= 91 && grade <=100){
    console.log('You goted golen A+')
 }
 else if(grade >= 80 && grade <=90){
    console.log('You goted A+')
 }else if (grade >= 70 && grade <=79){
    console.log('You goted A')
 }else {
    console.log('You are fail')
 }