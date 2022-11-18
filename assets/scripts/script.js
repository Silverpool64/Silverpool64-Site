var colors = document.getElementsByClassName("colors");
/* Adding an element to the page with JavaScript
var footerTextOpt = ["This Site", "OverClocked ReMix", "SumRndmSite"];
footerText = document.createElement("a");
footerText.setAttribute("target", "_blank");
footerText.setAttribute("id", "footer-link");
footerText.innerHTML = footerTextOpt[Math.floor(Math.random() * 3)];
if (footerText.innerHTML == footerTextOpt[0]) {
	footerText.setAttribute("href", "index.html");
}
if (footerText.innerHTML == footerTextOpt[1]) {
	footerText.setAttribute("href", "http://ocremix.org/");
}
if (footerText.innerHTML == footerTextOpt[2]) {
	footerText.setAttribute("href", "http://sumrndm.site/");
}
footer.appendChild(footerText);*/
(function clock() {
	'use strict';

	document.addEventListener('DOMContentLoaded', function(){
		var currentTime = document.getElementById('current-time'),
		currentDate = document.getElementById('current-date');

		setInterval(function() {
			var d = new Date();

			var hours = d.getHours(),
			minutes = d.getMinutes(),
			seconds = d.getSeconds(),
			day = formatDay(d.getDay()),
			month = formatMonth(d.getMonth()),
			date = d.getDate(),
			year = d.getFullYear(),
			ampm = 'AM';

			if (hours > 12) {
				hours -= 12;
				ampm = 'PM';
			} else if (hours === 0) {
				hours = 12;
			}

			if (minutes < 10) {
				minutes = '0' + minutes;
			}

			var sepClass = '';
			if (d.getSeconds() % 2 === 1) sepClass = 'trans';

			var sep = '<span class="' + sepClass + '">:</span>';

			currentTime.innerHTML = hours + sep + minutes /*+ sep + seconds*/ + ' ' + ampm;
			currentDate.textContent = day + ', ' + month + ' ' + date + ', ' + year;
		}, 1000);

		function formatDay(dayIndex) {
			dayIndex = parseInt(dayIndex, 10);

			if (dayIndex < 0) {
				dayIndex = 0;
			} else if (dayIndex > 11) {
				dayIndex = 11;
			}

			var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			return dayNames[dayIndex];
		}

		function formatMonth(m) {
			m = parseInt(m, 10);

			if (m < 0) {
				m = 0;
			} else if (m > 11) {
				m = 11;
			}

			var monthNames = [
				'January', 'February', 'March',
				'April', 'May', 'June',
				'July', 'August', 'September',
				'October', 'November', 'December'
			];

			return monthNames[m];
		}
	});
})();

function formatColorDay(colorDayIndex) {
	colorDayIndex = parseInt(colorDayIndex, 10);

	if (colorDayIndex < 0) {
		colorDayIndex = 0;
	} else if (colorDayIndex > 11) {
		colorDayIndex = 11;
	}

	var colorDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return colorDayNames[colorDayIndex];
}

function colorOfTheDay() {
	var colorDate = new Date(),
	colorDay = formatColorDay(colorDate.getDay());

	for (var i = 0; i < (colors.length); i++) {
		if (colorDay == "Monday") {
			$(colors[i]).addClass("monday");
			console.log("It's Monday!");
		} else if (colorDay == "Tuesday") {
			$(colors[i]).addClass("tuesday");
			console.log("It's Tuesday!");
		} else if (colorDay == "Wednesday") {
			$(colors[i]).addClass("wednesday");
			console.log("It's Wednesday!");
		} else if (colorDay == "Thursday") {
			$(colors[i]).addClass("thursday");
			console.log("It's Thursday!");
		} else if (colorDay == "Friday") {
			$(colors[i]).addClass("friday");
			console.log("It's Friday!");
		} else if (colorDay == "Saturday") {
			$(colors[i]).addClass("saturday");
			console.log("It's Saturday!");
		} else if (colorDay == "Sunday") {
			$(colors[i]).addClass("sunday");
			console.log("It's Sunday!");
		}
	}
}

function prepareNavigation() {
	jQuery("#navButton").click(function(event) {
		if (jQuery("#navButton .toggle:before").hasClass("close")) {
			jQuery("#navButton .toggle:before").removeClass("close");
		} else {
			jQuery("#navButton .toggle:before").addClass("close");
		}

		event.preventDefault();
	});
}

function preparePage() {
	if (document.getElementById("jquery") != null) {
		prepareNavigation();
	}
	colorOfTheDay();
}

window.onload = function() {
	preparePage();
	if (document.getElementById("frmDice") != null) {
		prepareDiceForm();
	}
	if (document.getElementById("error404") != null) {
		prepare404Page(error404);
	}
};
