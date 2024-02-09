/*


*/

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number)
        }
    }
    // odds is the array that contant only the odds numbers;
    // console.log(odds);
    let total = 0;
    for(const number of odds){
        total = total + number;
    }
    const count = odds.length;
    console.log(total , count);
    const avg = total / count;
    return avg;
}

const numbers = [42,51,62,41,109,31];
const avg = oddAverage(numbers);
console.log('average of the odd number is' , avg);