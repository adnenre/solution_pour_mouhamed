/**
 * solution by @rebai_adnen
 */

let array = [1, 2, 3, 4];



let sum = (a,b) => a+b;

let multiply = (a,b) => a * b;
/**
 * 
 * @param {Array} array of number
 * @return {Number} return sum of all elements
 */

let addElementsOfAList = ((array) => array.reduce(sum, 0));



/**
 * @param {array}
 * @return {Number} Returns the result of multiplication of all element
 */
let multiplyElementsOfAList = ((array) => array.reduce(multiply, 1));




/**
 * 
 * @param {Number} 
 * @return {Number} return the double of a number
 */
let multiplyByTwo = (x) =>  x * 2;




/**
 * 
 * @param {Array} array  array of number
 * @param {function} callback function 
 * @return {Array}  return array with double of element
 */
let myOneMap = ((array, callback) => {
    let newArray = [];
    newArray = array.reduce((a, b) => {
        a.push(callback(b));
        return a;
    }, []);
    return newArray;
})



console.log(addElementsOfAList(array));
console.log(multiplyElementsOfAList(array));
console.log(myOneMap(array, multiplyByTwo));