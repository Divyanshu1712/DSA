// travseing the array

// make a splice in built functions

function traveslingArray(arr, el, postion) {
    let dis = arr.length;
    console.log(`The arr is ${arr} and in postion ${postion} we have to add this element ${el}`);

    for (let i = dis - 1; i >= 0; i--) {
        if (i >= postion) {
            arr[i + 1] = arr[i]
            if (i == postion) {
                arr[i] = el;
            };
        };
    };
    console.log(`the new arr is here ${arr}`);
};

let arr = [1, 2, 4, 5];
let el = 3
let postion = 2;

// traveslingArray(arr,el,postion)


