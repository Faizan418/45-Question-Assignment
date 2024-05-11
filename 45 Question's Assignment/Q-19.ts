/*Question_19:--- Dinner Guests: 
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner...*/

let myFriends: string[] = ["Taha", "Basit", "Shahid", "Metab", "Hussain", "Ali"];

console.log(`\nI am inviting ${myFriends.length} number of friends to my dinner...\n`);

for(let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`);
    
}
