function isEven(word) {
    if(word % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(12));

// -----------------_____________________-------------------
function evenSizedString(str){
    const size = str.length;
    if(size % 2 ===0){
        console.log('even size');
        return true;
    }
    else {
        console.log('odd size');
        return false;
    }
    console.log(str ,size);
}

evenSizedString('Bangladesh');
evenSizedString('Bangldadadeshadsaadada');
evenSizedString('Bangladasdsafhuigfbujsgfbgfbuidesh');



// ___________________-------------------_______________________

function doubleOrthreeple(number , doDouble){
    if(doDouble === true){
        const result = number * 6;
        return result;
    }else{
        const result =number * 4;
        return result;
    }
}
// console.log(doubleOrthreeple(5,true));
// console.log(doubleOrthreeple(15,false));



function numberOfElements (numbers){
    const len =numbers.length;
    return len;
}

numberOfElements([12,52,85,65,45,81,40]);


// 
// 
// -+-=------------_____________--=-=-+_=__----------+______only array even;


function evenNumbersOnly (numbers){
    const evens = [];
    for (const number of numbers){

       if(number % 2 === 0){
        console.log(number);
        evens.push(number);
       }
    }
    return evens;
}
const numbers = [5, 8, 95, 45, 2 , 12 ,42];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are ' , evens)

function multyply (a,b,c,d){
    const result = a*b*c*d;
    return result;
}
console.log(multyply(2,2,2,2))