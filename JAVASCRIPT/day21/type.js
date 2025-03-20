artr = [5,2,4,7,8,9,6,3];
artr.forEach(function(el){
    console.log(el);
});


let arrr =[{
    name:"shourav",
    marks:95
},{
    name:"pankaj",
    marks:55
},{
    name:"samar",
    marks:65
}];

arrr.forEach((el)=>{
    console.log(el.marks);
});

console.log("end");

//map method

let pcs =[1,2,3,4];
let double = pcs.map((el)=>{
    return el*2;
});

//arr.filter

let nums =[1,2,3,4,5,6,7,8,9,10];
let ans =nums.filter((el)=>{
    return el%2==0;
});


//every

[2,4,8,10].every((el)=>(el%2==0))//true return
[2,4,8,10,43].every((el)=>(el%2==0))//false retuyrn

//reduce method

let number =[1,2,3,4];
let finalVal = number.reduce((res,el)=>{
    console.log(res)
    return res+el;
});

console.log(finalVal);

//ye tab run karega jab iske uppar ka sara comment me hoga|^


//check if all numbers in our arrays are multiple of 10 or not?

let numbs = [10,20,30,40];
let answ= numbs.every((el)=> el%10==0);
console.log(answ);//it return tru in console..

//create a function to find the min number in an array..?

