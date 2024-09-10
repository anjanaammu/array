function removeDuplicates(arr){
    return[...new Set(arr)]
}
const arrayWithDuplicates =[1,2,2,3,4,4,5]
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates)
console.log(arrayWithoutDuplicates);
