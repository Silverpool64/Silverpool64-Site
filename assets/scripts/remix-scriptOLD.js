var ReMixes = document.getElementsByClassName("ReMix"),
ReMixHeaders = document.getElementsByClassName("ReMix-header"),
ReMixReset = document.getElementById("ReMix-reset"),
isLoaded = false,
test = null,
fred = null;

function hideReMixes(clicked) {
	if (isLoaded != true) {
		ReMixes[clicked].style.display = "none";
	} else if (fred != null) {
		ReMixes[fred].style.display = "none";
	}

	if (clicked == -1) {
		fred = null;
		return;
	}

	if (ReMixHeaders[clicked].id == ReMixes[clicked].id && ReMixes[clicked].style.display == "none") {
		ReMixes[clicked].style.display = "block";
	} else if (ReMixHeaders[clicked].id == ReMixes[clicked].id && ReMixes[clicked].style.display == "block") {
		ReMixes[clicked].style.display = "none";
	}


	fred = clicked;
}

for (var i = 0; i < ReMixes.length; i++) {
	ReMixes[i].style.display = "none";
	ReMixes[i].setAttribute("id", i);
	ReMixHeaders[i].setAttribute("id", i);
	ReMixHeaders[i].onclick = function() {
		test = this.id;
		hideReMixes(test);
	};
	if (i == (ReMixes.length - 1)) {
		isLoaded = true;
	}
}

ReMixReset.onclick = function() {
	hideReMixes(-1);
};
/*
ReMixHeaders[0].onclick = function() {
	hideReMixes(0);
};
ReMixHeaders[1].onclick = function() {
	hideReMixes(1);
};
ReMixHeaders[2].onclick = function() {
	hideReMixes(2);
};
ReMixHeaders[3].onclick = function() {
	hideReMixes(3);
};
ReMixHeaders[4].onclick = function() {
	hideReMixes(4);
};
ReMixHeaders[5].onclick = function() {
	hideReMixes(5);
};
ReMixHeaders[6].onclick = function() {
	hideReMixes(6);
};
ReMixHeaders[7].onclick = function() {
	hideReMixes(7);
};

ReMixHeaders[8].onclick = function() {
	hideReMixes(8);
};
ReMixHeaders[9].onclick = function() {
	hideReMixes(9);
};
ReMixHeaders[10].onclick = function() {
	hideReMixes(10);
};
*/
