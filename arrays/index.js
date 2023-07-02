// initializing and array with values
var cars = ["honda", "ford", "bmw"];
// crating an empty array
var drivers = [];
drivers.push("Mark");
drivers.push("john");
// initializing a two dimensional array
var carModels = [["civic"], ["mustang"], ["m5"]];
// Pulling out values and type inference
var racer = drivers.pop(); // typescript know racer will hold a string value bc drivers is an array of strings
// Help with types inside of methods
cars.forEach(function (car) {
    return car.toUpperCase();
});
// We can combine types
// this array can take Date objects or strings
var raceDates = [new Date(), "01-30-2023"];
