let kilometer = prompt("how many kilometer that convert in miles?");
console.log("kilometer", kilometer );

// miles variable 

let miles = 1.60934

// convert kilometer in miles

let km_into_miles = ("conversion of kilometer in miles", kilometer / miles);
console.log("miles in kilometer:", km_into_miles);

//calculate bmi 
let height_in_inch = 70.80; 
let weight_in_pound = 209.437;
 
//convert height in centimeter
let height_in_centimeter = (height_in_inch * 2.54);
console.log("height in centimeter", height_in_centimeter);

//convert weight in kilo
let weight_in_kilogram = (weight_in_pound / 2.2046);
console.log("weight in kilogram", weight_in_kilogram);

//convert height in meter
meter = 0.01;
height_in_meter = (height_in_centimeter * meter);
console.log("height in meter", height_in_meter);
 
// squared of height
square_of_height = (height_in_meter * 2);
console.log("squate of height", square_of_height)

// bmi calculate
bmi = (weight_in_kilogram / square_of_height);
console.log("your bmi is bmi", bmi);

