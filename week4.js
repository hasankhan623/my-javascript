const b1=document.querySelector("mychange");
b1=addEventListener('click',mychangecolor);

function mychangecolor (){

    document.body.style.backgroundColor='green';
   
    var paragraph = document.createElement("p");
    var textcontent2= document.getElementById("text-cont")

    paragraph.textContent = "write by mohammad";
    paragraph.textContent = "write by mohammad";
    paragraph.textContent = "write by mohammad";
    paragraph.textContent = "write by mohammad";
    textcontent2.appendChild(paragraph);
}