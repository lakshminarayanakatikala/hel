
let decrementBtn=document.getElementById("Decrement");
// decrementBtn.style.color="red";
let resetBtn=document.getElementById("Reset");
let incrementBtn=document.getElementById("Increment");
let lable=document.getElementById("lable");
let count=0;
decrementBtn.onclick= function(){
        count--;
        lable.textContent=count;
        

}
resetBtn.onclick= function(){
        count =0;
        lable.textContent=count;

}
incrementBtn.onclick= function(){
        count++;
        lable.textContent=count;

}

