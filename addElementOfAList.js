
/**
* solution by @adnen_rebai
 */


 
 function addElementsOfAList(array){
     let newArray =  array.reduce((a,b) => a +b,0);
     console.log(array);
     return newArray;
 }
 let myArray= [0,1,2,3,4];
 let result = addElementsOfAList(myArray);

 console.log(result);