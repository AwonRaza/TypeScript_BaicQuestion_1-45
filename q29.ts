/**
 * 
 * 
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
in your array, the if block should print a statement,
such as You really like bananas
 * 
 * 
 * 
 * 
 */
let fav_fruits:string[]=["apple","mango","banana"];

if(fav_fruits.includes("apple")){
    console.log("you really like apple! ");
}else{
    console.log("this fruit is not in favourite list");
}
if(fav_fruits.includes("mango")){
    console.log("you really like mango! ");
}else{
    console.log("this fruit is not in favourite list");
}
if(fav_fruits.includes("banana")){
    console.log("you really like banana! ");
}else{
    console.log("this fruit is not in favourite list");
}
if(fav_fruits.includes("grapes")){
    console.log("you really like grapes! ");
}else{
    console.log("this fruit is not in favourite list");
}
if(fav_fruits.includes("pineapple")){
    console.log("you really like pineapple! ");
}else{
    console.log("this fruit is not in favourite list");
}

