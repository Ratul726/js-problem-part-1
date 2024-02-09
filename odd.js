function sumOfNumbers (numbers){

    let sum = 0;
// console.log(numbers);
 for(const number of numbers){
    console.log(number);
    sum += number;
    
 }
 return sum;
}
const numbs = [10,20,85,6,3,84,15]
const sum = sumOfNumbers(numbs);
console.log('Sun of Number is' , sum)