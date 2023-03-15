"use strict";
/**
 *
 * No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
 *
 *
 */
let user_name = ["piaic1", "piaic2", "piaic3", "piaic4", "admin", "piaic5", "piaic6", "piaic7", "piaic8", "piaic9", "piaic10"];
if (user_name.length === 0) {
    console.log("we need to find some user! ");
}
else {
    console.log("user is available! ");
}
for (let x = 0; x < user_name.length;) {
    user_name.pop();
}
console.log(user_name);
if (user_name.length === 0) {
    console.log("we need to find some user! ");
}
else {
    console.log("user is available! ");
}
