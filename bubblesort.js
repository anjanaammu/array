function bubbleSort(arr){
    let n=arr.length
    let swapped
    do{
        swapped=false
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true;
            }
        }
        n--
    }
    while(swapped)
        return arr
}
let arr=[64,35,98,10,20,11,12]
console.log("Sorted array:", bubbleSort(arr));
