function findSecondLargest(arr){
    if(arr.length<2){
        throw new Error("Array must have at least two elements")
    }
    let firstLargest=Infinity
    let secondLargest=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest=firstLargest
            firstLargest=arr[i]
        }
        else if(arr[i]>secondLargest && arr[i]!=firstLargest){
            secondLargest=arr[i]

        }
    }
    if(secondLargest==-Infinity){
        throw  new Error("No second largest element found")
    }
    return secondLargest
}
let arr=[10,5,20,20,4,5,9]
let secondLargest=findSecondLargest(arr)
console.log("Second largest element:",secondLargest);
