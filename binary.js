function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1
    while(left<=right){
        const mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return-1
}
const sortedArray=[1,3,5,7,9,11,13,15]
const target=19
const result=binarySearch(sortedArray,target)
if(result!=-1){
    console.log('target found at index');
    
}else{
    console.log("target not found in the array");
    
}