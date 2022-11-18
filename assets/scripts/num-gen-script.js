//Global Variables
var sides,
	amount = null,
	result,
	resultChild = null;

//Radio IDs
var Coin = document.getElementById("Coin"),
	D2 = document.getElementById("2D"),
	D4 = document.getElementById("4D"),
	D6 = document.getElementById("6D"),
	D8 = document.getElementById("8D"),
	D10 = document.getElementById("10D"),
	D12 = document.getElementById("12D"),
	D20 = document.getElementById("20D"),
	D24 = document.getElementById("24D"),
	D30 = document.getElementById("30D"),
	D100 = document.getElementById("100D");

//Other IDs
var sidesID = document.getElementById("sides"),
	sidesNum = document.getElementById("sidesNum"),
	number = document.getElementById("number"),
	amountID = document.getElementById("amount"),
	resultStuff = document.getElementById("resultStuff"),
	errorMessage = document.getElementById("error-message"),
	diceForm = document.getElementById("frmDice");

diceForm.addEventListener("submit", rollDice);

function dice(s, a) {

	"use strict";

	for (var i = 0; i < a; i += 1) {
		result = Math.floor(Math.random() * s + 1);
		if (Coin.checked) {
			if (result === 1) {
				result = "Heads";
			} else if (result === 2) {
				result = "Tails";
			}
		}
		resultChild = document.createElement("p");
		resultChild.setAttribute("id", "results");
		resultChild.setAttribute("class", "results");
		resultChild.setAttribute("name", "results");
		resultChild.innerHTML = result;
		resultStuff.appendChild(resultChild);
		console.log(result);
	}
}

function removeResults() {

	"use strict";

	for (var i = 0; i < amount; i += 1) {
		if (!errorMessage.innerHTML == "") {
			break;
		}
		var resultsDisplay = document.getElementById("results");
		resultStuff.removeChild(resultsDisplay);
	}
}

function hideSides() {
	if (number.checked) {
		sidesID.style.display = "block";
	} else if (sidesID.style.display == "block") {
		sidesID.style.display = "none";
	}

}

function prepareDiceForm() {

	"use strict";

	number.onclick = function() {
		if (number.checked) {
			// use CSS style to show the "Sides" input element.
			hideSides();
		}
	};

	Coin.onclick = function() {
		if (Coin.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D2.onclick = function() {
		if (D2.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D4.onclick = function() {
		if (D4.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D6.onclick = function() {
		if (D6.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D8.onclick = function() {
		if (D8.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D10.onclick = function() {
		if (D10.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D12.onclick = function() {
		if (D12.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D20.onclick = function() {
		if (D20.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D24.onclick = function() {
		if (D24.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D30.onclick = function() {
		if (D30.checked) {
			// use CSS style to hide the "Sides" input element.
			hideSides();
		}
	};

	D100.onclick = function() {
		if (D100.checked) {
			// use CSS style to show the "Sides" input element.
			hideSides();
		}
	};

	// now hide the "Sides" input element on the initial page load.
	sidesID.style.display = "none";
}

function rollDice(event) {

	"use strict";

	event.preventDefault();

	//set amount of sides
	if (Coin.checked || D2.checked) {
		sides = 2;
	} else if (D4.checked) {
		sides = 4;
	} else if (D6.checked) {
		sides = 6;
	} else if (D8.checked) {
		sides = 8;
	} else if (D10.checked) {
		sides = 10;
	} else if (D12.checked) {
		sides = 12;
	} else if (D20.checked) {
		sides = 20;
	} else if (D24.checked) {
		sides = 24;
	} else if (D30.checked) {
		sides = 30;
	} else if (D100.checked) {
		sides = 100;
	}
	//this function removes the previous results
	if (resultChild !== null) {
		removeResults();
	}
	//making sure the 'sides' variable equals the 'Sides' drop-down menu if shown.
	if (!isNaN(sidesNum.value) && number.checked && sidesNum.value !== "" && sides !== 0) {
		sides = sidesNum.value;
	}
	//this code styles the 'errorMessage' element and rolls the dice.
	if (amount < 0 || amount === 0 || amount > 100 || isNaN(amount) || amount === null || amountID.value === "" ) {
		errorMessage.innerHTML = "Input how many times you want to roll your dice!";
		resultChild = null;
	}

	if (sides < 0 || sides === 0 || isNaN(sides) || sides === null || (sidesNum.value === "" && number.checked)) {
		errorMessage.innerHTML = "Input how many sides you want on your dice!";

	} else if (amountID.value !== "" && !isNaN(amountID.value) && !isNaN(sides)) {
		errorMessage.innerHTML = "";
		amount = amountID.value;
		dice(sides, amount);

	}
}
