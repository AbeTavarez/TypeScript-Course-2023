// initializing and array with values
const cars = ["honda", "ford", "bmw"];

// crating an empty array
const drivers: string[] = [];
drivers.push("Mark");
drivers.push("john");

// initializing a two dimensional array
const carModels: string[][] = [["civic"], ["mustang"], ["m5"]];

// Pulling out values and type inference
const racer = drivers.pop(); // typescript know racer will hold a string value bc drivers is an array of strings

// Help with types inside of methods
cars.forEach((car: string) => {
  return car.toUpperCase();
});

// We can combine types

// this array can take Date objects or strings
const raceDates: (Date | string)[] = [new Date(), "01-30-2023"];
