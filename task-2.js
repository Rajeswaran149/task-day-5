//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) { 
console.log(num+5);
}
var result = (addFive(5));
var result =   (addFive(0));
var result = (addFive(-5));

//Write a function called “getOpposite”.
//Given a number, return its opposite                                        

function getOpposite(num) {
  if(num==String(num)&&Number.parseFloat(num)){
    console.log(-1)
  }else{
    console.log(num*-1)
  }
  
}
var result = getOpposite(5)
var result = getOpposite(0)
var result = getOpposite(-5)
var result = getOpposite("5a")
var result = getOpposite(5.5)
//Fill in your code that takes an number minutes and converts it to seconds.

function toSeconds(min) {
  console.log(min*60)
}
var secs = toSeconds(5)
var secs = toSeconds(3)
var secs = toSeconds(2)
//Create a function that takes a string and returns it as an integer.
function toInteger(mystr) {
  console.log(+mystr)
}
var myint = toInteger("6")
var myint = toInteger("1000")
var myint = toInteger("12")
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(myint) {
  return myint+1;
}
console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))
//Create a function that takes an array and returns the first element.

function getFirstElement(arr) {
  return parseInt(arr[0]);
}
console.log(getFirstElement([1, 2, 3]))
console.log(getFirstElement([80, 5, 100]))
console.log(getFirstElement([-500, 0, 50])) 
//Write a function that converts hours into seconds.
function hourToSeconds(arr) {
  console.log(arr*60*60);
}
var data = hourToSeconds(2)
var data = hourToSeconds(10)
var data = hourToSeconds(24)
//Create a function that takes height and width and finds the perimeter of a rectangle.
//formula : P=2(l+w)
function findPerimeter(num1,num2) {
  console.log(2*(num1+num2));
}
var peri = findPerimeter(6,7)
var peri = findPerimeter(20,10)
var peri = findPerimeter(2,9)
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false
function lessThan100(num1,num2) {
  if((num1+num2)<100){
    return true;
  }else{
    return false;
  }
}
console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
//Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1,num2) {
  if(num1%num2==0){
    return 0;
  }else{
    return num1;
  }
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))
console.log(remainder(5,5))
//   The farmer has counted his animals and he gives you a subtotal for each species.
 //You have to implement a function that returns the total number of legs of all the animals. 
function CountAnimals(tur,horse,pigs) {
  return (tur*2)+(horse*4)+(pigs*4);
}
console.log(CountAnimals(2,3,5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5,2,8));
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
  return (num1*num2*60);
}
console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
  if(num1%5==0){
    return true;
  }else{
    return false;
  }
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))
//Given a number, “isEven” returns whether it is even.
function isEven(num){
  if(num!=String(num)&&num%2==0){
    return true;
  }else{
    return false;
  }
 }
 console.log(isEven(12))
 console.log(isEven(0))
 console.log(isEven(11))
 console.log(isEven("11h"))
 //Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
 function areBothOdd(num1, num2){
  if(num1%2!==0&&num2%2!==0){
    return true;
  }else{
    return false;
  }
 }
 console.log(areBothOdd(1,3));
 console.log(areBothOdd(1,4));
 console.log(areBothOdd(2,3));
 console.log(areBothOdd(0,0));
 //Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
 function getFullName(firstName, lastName){

  console.log((firstName + ' ' + lastName))

 }getFullName("GUVI", "GEEK");

//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
  console.log(word1.length)


 }getLengthOfWord("GUVI");
 getLengthOfWord("");
//  getLengthOfWord();
//  getLengthOfWord(9);

//Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
  if(word1.length===word2.length){
    return true;
  }else{
    return false;
  }
 }
 console.log(isSameLength("GUVI", "GEEK"));
 //Create a function to calculate the distance between two points defined by their x, y coordinates
 function getDistance(x1, y1, x2, y2)
{
  return Math.sqrt(Math.pow(x2 - x1, 2) +
  Math.pow(y2 - y1, 2) * 1.0);
}
console.log(getDistance(100, 100, 400, 300));
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
//If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array, n) {
  return array[n];
}

var output = getNthElement([1, 3, 5, 6], 1);
console.log(output);
//Given an array, “getLastElement” returns the last element of the given array. 
//If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){
  if(array.length!==0){
    return array[array.length-1];
  }else{
    return -1;
  }
 }
 console.log(getLastElement([1, 2, 3, 4]));

 //Given an object and a key, “getProperty” returns the value of the property at the given key.
 // If there is no property at the given key, it should return undefined.
 var obj = {
  mykey: "value"
 };
 
 function getProperty(obj, key) {
  return obj.hasOwnProperty(key) ?obj[key] : undefined; 
 }
 console.log(getProperty(obj,"mykey"));
 console.log(getProperty(obj,"dummykey"));

 //Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
 var obj = {
  
 };
 function addProperty(obj, key){
  obj.key =  true;
  return obj;
 }
 console.log(addProperty(obj,"mykey"));
 //Given an object and a key, “removeProperty” removes the given key from the given object.

 var person = {
  name: "Harry",
  age: 16,
  gender: "Male"
};
 function removeProperty(obj, key){
  delete obj[key];
 }
 console.log(removeProperty(obj, "name"));
 //Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
 var numberarr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  function countPositivesSumNegatives(arr) {
  const answer = []
  let positiveSum = 0
  let negativeSum = 0

  if(arr && arr.length) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
          positiveSum += 1
      } else {
          negativeSum += arr[i]
      }
    }
    answer.push(positiveSum)
    answer.push(negativeSum)
  }
  return answer
}
console.log(countPositivesSumNegatives(numberarr));
//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
  const answer = []
  let positiveSum = 0
  //let negativeSum = 0

  if(ar && ar.length) {
    for(let i = 0; i < ar.length; i++) {
      if(ar[i] > 0) {
          positiveSum += ar[i]
      } 
    }
    answer.push(positiveSum)
    //answer.push(negativeSum)
  }
  return answer
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
  var myArray = [];
  for (var i=0; i<=n; i++){
    myArray.push(2**i);
  }
  return myArray
}
console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(2))
//Find the maximum number in an array of numbers
function findMax(ar)
{
  console.log(Math.max(...ar))
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
 for(i=2;i<n;i++){
     if(n==2){
         return true;
     }else if(n%i!==0){
         return true;
     }else{
         return false;
     }
 }
}

//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
  var ar = [];
    
  var i = startAt;
  
  while(ar.length < nPrimes)
  {
      if (isPrime(i))
      {
          ar.push(i);
      }
      
      i++;
  }
  
  return ar;
// Returns true if a number is prime
function isPrime(n)
{
  if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}
}

//Reverse a string

function reverseString(s)
{
  
  console.log(s.split("").reverse().join(""));
}
(reverseString("JavaScript"));
//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
function mergeArrays(br1, br2)
{
 var result = [];
console.log(...br1,...br2);
 
 
}mergeArrays(ar1,ar2)
//Calculate the sum of numbers received in a comma delimited string

function sumCSV(sint)
{
  let strArr = sint.split(",");
  let sum = strArr.reduce(function(total, num){
    return parseFloat(total) + parseFloat(num);
  });
return sum;

}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));