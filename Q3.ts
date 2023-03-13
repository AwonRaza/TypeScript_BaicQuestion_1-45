/**
 * 
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.

 */


let p_name = "David";
   // Now print in lower case
   let lower = p_name.toLowerCase();
   console.log(lower);
// to upwe case

let uper = p_name.toUpperCase();
console.log(uper);

//  in title case

let p_name1 = "david Enzo";


function proper(str:string):string{ // here we write a function name proper and pass paramenter 

   let value =  str.toLowerCase(); // the parameter we pass now we convert in lower case
    let seperate = value.split(' '); // after convert in lower case we split acoording to space " "
    

    let title = seperate.map((word) => word.charAt(0).toUpperCase() + word.slice(1)); // we use map method for iteration 
    console.log(title);
    let result = title.join(' '); 




    return result;
   


}

console.log(proper(p_name1));



