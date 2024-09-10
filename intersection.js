function Intersection(arr1,arr2){
    const set1=new Set(arr1)
    const intersection=arr2.filter(item=>set1.has(item))
    return intersection
}
const arr1=[1,2,3,4,5]
const arr2=[4,5,6,7,8]
const result=Intersection(arr1,arr2)
console.log(result );
