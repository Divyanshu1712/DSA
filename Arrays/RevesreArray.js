// resverse Array 

let arr = [1,2,3,4,5];
// console.log(arr.reverse());  have to make this 

function reverseArray(arr){
    console.log(`the main array is ${arr}`);
    let dis = arr.length;
    // console.log(dis);
    let newArr = []

    for(let i=dis; i>=0; i--){
        newArr.push(arr[i])
    }
    console.log(`the new revrese arrray ${newArr}`);
}

reverseArray(arr)