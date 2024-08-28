window.onload = function () {
	let text = document.getElementById("headerText");
	let initialSize = parseInt(window.getComputedStyle(text).fontSize, 10);
	let size = initialSize;
	let gettingBigger = true;
	const fnc = function () {
		let newSize = size + "px"
		console.log(newSize);
		console.log(size);
		text.style.fontSize = newSize;

		if (size >= 30) {
			gettingBigger = false;
		}
		else if (size <= initialSize) {
			gettingBigger = true;
		}
		if (gettingBigger) {
			size++;
		}
		else {
			size--;
		}
		setTimeout(fnc, 50);
	};
	setTimeout(fnc, 20);
};
