consol.log("Print all the numbers between -10 and 19")
for (var i=-10; i < 20; i++){
	console.log(i);
};

console.log("Print the even numbers from 10 and 40")
for (var i=10; i <= 40; i+=2) {
	console.log(i);
};

console.log("Print all the odd numbers between 300 and 333")
for (var i =300 ; i <=333; i+=1) {
	if(i%2 !=0){
		console.log(i)
	};
};

console.log("Print all the numbe divisible by 3 and 5 between 5 and 50")
for (var i=5; i <= 50; i++) {
	if( i%3===0 && i%5===0){
		console.log(i);
	}
};