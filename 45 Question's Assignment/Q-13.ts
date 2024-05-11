/*Question_13:--- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle...*/

let transportationMode: string[] = ["car", "motorcycle", "bicycle", "bus"];

//loop
//for each
//for of loop


//loop
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a Honda motorcycle ${transportationMode[i]}`);

}


//for each
transportationMode.forEach(mode => {
    console.log(`I would like to own a Honda motorcyle ${mode}`);
    
});


//for of loop
for (let mode of transportationMode) {
    console.log(`I would likt to own a Honda motorcyle ${mode}`);
    
}