/**
 * 
 * 
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end
of your program.
 * 
 */


let guest4:string[]  = ["ibi","bob","ali" ];


for (let i=0;i<guest4.length;i++){
    let mes:string =`Dear ${guest4[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
    

}
console.log(" i want to inform that Bob is not attending the Dinner");

guest4.splice(1,1,"hamza");

for (let i=0;i<guest4.length;i++){
    let mes:string =`Dear ${guest4[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}


console.log("i am Happy to annouce that i have found a bigger place");


guest4.unshift("hanzel");
guest4.splice(guest4.length/2,0,"david");
guest4.push("enzo");



for (let i=0;i<guest4.length;i++){
    let mes:string =`Dear ${guest4[i]}
I would like to invite you to dinner at my home on ${new Date().toLocaleString()}. It would be wonderful to have you join me for an evening of good food and great conversation.

I have planned a special menu for the evening and I hope you will enjoy it. We can catch up on old times and discuss our shared interests.

Please let me know if you are able to make it. I look forward to hearing from you and hopefully, having you over for dinner.

Warm regards,

Aoun Malik   `;
    console.log(mes);
}

console.log(" i am sorry to say that the place i found was not ready so i can invite only two people");
for (let i =2;i<guest4.length;){
    let nguest = guest4.pop();
    console.log(nguest+ " you are not  invited sorry!");
    

}

for(let x of guest4){
    console.log(x+"  you are invited")
}