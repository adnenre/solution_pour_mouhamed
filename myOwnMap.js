/**
 * 
 * solution by @rebai_adnen
 */
// function myOwnMap(array){
//     let newArray = [];
//     array.forEach(element => {
//         newArray.push(element*2) ;
//     });
//     return newArray ;
// }
// let myArray= [1,2,3,4];
// let result =myOwnMap(myArray);

// console.log(result);



var array = [1, 2, 3, 4];


function multiplyByTwo(x){
    return x * 2;
}


function myOwnMap(array,callback) {
    let newArray = array.reduce((a, b) => {
        a.push(callback(b));
        return a;
    }, []);
    return newArray;
}
let result = myOwnMap(array,multiplyByTwo);

console.log(result);