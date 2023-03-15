"use strict";
/**
 *
 * Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14.
 Add a print statement at th your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
 *
 *
 */
let guest2 = ["ibi", "bob", "ali"];
for (let i = 0; i < guest2.length; i++) {
    let mes = `Dear ${guest2[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}
console.log(" i want to inform that Bob is not attending the Dinner");
guest2.splice(1, 1, "hamza");
for (let i = 0; i < guest2.length; i++) {
    let mes = `Dear ${guest2[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}
