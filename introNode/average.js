function average(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum+= arr[i]; 
    };
    return Math.round(sum/arr.length);
};


var array1 = [3,3,3];
var array2 = [25,25,30];

console.log(average(array1));
console.log(average(array2));