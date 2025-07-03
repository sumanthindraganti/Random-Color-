const button1=document.querySelector(".bt1");
const button2=document.querySelector(".bt2");
const button3=document.querySelector(".bt3");
const button4=document.querySelector(".bt4");

const div1=document.querySelector(".a1");
const div2=document.querySelector(".a2");
const div3=document.querySelector(".a3");
const div4=document.querySelector(".a4");


    function guess(div)
    {
        div.style.backgroundColor=  `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
    }
      



button1.addEventListener("click",function(){
    guess(div1);
});

button2.addEventListener("click",function(){
    guess(div2);
});

button3.addEventListener("click",function(){
    guess(div3);
});

document.addEventListener("keydown",function(e){
    if(e.key=="1"){
        guess(div1);
}});
document.addEventListener("keydown",function(e){
    if(e.key=="2"){
        guess(div2);
}});
document.addEventListener("keydown",function(e){
    if(e.key=="3"){
        guess(div3);
    }
});
button4.addEventListener("click",function(){
    guess(div4);
});

document.addEventListener("keydown",function(e){
    if(e.key=="4"){
        guess(div4);
}});


