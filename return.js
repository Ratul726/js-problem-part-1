function tenTimes(number) {
    const result = number * 10;
    return result;
}
console.log(tenTimes(5));
const output = tenTimes(99);
console.log('output' , output);





// --------------------------------
// return
function doMath (num1 , num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multyply = sum * diff ;
    const result = multyply / 2;
    return result;
}
const total = doMath(18,10);
console.log(total)