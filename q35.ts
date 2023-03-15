/**
 * Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
 * 
 * 
 */

let animal:string[]=["lion","tiger","leopard"];
for(let i = 0;i<animal.length;i++){
    console.log(animal[i]);
    if(animal[i] === "lion"){
        console.log("lion is the king!");
    }else if(animal[i] === "tiger"){
        console.log("Tigers are among the largest cats in the world");
    }else{
        console.log("The leopard is the most elusive and secretive of the large felids");
    }
}

console.log("the tiger, lion, and leopard are three cat species of the genus Panthera\n lion is the king from all of these");