

var Vlad = {
	firstName: "Vlad",
	secondName: "Tarniceru",
	age: "15",
	about: function() { alert("My name is Vlad"); }
}

var operation = {
	add: function(a, b) {
		return a + b;
	},
	sub: function(a, b) {
		return a - b;
	},
	mul: function(a, b) {
		return a * b;
	},
	div: function(a, b) {
		return a / b;
	}
}

document.write(operation.div(1, 2));
