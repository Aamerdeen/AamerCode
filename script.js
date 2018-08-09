
const myName = "Aamer"
const myLastName = "Mohammed"
const myFullName = myName + " " + myLastName

const number1= 4
const number2= 2
const sumNumbers = number1 + number2


function flipcoin (threshold) {

const myRandomNumber = Math.random()
if (myRandomNumber > threshold) {
alert ("you won, " + myName)
alert ("yep")
} else {
alert ("you lost, " + myName)
alert ("loser!")
}

}

function resizeButton () { 

const newRadius = Math.random ()*20;
$('.button').css ('border-radius', newRadius + "px")
}


function slideImage() {

	$('.myprofile').slideUp();
	$('.myprofile').slideDown();

}



