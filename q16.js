"use strict";
/**
 *
 * More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

 * Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a
bigger dinner table.
Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
 */
let guest3 = ["ibi", "bob", "ali"];
for (let i = 0; i < guest3.length; i++) {
    let mes = `Dear ${guest3[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}
console.log(" i want to inform that Bob is not attending the Dinner");
guest3.splice(1, 1, "hamza");
for (let i = 0; i < guest3.length; i++) {
    let mes = `Dear ${guest3[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}
console.log("i am Happy to annouce that i have found a bigger place");
guest3.unshift("hanzel");
guest3.splice(guest3.length / 2, 0, "david");
guest3.push("enzo");
for (let i = 0; i < guest3.length; i++) {
    let mes = `Dear ${guest3[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}
