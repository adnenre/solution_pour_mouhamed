
/**
* solution by @adnen_rebai
 */


 
 function addElementsOfAList(array){
     return array.reduce((a,b) => a +b);
 }
 let myArray= [1,2,3,4];
 let result = addElementsOfAList(myArray);

 console.log(result);