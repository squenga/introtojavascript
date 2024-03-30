/////// FUNCTION CONDITIONS /////////

function subwayStop(num) {
	if (num == 1) {
		return "Court St";
	} else if (num == 2) {
		return "Jay St MetroTech";
	} else if (num == 3) {
		return "DeKalb Av";
	} else {
		return "You missed your stop :p";
	}
}

/////// TEST /////////

console.log(subwayStop(1));
console.log(subwayStop(2));
console.log(subwayStop(3));
console.log(subwayStop(4));
