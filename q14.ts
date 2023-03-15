/**
 * 
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 * 
 */



let guest:string[]  = ["ibi","bob","ali" ];


for (let i=0;i<guest.length;i++){
    let mes:string =`Dear ${guest[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);

}



