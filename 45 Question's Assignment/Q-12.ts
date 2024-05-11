/*Question_12:--- Grettings: Start with the array you used in Exercise 11, but instead of just printing each person's names, print a message to them. The text of each message whould be the same but each message whould be personalized with the person's name...*/

let names: string[] = ["Taha", "Basit", "Shahid", "Metab", "Azan"];

//loop
//for each
//for of loop

//loop
for (let i = 0; i < names.length; i++) {
    console.log(`hello ${names[i]} ! how are you today?`);
    
}


//for each
names.forEach(friend => {
    console.log(`HI, ${friend} ! how are you today?`);
    
})


//for of loop
for (let friendName of names) {
    console.log(`Dear, ${friendName} ! how are you?`);
    
}