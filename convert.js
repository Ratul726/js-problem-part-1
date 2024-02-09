// 12 inch 1 feet ? :true

// function inchToFeet (inch){ 
//     const feet = inch / 12;
//     return feet;
// }
// const ratulHeight = inchToFeet(68);
// console.log(ratulHeight);

function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber =parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft '+ inchRemaining + ' inch ' ;
    return result;
}
console.log(inchToFeet2(67));


// tasks //

function milesToKm(miles){
    const kilo = miles * 1.60934;
    return kilo; 
}
console.log(milesToKm(45))

























