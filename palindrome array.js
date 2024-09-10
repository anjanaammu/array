function isPalindromeArray(arr){
    let left=0;
    let right=arr.length-1
    while(left<right){
        if (arr[left]!=arr[right]){
            return false;
        }
        left++
        right-- 
    }
    return true
}
let arr1=[1,2,3,2,1]
let arr2=[1,2,3,4,5]
console.log(isPalindromeArray(arr1)); 
console.log(isPalindromeArray(arr2));

