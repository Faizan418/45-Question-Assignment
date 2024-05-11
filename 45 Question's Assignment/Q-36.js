/*Question_36:--- T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function...*/
//1sst way to create a function...
// function make_shirt(size: number, label: string){
//     // return size + label;
//     return `My shirt size is ${size} and my lable is ${label}`;
// }
// let myFunction = make_shirt(36, " The sunny Day");
// // How to print on console
// console.log(myFunction);
//2nd way to create a function...
var myFunction = function (size, label) {
    return size + label;
};
console.log(myFunction(36, " The cool Day"));
