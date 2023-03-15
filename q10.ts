/**
 * 
 * Adding Comments: Choose two of the programs you’ve written, and add at least one comment to
each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top
of each program file. Then write one sentence
describing what the program does.
 * 

 * 
 */



let comment = (val :string):string=>{ // here we make a function name comment the function except on parameter and return a string 

    let  course:string = val; // here the data we pass through parameter store in course
    return course; // we return course

}

console.log(comment("web3.0")) // here we print and call the comment function also pass the argument
