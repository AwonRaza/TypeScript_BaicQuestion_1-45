"use strict";
/***
 *
 *
 * Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
 *
 *
 *
 */
let magician_name1 = ["Dynamo", "Paul Daniels", "David Copperfield", "David Blaine", "Derren Brown"];
let make_great = (magicians) => {
    let magician = magicians;
    for (let x of magician) {
        let message = `Dear ${x} Your are one of the famous Magiciab in the world `;
        console.log(message);
    }
};
make_great(magician_name1);
