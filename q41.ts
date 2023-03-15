/**
 * 
 * 
 * Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
 * 
 * 
 */

let magician_name:string[]=["Dynamo","Paul Daniels","David Copperfield","David Blaine","Derren Brown"];


let show_magicians=(magicians:string[])=>{
    let magician:string[]= magicians; 
    for(let x of magician){
        console.log(x);
    }

}

show_magicians(magician_name);