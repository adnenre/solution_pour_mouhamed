

/**
 * 
 * solution by @rebai_adnen
 */
function multiplyElementOfAList(array){
    return array.reduce((a,b) => a * b);
}
let myArray= [1,2,3,4];
let result = multiplyElementOfAList(myArray);

console.log(result);