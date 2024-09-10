function rotateArray(arr,k){
    let n=arr.length
    k=k%n
    if(k==0)
        return arr
    let part1=arr.slice(-k)
    let part2=arr.slice(0,n-k)
    return  part1.concat(part2)
}
let arr=[1,2,3,4,5,6,7]
let k=3
let rotatedArray=rotateArray(arr,k)
console.log("Rotated Array:",rotatedArray);
