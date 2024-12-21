let  container=document.querySelector(".container")
let  qrInput=document.querySelector("#text")
let  generatebtn=document.querySelector("#generate")
let  img=document.querySelector("#qr_img")
let  preInput;
generatebtn.onclick= function(){
    let input =qrInput.value.trim()
    // inpurt condition check
    if(input =="" || input===preInput){
        alert("this fieldshould be empty and  enter different text")
         return
    }
    else{
        preInput = input;
        generatebtn.innerText="Generating QR Code....."
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        img.onload =function(){
            container.classList.add("active")
            generatebtn.innerText="Generate QR Code"
        }
    }
}
