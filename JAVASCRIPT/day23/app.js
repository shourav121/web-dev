// let btn=document.querySelector("button")
// console.dir(btn); 


// btn.onclick=function(){
//     console.log("button was clicked")
//     alert("btn clicked")
// }

function sayhello(){
    alert("hello");
}
function sayname(){
    console.log("ffffff")
}



let btns=document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick=sayhello;
    // btn.onmouseenter=function(){
    //     console.log("touch the btn"); 
    // }

    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);
}

 