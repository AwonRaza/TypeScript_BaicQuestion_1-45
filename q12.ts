/**
 * Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
 * 
 */


let greeting:string[] = ["ibtasam","ali","hamza","david","hanzel","enzo","bob"];
let meg:string = " I hope you are well ";

for (let i = 0;i<greeting.length;i++){
    console.log(`Dear ${greeting[i]} ${meg}`)

    

}