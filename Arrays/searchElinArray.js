//searching element in array 
let arr = [1,2,3,4,5];
let item = 5;
let index = undefined;

function searchEinA(arr, item,index) {
    let len = arr.length;
    for(let i=0; i< len; i++){
        // console.log(arr[i]);
        if(arr[i] === item){
            console.log(`the items ${item} is present `);
            console.log(`the index of item is  ${i}`);
            break
        }
        
    }
    // console.log(`The items ${item} is not present!\nEnter correct nUmber`);
    
}
console.log(`In this array ${arr} we have to check item ${item} is present!`);

searchEinA(arr, item , index)