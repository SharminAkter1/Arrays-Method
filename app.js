// Create some arrays
const numbers = [43,46,56,78,98,50,34];
const  numbers2 = new Array(22,34,56,67,8);
const fruit = ['Apple','Banana','Orange',
'Pear'];
const mixed = [33,'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get Array Lenght
val = numbers.length;
//Check of is Array
// val = Array.isArray(numbers);
// //Get single Value
// val = numbers[5]
// //Insert into array
// numbers[2]= 100;
// //Find index of value
// val = numbers.indexOf(78);

//Mutating Array
//Add on to  end
// numbers.push(250,200);
// //Add on to front
// numbers.unshift(150);
// //Take of from end
// numbers.pop();
// //Take of from front
// numbers.shift();
// //Splice values
// numbers.splice(1,2);
// //Reverse number
// numbers.reverse();

//Concatenate array
// val = numbers.concat(numbers2);

//Sorting array
// val = fruit.sort();
// val = numbers.sort();

//Use the compare function
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// //Reverse Sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

//Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

//Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);



console.log (numbers)
console.log (val);
