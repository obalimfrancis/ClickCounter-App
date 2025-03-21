let body = document.querySelector('body');
let clickCount = 0;
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const para = document.getElementById('toBeRemoved')


clickButton.addEventListener('click', () => {
  clickCount++;
  clickCountDisplay.textContent = `Clicked ${clickCount} times`;
});

//Add a new elemnt
let newHeading = document.createElement('h2');
newHeading.innerText = "When the button is clicked the count starts";
body.appendChild(newHeading);

//Remove an element
para.remove()