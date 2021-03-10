
/* this function removes all non-alphanumeric characters, then checks if the remaining string is a palindrome. */
function palindrome(str) {
	// convert to lowercase then remove all non-alphanumeric characters 
	let newStr = str.toLowerCase().replace(/\W|\s|_/ig, "");
	// conver to array, reverse array, then convert to one string
	let reverseStr = newStr.split("").reverse().join("");
    // verify first half of string matches last half of string
	return newStr === reverseStr;
}