/*Question_35:--- Animals: 
    Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!...*/


    let animalsName = ["Cow", "Sheep", "Goat", "Camel"];

//Printing only names...
for(let i of animalsName){
    console.log(i);   
}

for(let a of animalsName){
    console.log(`${a} is a Domestic Animal`);
}
console.log(`All these animals, ${animalsName[0]}, ${animalsName[1]}, ${animalsName[2]}, and ${animalsName[3]} meat is Halal in Islam`);

