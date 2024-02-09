let number = ['tom', 'tim', 'tin', 'tik'];
let concated = []
for ( let i = 0; i<number.length ; i++){
    concated += number[i]
}
console.log(concated);

function difference (num1,num2){
    const diff = num1 - num2;
    console.log(num1 , num2 ,'difference is' , diff);
}
const fatherAge = 50;
const myAge = 18;
difference(fatherAge,myAge)