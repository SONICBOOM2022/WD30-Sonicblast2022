let display = document.getElementById("result");

function insertValue(value) {
	if (value === "=") {
		display.value = eval(display.value);
	} else {
		display.value += value;
	}
}

function clearDisplay() {
	display.value = "";
}

function backspace() {
	display.value = display.value.slice(0, -1);
}
