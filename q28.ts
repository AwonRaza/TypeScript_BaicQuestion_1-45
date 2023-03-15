/**
 * 
 * Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the
variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
 * 
 * 
 */


let age_l:Number = 19;
if(age_l <2){
    console.log("Person is baby: ");
}else if(age_l >=2 && age_l<4){
    console.log("person is a toddler: ");

}
else if(age_l >=4 && age_l<13){
    console.log("person is a kid: ");

}
else if(age_l >=13 && age_l<20){
    console.log("person is a teenager: ");

}
else if(age_l >=20 && age_l<65){
    console.log("person is a adult: ");

}else if(age_l >= 65){
    console.log("person is elder: ");
    
}

