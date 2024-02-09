function isLeapYear(year){
    if(year % 4 ===0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2024);
console.log(isLipi);

//  check all condition 


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 ===0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear2(4025));
console.log(isLeapYear2(4000));
console.log(isLeapYear2(2000));
