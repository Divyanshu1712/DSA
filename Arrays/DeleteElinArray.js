// deletion in array 

let arr = [1, 2, 3, 4, 5];
let positionTodelete = 3;
// remove el is 4 in arr

function deleteArray(arr, positionTodelete) {
    let len = arr.length;

    for (let i = positionTodelete; i <= len - 1; i++) {
        arr[i] = arr[i + 1];
    };
    
    arr.length = arr.length - 1;
    console.log(`the new array after removing array ${arr}`);
};
console.log(`the main array is ${arr} el is removing 4`);

deleteArray(arr, positionTodelete);