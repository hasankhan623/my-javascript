function circle(radius){
this.radius=300;
document.write(radius);

document.write(this.radius);
}

circle.call({},343243242);

//project 2
let circlekey = Object.keys(circle);

let content = {};
content = document.querySelector('');
document.write('<br><br> <br>');
document.write(content.keys)

let myButton = document.querySelector("#mersana");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Something");
}