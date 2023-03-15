"use strict";
/*

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien.


*/
let alieng = "green";
let alieny = "yellow";
let alienr = "red";
if (alieng === "green") {
    console.log("played earned 5 points and the color is: " + alieng);
}
else {
    console.log("The colour of alien is not green");
}
if (alieny === "yellow") {
    console.log("played earned 10 points and the color is: " + alieny);
}
else {
    console.log("The colour of alien is not yellow");
}
if (alienr === "red") {
    console.log("played earned 15 points  and the color is: " + alienr);
}
else {
    console.log("The colour of alien is not red");
}
