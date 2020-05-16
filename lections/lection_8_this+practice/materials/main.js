var g = 13;

function arrayFiller(arr, size) {
// LE = {arr::[], size: 3, z: undefined, scope: window}
    if (size == arr.length) {
        return arr;// базовый
    }

    arr[arr.length] = Math.random() * 10;

    var a = arrayFiller(arr, size); // рекурсивный
    return a;
}


var array = arrayFiller([], 3);;

// arrayFiller(array, 3);

console.log(array, 'arry');