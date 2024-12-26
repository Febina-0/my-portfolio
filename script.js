// Alert message when the page loads
alert("Welcome to My Portfolio!");
// Change the background color on button click
function changeBgColor() {
document.body.style.backgroundColor = "#ffebcd";
}
// Add a button to the "About Me" section dynamically
const aboutSection = document.getElementById("about");
const button = document.createElement("button");
button.innerText = "Change Background";
button.onclick = changeBgColor;
aboutSection.appendChild(button);
// Console log for practice
console.log("JavaScript is connected and running!");