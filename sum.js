function sumOfArray(arr){
    return arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
}
let arr=[1,2,3,4,5]
let sum=sumOfArray(arr)
console.log("sum of all elements:",sum);
