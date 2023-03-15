/**
 * 
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the
following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 * 
 */

let stri:string = "Piaic";
if(stri === "pIAIC"){
    console.log("True");
}else{
    console.log("False");

}
if(stri === "Piaic"){
    console.log("True");
}else{
    console.log("False");

}
if(stri === "PIAIC"){
    console.log("True");
}else{
    console.log("False");

}
if(stri === "pIAIC"){
    console.log("True");
}else{
    console.log("False");

}

let str1:string = "PIAIC";
str1.toLowerCase();
console.log(str1 === "piaic"?"true":"false");
console.log(str1 === "PIAIC"?"true":"false");


let num:Number = 34;
console.log(num === 30?"true":"false");
console.log(num === 34?"true":"false");
console.log(num >= 34?"true":"false");
console.log(num <= 34?"true":"false");


if(num >30 && num<40){
    console.log("Both condition are true");
}else{
    console.log("both condition are false")
}
if(num >30 && num<34){
    console.log("Both condition are true");
}else{
    console.log("both condition are false")
}

if(num >30 || num>40){
    console.log("Only one condition true mean condition true " );
}else{
    console.log("Both condition are false ")
}
if(num <30 || num>40){
    console.log("Only one condition true mean condition true " );
}else{
    console.log("Both condition are false ")
}


let item:string[]=["piaic1","piaic2","piaic3","piaic4","piaic5","piaic6","piaic7","piaic8","piaic9"]

let res = item.includes("piaic2");
console.log(res);

let res1 = item.includes("PIAIC5");
console.log(res1);
