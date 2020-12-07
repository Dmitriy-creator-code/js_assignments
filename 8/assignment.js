const arr = [1, 4, 5, 7, 12, 100];
console.log (arr);

let arrFilter = arr.filter(function(num) {
    return num > 5;
});

console.log(arrFilter);


let arrMaping = arr.map (function(num){
    let obj = {};
    return obj.arr = num;
    
})
console.log(arrMaping);

let arrRed = arr.reduce (function(num, current){
    return num * current;
})

console.log(arrRed);


function findMax (array) {
    let maxCount = arr[0];
    let minCount = arr[0];
    array.forEach(function(value, index){
        if(index > 0 ){
            if(maxCount < value){
                maxCount = value;
            }
        }
        if(index > 0) {
            if (minCount > value) {
                minCount = value;
            }
        }

    });
    
    return maxCount + "-" + minCount;
    
}

console.log(findMax(arr));



