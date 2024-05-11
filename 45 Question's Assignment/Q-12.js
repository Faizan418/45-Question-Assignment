/*Question_12:--- Grettings: Start with the array you used in Exercise 11, but instead of just printing each person's names, print a message to them. The text of each message whould be the same but each message whould be personalized with the person's name...*/
var names = ["Taha", "Basit", "Shahid", "Metab", "Azan"];
//loop
//for each
//for loop
//loop
for (var i = 0; i < names.length; i++) {
    console.log("hello ".concat(names[i], " ! how are you today?"));
}
//for each
names.forEach(function (friend) {
    console.log("HI, ".concat(friend, " ! how are you today?"));
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("Dear, ".concat(friendName, " ! how are you?"));
}
