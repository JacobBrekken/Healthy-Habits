const progress = document.querySelector("svg circle");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");
let finalValue = 0;
let max = 0;

function changeWidth() {
	finalValue = parseInt(input.value, 10);
	max = parseInt(maxInput.value, 10);

	// Check if finalValue or max is NaN
	if (isNaN(finalValue) || isNaN(max)) {
		progress.innerText = ""; // Clear the percentage display
		const number = document.querySelector(".number");
		number.textContent = ""; // Clear the number in the center of the ring
		return; // Exit the function early
	}

	const percentage = (finalValue / max) * 100;
	const circumference = Math.PI * 160 * 2;
	progress.style.strokeDashoffset = circumference * (1 - percentage / 100);

	const number = document.querySelector(".number");
	number.textContent = `${Math.ceil(percentage)}%`;
}

input.addEventListener("keyup", function () {
	finalValue = parseInt(input.value, 10);
	changeWidth();
});

maxInput.addEventListener("keyup", function () {
	max = parseInt(maxInput.value, 10);
	changeWidth();
});
