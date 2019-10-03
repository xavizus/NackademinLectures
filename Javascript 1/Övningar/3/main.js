const inch = 2.54;
const aspectRatio = ["16:9", "4:3"]; //16 = width, 9 = height

let width = 120; //120 cm

// To get height in 16:9 ratio.
let height = (width / 16) * 9; // 67.5 cm
console.log(height);

let dioginal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
let dioginalInInches = dioginal * (1 / inch);
console.log(Math.round(dioginalInInches * 10) / 10);