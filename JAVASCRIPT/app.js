let name="shourav kumar";
console.log(name)

let u=10;
let p=5;
console.log("sun of a+b is" ,u+p);

let pencilPrice =10;
let eraserPrice=20;
//!let output=("sun of two is: "+(pencilPrice+eraserPrice)+ " " +"rupees");


//! Template--------------------------litterals::---------------------------------------------

let output=`the total price is: ${pencilPrice+eraserPrice} rupees`;
console.log(output); 

//!arithmeticOperators-- ----------------------------

let a=8;
let b=2;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

let j=10;
let k=5;
console.log(j++);
console.log(++j);

//!Comparision Operator------------------------------------------------

let age =18;
console.log(age>=18);

//sum of all n number i.e:- 1+2+3+4+5+6+7............
function getSum(n){
    sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i
    }
    return sum;
}


//concat add all laeter=============

let arr=["sdsd","Sdsds","Ssfs","sfssf","dfsdfsd"];

function concat(arr){
    let finalanswer="";
    for(i=0;i<=arr.length;i++){
        finalanswer+=arr[i];
    }

    return finalanswer;
}

//lexial  scope--------

function outer(){
    let a=2;
    let b=7;
    function inner(){
        console.log(b);
    }
    inner();
}