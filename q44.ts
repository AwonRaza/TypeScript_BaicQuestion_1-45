/**
 * 
 * Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
 * 
 * 
 * 
 */


let sandwich = (...item:string[])=>{

    console.log(`you orderd with ${item}`);

    


}

sandwich("bread", "ham", "cheese");
sandwich("bread", "turkey", "lettuce", "tomato", "mayo");
sandwich("bread", "peanut butter", "jelly", "banana");


