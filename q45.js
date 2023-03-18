"use strict";
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
let car_info = (name_car, name_manufacture, ...optional) => {
    for (let x of optional) {
        console.log(x);
    }
    let car = {
        name: name_car,
        manufacture: name_manufacture,
    };
    return car;
};
console.log(car_info("MARK X", "Totouta", ["colour", "Red"], ["model", 2021]));
