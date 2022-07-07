// FizzBuzz game example
let answer = parseInt(prompt('Enter any number for a Fizz Buzz game: '));

/*for (let i = 1; i <= answer; i++) {
	if (i % 3 === 0 && i % 5 ===0) {
		console.log('FizzBuzz!');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i) }
	} */

for (let i = 1; i <= answer; i++) {
	switch(true) {
	case i % 3 === 0 && i % 5 === 0:
		console.log('FizzBuzz');
		break;
	case(i % 3 === 0):
		console.log('Fizz');
		break;
	case(i % 5 === 0):
		console.log('Buzz');
		break;
	default:
		console.log(i);
		break;
	}
}
