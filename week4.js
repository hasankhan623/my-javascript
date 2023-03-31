const button = document.querySelector("#change-color");
button.addEventListener("click",color-mahdi);
function color-mahdi(){
    document.style.backgroundColor='green';
}


const button = document.querySelector("#change-color-button");
button.addEventListener("click", changeColor);

// Define the function that changes the background color
function changeColor() {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  // Set the background color of the page to the random color
  document.body.style.backgroundColor = randomColor;
}


