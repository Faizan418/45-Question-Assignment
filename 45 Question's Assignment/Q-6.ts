/*Question_6:--- Stripping Names: Store a person's name, and incllude some whitespace characters at the beginning and end of the name. Make sure you use each character sombination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces*/

let personName:string = "\t \n Muhammad Faizan \t \n";
console.log("name With White Space:", personName);


let personName2:string = personName.trim();
console.log("Stripped Name:", personName2);

