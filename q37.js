"use strict";
/**
 *
 *
 * Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
 *
 *
 *
 */
let makeShirt = (size = "Large", text = "I love TypeScript") => {
    console.log(`The size of the shirt is ${size} and the message on print is ${text}`);
};
makeShirt();
makeShirt("large");
makeShirt("Medium");
makeShirt("Small", "I want to learn TypeScript");
