"use strict";
/***
 *
 * Names: Store the names of a few of your friends in a array called names. Print each person’s name
by accessing each element in the list, one at a time.
 *
 */
let friend = ["ibtasam", "ali", "hamza", "david", "hanzel", "enzo", "bob"];
for (let i = 0; i < friend.length; i++) {
    console.log(friend[i]);
}
// we can also do this 
for (let x of friend) {
    console.log(x);
}
