var numbers = [1, -1, 1, -1, 1];
var sum = 0;

function sumOfRange(numbers) {
	for (var i = 0; i < numbers.length; i++) {
     	 sum += numbers[i];
    }
	console.log(sum);
}