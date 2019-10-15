"use strict"
var name = 'Elena';
console.log(name);

let array = [1, 2, 3, 4, 5, 6, 8, 9];

function Element(arr) { 
  arr.forEach(function(eachElement){
 console.log('function forEach: '+ eachElement);
  }) ;
}
Element(array); 

let doubles;
let result;
function mapping(arr) {
  doubles = arr.map(function(num) {
    return result = num * num ;
  });
  console.log('function map: '+ doubles);
}
mapping(array); 

let result2;
function reducing(arr) {
  arr.reduce(function(sum, current){
    return result2= (sum + current);
  }) ;
  console.log('function reduce: '+ result2);
}
reducing(array); 

function arraySum(array){
let sum = 0;
for(var i = 4; i < [7]; i++){
    sum += array[i];
    }
console.log('function sum : ' + sum);
}
arraySum(array);

let arrayName= ['lemon', 'lime', 'kivi', 'paneapple', 'apple'] ;
var one = 'k';
let wordEach;
function filtration(arr) {
  wordEach = arr.filter(function (word) {
   
    return word.includes (one);
   })
  console.log ('function filter по букве '+one+ ' : ' + wordEach);
  }
filtration(arrayName)

let skip;
function skipping(arr) { 
  skip = arr.splice(3,1, );
  console.log('delete element using splice: '+ skip);
  console.log(arr);
 }
 skipping(arrayName); 


 let get;
 function getting(arr) { 
   get = arr.splice(3,1,'word');
   console.log('add element using splice ');
   console.log(arr);
  }
  getting(arrayName); 
 
