/**
 * 
 * Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 * 
 */

let user:string[]=["piaic1","piaic2","piaic3","piaic4","admin","piaic5","piaic6","piaic7","piaic8","piaic9","piaic10"];

for(let i =0;i<user.length;i++){
    if(user[i] == "admin"){
        console.log("Hellow admin would you like to see a status report? ");
    }else{
        console.log(`"Hello ${user[i]} Thank you for login again`)

    }
}