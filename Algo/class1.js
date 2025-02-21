// function swaps(a,b){
//     let temp = undefined;
//     temp = a;
//     a = b;
//     b = temp;
//     console.log(`a is ${a} and b is ${b}`);

// }

// let a = 2;
// let b = 8;
// console.log(`a is ${a} and b is ${b}`);
// swaps(a,b)

function reverseArray(a) {
    // Write your code here
    // console.log(a);

    let newArr = []
    let l = a.length-1;
    for (let i = l; i >= 0; i--) {
        // console.log(a[i]);
        newArr.push(a[i])
    
    }
    return newArr

}
a = [1, 4, 3, 2]
let di = reverseArray(a)
console.log(di);
