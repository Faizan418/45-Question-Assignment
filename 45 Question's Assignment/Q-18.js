/*Question_18:--- Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var places = ["Karachi", "Qutta", "Lahore", "Islamabad", "Multan", "Peshawar"];
console.log(places);
// making a copy of an Array
var copyofArry = places.slice();
var sortedArry = copyofArry.sort();
console.log(sortedArry);
// Printing original array
console.log(places);
// Reversing original Arra
var copyofArry2 = places.slice();
var reverseOriArray = copyofArry2.reverse();
console.log(reverseOriArray);
//Printing original array
console.log(places);
// Reverse the order of original Array
var reverseOriArray2 = places.reverse();
console.log(reverseOriArray2);
// Printing again original array
var againReverse = reverseOriArray2.reverse();
console.log(againReverse); // Same as original Array
// Sorting original Array
var sortOriArray = places.sort();
console.log(sortOriArray);
// Print reverse sorted Array
var reverseSortedArray = sortOriArray.reverse();
console.log(reverseSortedArray);
