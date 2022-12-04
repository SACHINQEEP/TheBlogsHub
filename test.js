let string = "11123";
let array = [];
let arr = [];

for (let i = 0; i < string.length; i++) {
    array.push(Number(string[i]));
}

array.sort();
let isValueTrue = false
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            console.log(true)
        }
    }

    // let el = Number(array[i]);
    // let values = ""

    // console.log(array[i + 1]);

    // values += array[i] == array[i + 1] ? el : array[i];

    // if (array[i] == array[i + 1] || array[i] + 1 >= array[i] && array[i] + 1 < array[i] - 1) {
    //     isValueTrue = true
    //     console.log(el)
    // } else {
    //     isValueTrue = false
    //     console.log(el)
    // }

    // if (array[i] == array[i + i]) {
    //     console.log(true)
    // }
    // if (array[i] !== array[i + 1]) {
    //     arr.push(el);
    // }
}


// console.log(isValueTrue);