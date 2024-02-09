const uniqueArray =['ratul', 'lajd', 'akam' , 'ratul' , 'money'];
const numbers = [10,52,30,74,10,1,10,45,85,10,52];

function noDuplicate(array){
    const unique = [] ;
    for(const item of array){
       if(unique.includes(item) === false){
        unique.push(item);
       }
    }
}

const unike = noDuplicate(numbers);
console.log(uniqueArray)