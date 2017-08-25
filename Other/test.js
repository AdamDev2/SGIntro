var numbers = [2, 15, 10, 5, 4, 9];

var largest = numbers[0];

function findMax(numbers) {
	for (var i = 0; i < numbers.length; i++) {
  		if (largest < numbers[i] ) {
        largest = numbers[i];
    	}
    
    }
	console.log(largest);
}

