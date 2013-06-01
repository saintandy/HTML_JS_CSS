
var mylist = []; // this is an empty list
mylist.push("Thank you!");

N = parseInt(prompt("Enter the number of the objects: "));

for (var i = parseInt(1); i <= N; i++) {
	var mystring = prompt("Enter the " + i + "th object: ");
	mylist.push(mystring);
}

var query = parseInt(1);
while (query > 0) {
	query = parseInt(prompt("Enter what object you want to see: "));
	alert(mylist[query]);
}


