/***
 * 
 * 
 * Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
 * 
 * 
 * 
 */



let car_info=(name_car:string,name_manufacture:string,...optional:[string:any][]):object=>{

    
    


   
    let car:any={
        name:name_car,
        manufacture:name_manufacture,

        
    };

    
    

   

     return car

}





console.log(car_info("MARK X","Totouta"));

