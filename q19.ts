/**
 * Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number
of people you are inviting to dinner.
 * 
 */

let guest5:string[]  = ["ibi","bob","ali" ];

let count;
for (let i=0;i<guest5.length;i++){
    count = i+1;
    let mes:string =`Dear ${guest5[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);

}
console.log("Total Iteration on this program is: "+count);