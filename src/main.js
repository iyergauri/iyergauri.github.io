function kachow() {
	var logo = document.getElementById("logo");
	const red = Math.trunc(256 * Math.random());
	const green = Math.trunc(256 * Math.random());
	const blue = Math.trunc(256 * Math.random());
	var newCol = `rgb(${red}, ${green}, ${blue})`;
	console.log(newCol);
	logo.style.color = newCol;
}
