const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'assets/green.png') {
      myImage.setAttribute('src','assets/black.png');
    } else {
      myImage.setAttribute('src','assets/green.png');
    }
}

let myButton = document.querySelector('button');
let footHead = document.querySelector('h3');
function setFoot() {
	let str = prompt('Please enter footer text:');
	if (!str || str === null) {
		setFoot();
	} else {
		// Stores the value inside your browser's localStorage
		localStorage.setItem('fhStr', str);
		footHead.textContent = 'Footer. ' + str;
	}
}
// The line below does not work.
// myButton.onclick = setFoot();
myButton.onclick = function() {
	setFoot();
}

if (!localStorage.getItem('fhStr')) {
  setFoot();
} else {
  let storedString = localStorage.getItem('fhStr');
  footHead.textContent = 'Footer. '+ storedString;
}