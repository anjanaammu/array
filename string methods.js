// charAt ,
// charCodeAt,
// fromcharcode,includes,endswith,indexof,replace ,trim,replaceall,search,concat,slice,
// split,startswith,substar,substring,tolowercase,touppercase,tostring,valueof
let s=" hello world  "
// (character at position)
console.log(s.charAt(1));
// unicode of the letter
console.log(s.charCodeAt(0));
// check whether word is there
console.log(s.includes('hello'))
// words end with
console.log(s.endsWith('world'));
// index value kandpidikan
console.log(s.indexOf('l'));
// repeate /
console.log(s.repeat(6));
// replace 
console.log(s.replace('world','everyone'));
console.log(s);
// replaceall 
console.log(s.replaceAll('helloworld','hi everyone'));
console.log(s);
// search 
console.log(s.search('o'));
// concat 
console.log(s.concat('hello'));
// slice 
let a=['h','e','l','l','o']

console.log(a.slice(1,3));
// split  convert to array
let se='hello, world, nice, to, meet ,you'
console.log(se.split(","));
// startwith 
console.log(s.startsWith('o'));
// substr:oru part extract cheyan vendeet
let x="hello world"
console.log(x.substr(0,6));
// substring 
let x1="hello world"
console.log(x1.substring(6,12));
// toupper 
console.log(s.toUpperCase());
// tolowercase 
let d="HELLOWORLD"
console.log(d.toLowerCase());
// trim  to remove space
console.log(s.trimStart());
// tostring 
let a1=123
let c=console.log(a1.toString())


let d1=new string("hello world")
console.log(d1.valueOf());
console.log(typeOf(d1));

















