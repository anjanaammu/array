function moveZeroToEnd(arr){
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[index]=arr[i]
            index++
        }
    }
    for(let i=index;i<arr.length;i++){
        arr[i]=0
    }
    return arr  

}
let arr=[0,1,0,3,12]
let result=moveZeroToEnd(arr)
console.log("Array after moving zero to the end:",result);
