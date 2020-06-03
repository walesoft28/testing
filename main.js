
//	function abdul(){
// 	let numLength = 100;
// 	for(let i=1; i<=numLength; i++){
// 	let check = (i%3 === 0 && i%5 === 0) ? 'FizzBuzz'
// 	: (i%5 === 0) ? 'Buzz'
// 	: (i%3 === 0) ? 'Fizz'
// 	: i
// 	console.log(check)
// 	}	
// }

// function usman(){
// 	let numLength = 100
// 	for(let i=1; i<=numLength; i++){
// 		if(i%3 === 0 && i%5 === 0){
// 			console.log('FizzBuzz')
// 		} else if(i%5 === 0){
// 			console.log('Fuzz')
// 		} else if(i%3 === 0){
// 			console.log('Fizz')
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// abdul();
// usman();

// const person = {
// // 	name: 'Abdul',
// // 	pet:{
// // 		type:'dog',
// // 		name:'oscar',
// // 		age:3,
// // 		child:{
// // 			name:'romeo',
// // 			age:1,
// // 			food:['bones','meat','fish']
// // 		}
// // 	}
// // }

// // console.log(person.pet.child.age)
// // console.log(person.pet.type)
// // console.log(person['pet']['child']['food'][1])
// // console.log(JSON.stringify(person))

// // let personString = JSON.stringify(person);
// // console.log(person)
// // console.log(personString)

// // personString = JSON.parse(personString)
// // console.log(personString)

// // function Human (firstname, lastname, age){
// // 	this.firstname = firstname;
// // 	this.lastname = lastname;
// // 	this.age = age;
// // }

// // Human.prototype.fullname = function(){
// // 	return this.firstname + ' ' + this.lastname;
// // }

// // let humanOne = new Human('Rose', 'Jackson', 23);
// // let humanTwo = new Human('John', 'Cena', 27)


// //  // console.log(humanOne);
// //  // console.log(humanTwo);
// //  console.log(humanTwo.fullname())
// //  console.log(humanOne.fullname())

// // function SuperHuman(firstname, lastname, age, power){
// // 	Human.call(this, firstname, lastname, age)
// // 	this.power = power;
// // }

// // let superman = new SuperHuman('James','Bond', 30, 'flying');

// // console.log(humanTwo.__proto__, humanOne.__proto__)


// // console.log(superman);	

// // const check = {
// // 	name:'test',
// // 	addNum:function(){
// // 		console.log(this)
// // 	},

// // 	add:() => {
// // 		console.log(this)
// // 	}


// // }




// // check.addNum();
// // check.add();



// const person = {
// 	firstname: 'Abdulsamad',
// 	lastname: 'Usman',
// 	hobbies: ['Playing Piano', 'Playing Guitar', 'Programming'],
// 	age: 25,
// 	girlfriend:{
// 		name: 'My Lovely Guitar',
// 		age:1,
// 		color: 'lightbrown'
// 	},

// 	get fullname(){
// 		return `${this.firstname} ${this.lastname}`
// 	},

// 	set fullname(value){
// 		const name = value.split(' ')
// 		this.firstname = name[0];
// 		this.lastname = name[1];
// 	}
// }

// // const fruits = ['apple', 'mango','orange', 'grape', 'lemon', 'bananna'];
// // const check = fruits.splice(1,1, 'pawpaw');
// // const joined = fruits.join(' + ')
// // console.log(check)
// // console.log(fruits)
// // console.log(joined)



// const file_url = './sample.json'

// const xhr = new XMLHttpRequest();

// function getDate(){
// 	if(xhr.readyState === 0){
// 	if(xhr.status === 200){
// 		console.log(xhr.responseText)
// 	} else {
// 		console.log('Unsuccessful')
// 	}
// }

// }


// // xhr.open('GET', file_url, true);
// // xhr.send()


// // const summation = function sum(num){
// // 	if (num <= 0) {
// // 		return 0;
// // 	}
// // 	return num + sum(num - 1);
// // }

// // console.log(summation(8))





// // var summationToo = function (num) {
// //   let result = 0;
// //   for (var i = 1; i <= num; i++) {
// //     result += i;
// //   }
  
// //   return result;
// // }

// // console.log(summationToo())

// // const personProto = {
// // 	greet(){
// // 		console.log("Hello" + " " + this.name)
// // 	}
// // }

// // function Greet(name){
// // 	this.name = name;
// // }

// // Greet.prototype = personProto
// // person1 = new Greet();
// // person1.name = 'Abdul';
// // console.log(person1);
// // person1.greet()

// // person2 = new Greet('Sarah')
// // person2.greet()

// // const human = {
// // 	greet(){
// // 		console.log("Hi " + this.name);
// // 	}
// // }

// // const firstPerson = Object.create(human, {
// // 	name:{value:'James'},
// // 	age:{value:3},
// // 	bestFood:{value:'rice'}
// // });

// // console.log(firstPerson.name)

//     const stations = [
//       ['Big Bear Donair', 20, 'restaurant'],
//       ['Bright Lights Elementary', 30, 'school'],
//       ['Moose Mountain Community Centre', 25, 'community centre']
//     ];

// const chooseStations = (stations) => {
//   const appropriateStation = stations
//   	.filter(station => station[1] >= 20 && (station[2] === 'school'|| station[2] === 'community centre'))
//   	.map(station => station[0]);
//   return appropriateStation;
// }

// // // const chooseStations = (stations) => {
// // // 	let appropriateStations = [];
// // // 	for(let i=0; i<stations.length; i++){
// // // 		if(stations[i][1] >= 20 && (stations[i][2] === ('school' || 'restaurant')))		{
// // // 			appropriateStations.push(stations[i][0])
// // // 		}
// // // 	}
// // // 	return appropriateStations;
// // // }

// // console.log(chooseStations(stations))

// // const chooseStations = (stations) => { 
// //   let goodStations = [];
// //   for(let i=0; i<stations.length; i++){
// //     if((stations[i][1] >= 20) && (stations[i][2] === 'school'||stations[i][2] === 'community centre')){
// //       goodStations.push(stations[i][0]);
// //     }
// //   }
// //   return goodStations;
// // }

//     const interviews = [
//       'smart city', 
//       'rebuild the lighthouse', 
//       'arts funding', 
//       'transportation',
//       'arts funding', 
//       'rebuild the lighthouse', 
//       'sports funding', 
//       'tax cuts', 
//       'smart city',
//       'arts funding', 
//       'smart city'
//     ]


// const termTopics = (interviews) => {
//   // Code here!

//   // Remember to return an array!
//   let topicCount = new Array(3);
//   topicCount.fill(0)
//   for(let i=0; i<interviews.length; i++){
//     if(interviews[i] === 'smart city'){
//       topicCount[0]++
//     }
//         if(interviews[i] === 'arts funding'){
//       topicCount[1]++
//     }
//         if(interviews[i] === 'transportation'){
//       topicCount[2]++
//     }
//   }
//   return topicCount;
// }

// console.log(termTopics(interviews))

//     const bins = {
//         waste: 4,
//         recycling: 2,
//         compost: 5
//     }



// const smartGarbage = (trash, bins) => {
//     // Code here!
//     bins[trash]++;
//     return bins;
// }

//     const cars = [
//       {
//         time: 1568329654807,
//         speed: 40,
//       },
//       {
//         time: 1568329821632,
//         speed: 42,
//       },
//       {
// //         time: 1568331115463,
// //         speed: 35
// //       }
// //     ]


// // const carPassing = (cars, speed) => {
// //   // Code here!
// //   const newObj = {
// //     time: Date.now(),
// //     speed: speed
// //   }
// //   cars.push(newObj);
// //   return cars;
// // }

// // console.log(carPassing(cars, 49))

// const student = [
// 	{
// 		name:'Abdul',
// 		score:98
// 	},
// 	{
// 		name: 'John',
// 		score: 50
// 	},
// 	{
// 		name: 'Esther',
// 		score: 27
// 	},
// 	{
// 		name: 'Queen',
// 		score: 74
// 	}
// ]

// const numbers = [14, 18, 20, [23, 56, 28], 83, 94,[34, 29], 56];

// // const totalNumbers = numbers.reduce((accum, currVal) => accum + currVal);
// // console.log(totalNumbers)

// // const scoreFound = student.find(score => score.score > 50); 
// // console.log(scoreFound)
// // const iterator = numbers.entries();
// // console.log(iterator.next().value);

// // for(let x of iterator){
// // 	console.log(x);
// // }

// const totalScore = student.reduce((accum, currVal) => accum + currVal.score, 0);
// console.log(totalScore);

// function flattenArray(data) {
//   // our initial value this time is a blank array
//   const initialValue = [];

//   // call reduce on our data
//   return data.reduce((total, value) => {
//     // if the value is an array then recursively call reduce
//     // if the value is not an array then just concat our value
//     return total.concat(Array.isArray(value) ? flattenArray(value) : value);
//   }, initialValue);
// }

// console.log(flattenArray(numbers))
// console.log(numbers)

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8];
// const total = [];

// console.log(array1.concat(array2))
// name = 'Abdul';

// console.log(total.concat(array1));
// console.log(total);
// // console.log(Array.isArray(name))

//     const spots = [
//       // COLUMNS ARE X
//       //    0    1    2    3    4    5
//           ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//           ['s', 'M', 's', 'S', 'R', 'M'], // 1
//           ['s', 'M', 's', 'S', 'R', 'm'], // 2
//           ['S', 'r', 's', 'm', 'R', 'M'], // 3
//           ['S', 'r', 's', 'm', 'R', 'M'], // 4
//           ['S', 'r', 'S', 'M', 'M', 'S'], // 5
//       ]

//     const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'

// const whereCanIPark = (spots, vehicle) => {
//   let options = { regular: 'R', small: 'RS', motorcycle: 'RSM' }
//   for (let i=0; i<spots.length;i++) 
//     for (let j=0; j<spots[i].length;j++) 
//       if (options[vehicle].includes(spots[i][j])) {
//         return [j,i]
//       }
//   return false;
// }

// console.log(whereCanIPark(spots, 'regular');


// const example = [1,2,3,4,5,6,7,8,9];
// console.log(example.slice(0,3))


// const one = 'abdul';
// const two = 'Abdul';
// // small letters come before capital letters
// console.log(one > two);

//simple function to capitalize the first letter of a word passed to it
// function capitalizeFirst(word){
// 	const strModified = word.split('')
// 	const caps = strModified[0].toUpperCase();
// 	strModified.splice(0,1,caps);
// 	return strModified.join('');
// }

// function capitalizeEach(words){
// 	const newString = [];
// 	const letterArray = words.split(' ').map(word => word.split(''));
// 		for(let i=0; i < letterArray.length; i++){
// 			let caps = letterArray[i][0].toUpperCase();
// 			letterArray[i].splice(0,1,caps);
// 			newString.push(letterArray[i].join(''))
// 		}
// 	return newString.join(' ')
// }

// const testing = capitalizeEach('wohoo this is nice');
// console.log(testing);

// const finalTest = capitalizeEach('this is really going to be awesome. I am really happy!!');
// console.log(finalTest);

//     const buses = {
//       pickadilly: {
//           distance: 10,
//           speed: 5
//       },
//       uptown: {
//           distance: 13,
//           speed: 10
//       }
//     }

// const busTimes = buses => {
//   // Code here!
//   for(let bus in buses){
//   	console.log(buses[bus])
//   }

//   return {
//   	bus: buses[bus].distance/buses[bus].speed 
//   }
// }

// console.log(busTimes(buses));





// function count(){
// 	var counter = 0;
// 	var increment = function(){
// 		return counter++;
// 	}

// 	return increment
// }

//  var x = count()
//  console.log(x())
//  console.log(x())
//  console.log(x())

// function factorial(n){
// 	if(n <= 0){
// 		return 1;
// 	}

// 	var result = n;

// 	while(n>1){
// 		result *= (n-1);
// 		n = n - 1;
// 	}

// 	return result;
// }

// console.log(factorial(5));

// function doFactorial(n){
// 	if(n <= 1){
// 		return 1
// 	}

// 	return n * doFactorial(n-1);
// }

// console.log(doFactorial(5))

// var increment = (function counter(){
// 	var a = 0;
// 	return function(){
// 		return a += 1;
// 	} 
// })();

// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.dir(increment)


// let beauty = document.querySelector('input');
// beauty.addEventListener('mouseover', function(e){
// 	let box = document.querySelector('.box')
// 	box.classList.toggle('box-green');
// })


// let check = document.querySelector('button');
// check.addEventListener('click', function(e){
// 	e.preventDefault()
// 	let formVal = document.querySelector('input').value;
// 	let node = document.createElement('li');
// 	let textnode = document.createTextNode(formVal);
// 	node.appendChild(textnode)
// 	let output = document.getElementById('output').appendChild(node)
// 	document.querySelector('input').value = '';
// 	let database = localStorage.setItem('data', formVal);
// });

// function gcd_two_numbers(x, y) {
//   if ((typeof x !== 'number') || (typeof y !== 'number')) 
//     return false;
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while(y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
//   return x;
// }

// console.log(gcd_two_numbers(12, 13));
// console.log(gcd_two_numbers(9, 3));



// function fizzBuzz(){
// 	for(i = 1; i <= 100; i++){
// 		if(i%3 === 0 && i%5 === 0){
// 			console.log('FizzBuzz')
// 		} else if(i%3 === 0){
// 			console.log('Fizz')
// 		} else if(i%5 === 0){
// 			console.log('Buzz')
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// const array = [1, 1, 1, 3, 3, 2, 2, 'a', 'a', 'b', 'a', 'b'];

// Remove Duplicates in An Array ----> Method 1

// const unique = array.filter((element, index) => {
//   return array.indexOf(element) === index;
// });
// console.log(array.indexOf('a'))
// console.log(array, unique)

// Remove Duplicates in An Array -----> Method 2

// const unique = [...new Set(array)];

// Remove Duplicates in An Array ----> Method 3

// const unique = array.reduce((result, element) => {
//   return result.includes(element) ? result : [...result, element];
// }, []);

// console.log([...Array(100)].map((n,i)=>[++i,'Rat','Ghost','Spider'][!(i%3)+!(i%5)*2]).join('\n'))

// for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

// for (var i = 1; i <= 100; i++) {
//   var f = i % 3 == 0, b = i % 5 == 0;
//   console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// }








