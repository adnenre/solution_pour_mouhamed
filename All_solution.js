

/**
 * solution by @rebai_adnen
 */

 let array = [1,2,3,4];

 // sum of array element
 let addElementsOfAList = ((array) => array.reduce((a,b) => a + b,0));

 // product off array element
 let multiplyElementsOfAList = ((array) => array.reduce((a,b) => a * b));

 // new array with element square
 let myOneMap= ((array) => array.reduce((a,b) => {a.push(b*2); return a;},[]));
    


console.log(addElementsOfAList(array));
console.log(multiplyElementsOfAList(array));
console.log(myOneMap(array));

