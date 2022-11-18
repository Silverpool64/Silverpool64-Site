var Songs = document.getElementsByClassName("song"),
SongHeaders = document.getElementsByClassName("song-header"),
SongReset = document.getElementById("song-reset"),
isLoaded = false,
test = null,
fred = null;

function hideSongs(clicked) {
	if (isLoaded != true) {
		Songs[clicked].style.display = "none";
	} else if (fred != null) {
		Songs[fred].style.display = "none";
	}

	if (clicked == -1) {
		fred = null;
		return;
	}

	if (SongHeaders[clicked].id == Songs[clicked].id && Songs[clicked].style.display == "none") {
		Songs[clicked].style.display = "block";
	} else if (SongHeaders[clicked].id == Songs[clicked].id && Songs[clicked].style.display == "block") {
		Songs[clicked].style.display = "none";
	}


	fred = clicked;
}

for (var i = 0; i < Songs.length; i++) {
	Songs[i].style.display = "none";
	Songs[i].setAttribute("id", i);
	SongHeaders[i].setAttribute("id", i);
	SongHeaders[i].onclick = function() {
		test = this.id;
		hideSongs(test);
	};
	if (i == (Songs.length - 1)) {
		isLoaded = true;
	}
}

SongReset.onclick = function() {
	hideSongs(-1);
};
