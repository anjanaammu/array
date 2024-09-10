function findUnion(arr1,arr2){
    const combinedArray=[...arr1,...arr2]
    const unionArray=[...new Set(combinedArray)]
    return unionArray
}
const arr1=[1,2,3,4,5]
const arr2=[4,5,6,7,8]
const result=findUnion(arr1,arr2)
console.log(result);
