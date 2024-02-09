function evenAverage(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number);
        }
    }
    let sum = 0;
    for(const number of evens){
        sum = sum + number;
    }
    const nums = evens.length;
    console.log(sum , nums);
    const avg = sum / nums;
    return avg;
}
const numbers = [10,78,6,41,65,56,87,520];
const avg = evenAverage(numbers);
console.log('Some evens number is the fact ' , avg)