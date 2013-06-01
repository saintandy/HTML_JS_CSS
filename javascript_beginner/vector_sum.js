
var N = parseInt(prompt("Enter N: "));
var solution = parseInt(0);

for (var i = 1; i <= N; i++) {
	var rd = parseInt(prompt("Enter the " + i + "th number"));
	solution = solution + rd;
}

alert("The sum is " + solution);


