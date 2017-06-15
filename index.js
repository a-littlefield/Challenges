function stringy(size) {
	//string starts with 1
	//receive input number
	//based on input number, determine the length of the string of 1's and 0's
	//return 0's and 1's based on the input number
	let numArray = []; // array to store the string of 0's and 1's
	var startNumber = '1';
	//loop through 
	//if statment, if previous number is 1, return 0 else return 1
	//how to get the index length of 4? How to tell comp. there is 4 numbers in the number 4?
	for (var i = 0; i < size; i++) {
		if (i + 1 === 1) {
			numArray.push('0')
		} else {
			numArray.push('1')
		}
	}
	return numArray;


}
console.log(stringy(4));


//start by finding the last digit in the number
//take that number and put it as the first string in an array
//continue the LOOP until you have an array displaying the number as a reverse string
function reverse(numberz) {			
	numberArray = [];

	for (var i = 0; i < numberz.length; i++) {//loop through the number given here and return each index as a string in reverse
		numberz[i+i].push(numberArray);//I want to push the selected number up to the numberArray.
	}
}
reverse(24579);


//i-1+i

//I want to dispaly a number(not yet defined) into the fibonacci code.
//I would take i-1 to get the number before current index, and add that to i -2 to get the current index's number
//how do you tell the computer what the last two numbers in the fib sequence were?
//start with the number given
//this part im a bit stuck on so here is what i am thinking: loop through the fibanacci sequence, do this by starting 
//with the [0] index (which is 1) and add it to the [1] index. This will give you the [2] index. Repeat this process indefinitely (or until you come to the input number). maybe you loop the i -1 plus i-2? 
//add the previous two numbers in the fibonacci sequence together to get current number


function fibo(numberIn) {
	
}


function checkCoupon(date) {
	//receive coupon date 
	//check the received coupon date with the expiration date
	//if coupon date is older than the expiration date return false
	//if coupon date is newer than or the same date as the  expiration date return true
	//expiration date is "june 15, 2017"
	//Set a new date and cross check the date with new date.
	let expire = new Date("June 15, 2017");
	let date = new Date();
	if (date > expire) { //strings need to be cross checked and strings cannot be cross checked...
		return false;
	} else {
		return true;
	}

}

console.log(checkCoupon("August 13, 2017"));


function email(e_mail) {
	//check that the email is valid
	//check that the first letter is a letter
	//check that there is an @ symbol
	//must be a . after the @
	//must be at least a single word character after the .
	//start by checking that the first character exists?
	if (e_mail.length < 5) {//find out how to check for symbols inside of a string
		//if you can check inside of a string for symbols, loop through all characters in string and check for @ and . within. If true return true 
		return false
	}



}
console.log(e_mail("hello@nice.com"));