let age = [18,25,34,56,60];
//filter out age below 40
let belowForty = age.filter((a)=>a<40);
console.log(belowForty);
//add 5 to each age
let addFive = belowForty.map((b)=>b+5);
console.log(addFive);
//reduce to single value by multiplying all values
let reducedNumber = addFive.reduce((total,value)=>total*value);
console.log(reducedNumber);

//all 3 functions in single line
let finalResult = age.filter((i)=>i<40).map((j)=>j+5).reduce((total,value)=>total*value);
console.log(finalResult);
