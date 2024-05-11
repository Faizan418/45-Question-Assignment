/*Question_14:--- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner...*/
//Define array of guesst
var guestlist = ["Taha", "Basit", "Shahid", "Metab", "Azan"];
// Invit each guest
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner..."));
});
//map()
//Invite guest
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner..."); });
// console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
