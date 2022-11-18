var ReMixes = document.getElementsByClassName("ReMix"),
ReMixHeaders = document.getElementsByClassName("ReMixHeader"),
ReMixReset = document.getElementById("ReMixReset"),
test = null,
fred = null,
isLoaded = false;

function toggleReMixes(clicked = -1) {
	if (isLoaded != true) {
		ReMixes[clicked].style.display = "none";
	} else if (fred != null) {
		ReMixes[fred].style.display = "none";
	}

	if (clicked == -1) {
		fred = null;
		return;
	}

	if (isLoaded == true && test == ReMixes[clicked].id && ReMixes[clicked].style.display == "none") {
		ReMixes[clicked].style.display = "block";
	} else if (test == ReMixes[clicked].id && ReMixes[clicked].style.display == "block") {
		ReMixes[clicked].style.display = "none";
	}

	if (isLoaded == true) {
		fred = clicked;
	}
}

function hideReMixes() {
	test = document.getElementById(i);
	test = $( ".ReMix" ).attr( "id" );
	toggleReMixes(test);
}

for (var i = 0; i < ReMixes.length; i++) {
	ReMixes[i].setAttribute("id", i);
	ReMixHeaders[i].setAttribute("id", i);
	test = document.getElementById(i);
	$(test).on("click", hideReMixes);
	// ReMixHeaders[i].addEventListener("click", hideReMixes);
	toggleReMixes(i);
	if (i == (ReMixes.length - 1)) {
		isLoaded = true;
	}
}

ReMixReset.onclick = function() {
	toggleReMixes(-1);
};

// ReMixHeaders[0].onclick = function() {
// 	toggleReMixes(0);
// };
// ReMixHeaders[1].onclick = function() {
// 	toggleReMixes(1);
// };
// ReMixHeaders[2].onclick = function() {
// 	toggleReMixes(2);
// };
// ReMixHeaders[3].onclick = function() {
// 	toggleReMixes(3);
// };
// ReMixHeaders[4].onclick = function() {
// 	toggleReMixes(4);
// };
// ReMixHeaders[5].onclick = function() {
// 	toggleReMixes(5);
// };
// ReMixHeaders[6].onclick = function() {
// 	toggleReMixes(6);
// };
// ReMixHeaders[7].onclick = function() {
// 	toggleReMixes(7);
// };
