/*Question_29:--- Favorite Fruit:
 Make a array of your favorite fruits, and then write a series of independent if statements that check forcertain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!...*/
var favoriteFruits = ["apple", "banana", "orange"];
if (favoriteFruits.includes("mango")) {
    console.log("I would like to eat Mango");
}
else if (favoriteFruits.includes("apple")) {
    console.log("I would like to eat apple");
}
else {
    console.log("Fruits are not available!!!");
}
