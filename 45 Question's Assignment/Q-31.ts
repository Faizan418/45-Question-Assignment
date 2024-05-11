/*Question_31:--- No Users: 
    Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed...*/


let userNames: string[] = ["Ali", "Fayaz", "Tahirq", "Admin", "Taha", "Basit"];

if (userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let user of userNames) {
        if ( user === "Admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, thank you for logging in again!!!`);
        }
    }
}

userNames = []
if (userNames.length === 0) {
    console.log("We need to find osme userNames!");
    
}