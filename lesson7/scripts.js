mocha.setup('bdd');
// chai has a lot of stuff, let's make assert global
let assert = chai.assert;

/*  1. Sum */
function sum (myArray){
	let sumValue = myArray.reduce( ( accumulator, currentValue ) => accumulator + currentValue);
	return sumValue;
}
console.log(sum ([10,20,30,40,50]));

/* 2. Multiply */
function multiply(myArray) {
	let multiplyValue = myArray.reduce (( accumulator, currentValue) => accumulator * currentValue);
	return multiplyValue;
}
console.log(multiply ([10,20,30,40,50]));

/* 3. Reverse */
function reverse(myStringParam){
	let reversedString = myStringParam.split('').reduce((reversed, character) => character + '' + reversed);
	return reversedString;
}
console.log(reverse("This is a reverse word."));

/* 4. Find longest word than i parameter */
function findLogestWord(myArray, i){
	let longestWord = myArray.filter((element) => (element.length > i));
	return longestWord;
}
console.log(findLogestWord(["this","is","JavaScript","yes"], 3));


/* Testing */
describe("Functional programming", function (){
	it ("1. Sum",
		function (){
			assert.equal (150, sum([10,20,30,40,50]));
		}
	)
	it ("2. Multiply", 
		function (){
			assert.equal (12000000, multiply([10,20,30,40,50]));
		}
	)
	it ("3. Reverse", 
		function(){
			assert.equal(".drow esrever a si sihT", reverse("This is a reverse word."));
		}
	)
	it ("4. Find longest word than i parameter", 
		function (){
			assert.deepEqual(["this", "JavaScript"], findLogestWord(["this","is","JavaScript","yes"], 3));
		}
	)
});