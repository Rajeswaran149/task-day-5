//task1
//Do the below programs in anonymous function & IIFE
//a Print odd numbers in an array
//anonymous function

let a=[1,2,3,4,5,6,7,8,9,10];
let b=function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
};b(a);
// and IIFE


(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
})(a);


//b Convert all the strings to title caps in a string array
//anonymous function
let tittleCase=function(string){
    //string=string.toLowerCase();
    for(var i=0;i<string.length;i++){
        string[i]=string[i].charAt(0).toUpperCase() + string[i].substr(1).toLowerCase();
    }
    console.log(string);
}
tittleCase(["Raja","is","playing","cricket"])

//IIFE
let ai=["Raja","is","playing","cricket"];
(function(string1){
    //string=string.toLowerCase();
    for(var i=0;i<string1.length;i++){
        string1[i]=string1[i].charAt(0).toUpperCase() + string1[i].substr(1).toLowerCase();
    }
    console.log(string1);
})(ai)

//c Sum of all numbers in an array
//anonymous function
let ar = [6,4, 4, 15,2];
let ba=function(arr) { 
   console.log (arr.reduce((a,b)=>a+b))
};ba(ar)
 // IIFE
 let bi=[1,2,3,4,5];
 (function(arr) { 
    console.log (arr.reduce((a,b)=>a+b))
 })(bi)
 //d Return all the prime numbers in an array
 //anonymous function
 let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let anonfun=function(array){
    let result=[];
for(i=0;i<array.length;i++){
  for (var j = 2; j <= Math.sqrt(array[i]); j++) {
    if (array[i] % j === 0){
        break;
    }else{
        result.push(array[i]);
    }
  }
  if(array[i]==2||array[i]==3){
      result.push(array[i])
  }
}
return result
};
console.log(anonfun(numArray));

//IIFE
let numArray1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
(function (arrayprm){
    let result=[];
for(i=0;i<arrayprm.length;i++){
  for (var j = 2; j <= Math.sqrt(arrayprm[i]); j++) {
    if (arrayprm[i] % j === 0){
        break;
    }else{
        result.push(arrayprm[i]);
    }
  }
  if(arrayprm[i]==2||arrayprm[i]==3){
      result.push(arrayprm[i])
  }
}
console.log(result);
})(numArray1);
 //e Return all the palindromes in an array
//anonymous function
 const words = ["madam",'foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
 let palindrome=function (index){
 let a=[];
 for(i=0;i<index.length;i++){
 if(index[i]===index[i].split("").reverse().join("")){
     a.push(index[i]);
 }
 
 }
 console.log(a);
 };palindrome(words)
 //IIFE
 

const words1 = ["madam",'foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
(function (index){
let a=[];
for(i=0;i<index.length;i++){
if(index[i]===index[i].split("").reverse().join("")){
    a.push(index[i]);
}

}
console.log(a);
})(words1)

//f Return median of two sorted arrays of same size
//anonymous function
const arrr1 = [1, 12, 15, 26, 38];
const arrr2 = [2, 13, 17, 30, 45, 47];
let median = function(a, b){
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
    
    //If even then return the average of two mid elements
    return ((c[half] + c[half - 1]) / 2);
};
console.log(median(arrr1, arrr2))

//IIFE
const arrr3 = [1, 12, 15, 26, 38,1];      
const arrr4 = [2, 13, 17, 30, 45, 47];
(function(a, b){
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
    
    //If even then return the average of two mid elements
    console.log((c[half] + c[half - 1]) / 2);
})(arrr3, arrr4);

//Remove duplicates from an array
//anonymous function
var arrfruits=["apple"," orange","mango","apple"];
let actualfruits=function (fruit){
return fruit.filter((value,index) => fruit.indexOf(value)=== index);
}
console.log(actualfruits(arrfruits))
//IIFE
var arrfruits1=["apple"," orange","mango","apple"];
(function (fruit){
console.log(fruit.filter((value,index) => fruit.indexOf(value)=== index));
})(arrfruits1);
//Rotate an array by k times
//anonymous function
var arr4=[1,2,3,4,5,6];
var k=4;
var rotate=function(value){
    let a;
    for(var i=0;i<k;i++){
        a=value[value.length-1]
        value.pop()
        value.unshift(a)
    }
    console.log(value)
};rotate(arr4)
//IIFE
var arr3=[1,2,3,4,5,6];
var k=3;(function(value){
    let a;
    for(var i=0;i<k;i++){
        a=value[value.length-1]
        value.pop()
        value.unshift(a)
    }
    console.log(value)
})(arr3)

