var error404 = document.getElementById("error404"),
errorMessage = "The content you were looking for could not be found.",
errorMessageFunny = "The cute puppies you were looking for have imploded.",
footerText = [errorMessage, errorMessageFunny];

function prepare404Page(error) {
 	error.innerHTML = footerText[Math.floor(Math.random() * 2)];
}
