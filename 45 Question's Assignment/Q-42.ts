/*Question_42:--- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified...*/


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["ali", "hamza", "bilal"];
// show_magicians(magician);


function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {    // i stant for index string
        magicians[i] = magicians [i] + ' the great '

}
}

const magicians2: string[] = ["ali", "hamza", "bilal"];
make_great(magicians2)
show_magicians(magicians2)