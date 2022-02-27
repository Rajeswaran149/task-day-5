//=> arrow functions
//a: Print odd numbers in an array


let a=[1,2,3,4,5,6,7,8,9,10];
let b=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
};b(a);
// and IIFE 


((arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
})(a);

//b: Convert all the strings to title caps in a string array
let tittleCase=(string)=>{
    //string=string.toLowerCase();
    for(var i=0;i<string.length;i++){
        string[i]=string[i].charAt(0).toUpperCase() + string[i].substr(1).toLowerCase();
    }
    console.log(string);
}
tittleCase(["Raja","is","playing","cricket"])

//IIFE
let ai=["Raja","is","playing","cricket"];
((string1)=>{
    //string=string.toLowerCase();
    for(var i=0;i<string1.length;i++){
        string1[i]=string1[i].charAt(0).toUpperCase() + string1[i].substr(1).toLowerCase();
    }
    console.log(string1);
})(ai)


//c: Sum of all numbers in an array

//anonymous function
let ar = [6,4, 4, 15,2];
let ba=(arr) =>{ 
   console.log (arr.reduce((a,b)=>a+b))
};ba(ar)
 // IIFE
 let bi=[1,2,3,4,5];
 ((arr) =>{ 
    console.log (arr.reduce((a,b)=>a+b))
 })(bi)
 //d: Return all the prime numbers in an array
 //anonymous function
 let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let anonfun=(array)=>{
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
((arrayprm)=>{
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

//e: Return all the palindromes in an array
const words = ["madam",'foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
 let palindrome=(index)=>{
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
((index)=>{
let a=[];
for(i=0;i<index.length;i++){
if(index[i]===index[i].split("").reverse().join("")){
    a.push(index[i]);
}

}
console.log(a);
})(words1)
