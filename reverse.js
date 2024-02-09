const numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.reverse();
// console.log(numbers)
// const rev_numbers = [];
// for(const num of numbers){
//     // console.log(num);
//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers);

const rev_number = [];
for(let i = 0; i < numbers.length ; i++){
    const nums = numbers[i];
    rev_number.unshift(nums);
}
// console.log(rev_number)

// reverse side

for(let i = numbers.length - 1; i >= 0; i--){
    const num =numbers[i];
    console.log(num);
}

const friends = ['Elon','bill','mark','waren'];
// friends.reverse();
// console.log(friends)

const rev_friend = [];
for(const num of friends){
    // console.log(num);
    rev_friend.unshift(num)
}
console.log(rev_friend);