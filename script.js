let theme = "light";

function toggle() {
	if (theme === "light") {
		document.getElementById("mainBody").style.backgroundColor = "#3a3a3a";
		document.getElementById("mainBody").style.color = "#ffffff";

		theme = "dark";
	} else {
		document.getElementById("mainBody").style.backgroundColor = "white";
		document.getElementById("mainBody").style.color = "black";

		theme = "light";
	}
}
