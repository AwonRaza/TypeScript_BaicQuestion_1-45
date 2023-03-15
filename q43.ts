/**
 * 
 * 
 * Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
 * 
 * 
 * 
 */
let magician_names:string[]=["Dynamo","Paul Daniels","David Copperfield","David Blaine","Derren Brown"];


let show_magicianes=(magicians:string[])=>{
    let magician:string[]= magicians; 
    for(let x of magician){
        console.log(x);
    }

}




let magician_name2=magician_names.slice();


let make_great1=(magicians:string[])=>{
    let magician:string[]= magicians;
    let new_magician=[];
    
    for(let x  = 0;x<magician.length;x++){
       let  meg= `Dear ${magician[x]} You are one of the best magicien in the world `;
       new_magician.push(meg);

    }

    
    return new_magician;



   
    
  

}

let new_array = make_great1(magician_name2);



show_magicianes(magician_names);
show_magicianes(new_array);