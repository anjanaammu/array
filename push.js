// push add an element
let arr=[1,2,3,4];
let p=arr.push(5);
console.log(arr)
// pop:to remove an element
let q=arr.pop(5);
console.log(arr)
// shift:remove  first element
let r=arr.shift()
console.log(arr)
// unshift  add an element to the first
let s=arr.unshift(7)
console.log(arr)
// slice create a new array from the exicuting array
let a=['orange','apple','grape','banana','kiwi']
let b=a.slice(1,3)
console.log(b);
// splice:remove add AND replace
let w=[1,2,3,5,7]
console.log(w.splice(1,3));//removes
console.log(w.splice(1,3,7));//add/replace
console.log(w);
// reverse to reverse an array
let f=[1,2,3,4,5]
console.log(f.reverse(f));
// concat: join two arrays
let g=[1,2,3]
let h=[4,5,6]
console.log(g.concat(h));
// for each:to loop an array
// variable.forEach(element => {
    
// });
let x=[1,2,3,4,5]
x.forEach((i)=>{
    console.log(i);
    })
    // map:access array elements
    let m=[1,2,3,4,5]
   const double= m.map((i)=>{
        return i*2
    })
    console.log(double)
    // reduce: oru pertivular condition koduth single element akum
    let v=[1,2,3,4,5,6]
   const y= v.reduce((currentvalue,acc)=>{
        return acc +  currentvalue
    })
    console.log(y);
    // filter
    let t=[1,2,3,4,5]
    let z=t.filter(i=>i%2==0)
        console.log(z)
        or 
        t.filter((i)=>{
            return i% 2==0
        })
        // find:condition satisfy avunna 1st element print avim
        let e=[1,2,3,4,5]
        let o=e.find((i)=>{
           return i%2===0
        })
        console.log(o);
        // include:element indo check cheyan
        let as=['apple','orange','grape']
        console.log(as.includes('apple'))
        let m4=[1,3,8,5,2]
        console.log(m4.sort());
        //indexof
        let ps=['apple','orange','grape']
        console.log(ps.includes('apple'))
        console.log(ps.indexOf('apple'))
        console.log(ps.lastIndexOf('orange'))
        //some:oru array condition vech noka adhil oru condition satisfy aya true print avm
        let pn=[1,2,3,4,5]
        const pr=pn.some(i=>{
            return i% 2===0

        })
        console.log(pr);
        //every:condition full satisfy avanm
        let ab=[1,2,3,4,5,6]
        const rs=ab.every(i=>{
            return i%2==0
        })
        console.log(rs)
        //from:oru strigne seperate ayit convert cheyum
     let str='hello'
     let qs=Array.from(str)
     console.log(qs)  
     //of:array ayit vera   
     let pqr=Array.of(1,2,3)
     console.log(pqr)     
    //  IsArray :array ano check cheya
    let st='hello'
    let pst=Array.isArray(st)
    console.log(pst);
    

        
        

    
    
