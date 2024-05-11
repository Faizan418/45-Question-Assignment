/*Question_11:--- Names: Store the names of a few of your frinds in a array called names. Print each person's name by accessing each element in the list, one at a time...*/

let namesF: string[] = ["Taha", "Basit", "Shahid", "Metab", "Azan"];

//loop
//for each
//for of loop


// loop
for (let i = 0; i < namesF.length; i++) {
        console.log(namesF[i]);
}


// for each
namesF.forEach(name => {
      console.log(name);
});


// for of loop
for (const frindName of namesF) {
    console.log(frindName);
}