/*Question_14:--- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner...*/

//Define array of guesst
let guestlist: string[] = ["Taha", "Basit", "Shahid", "Metab", "Azan"];

// Invit each guest
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner...`);
});
//map()
//Invite guest

let invitation: string[] = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner...` )

console.log(invitation);

invitation.forEach(invitations => {
    console.log(invitations);
})