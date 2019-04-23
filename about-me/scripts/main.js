var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lizzy-garden.jpg') {
      myImage.setAttribute ('src','images/barney.jpg');
    } else {
      myImage.setAttribute ('src','images/lizzy-garden.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Excited to Meet You, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Excited to Meet You, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }