//conditional statements
//if
//if(condition){
//}
let age = 12
if(age>=18){
    console.log("Eligible") //true block
}
else{
    console.log("Not Eligible") //false block
}

//if...else if...else
/*if(condition1){
}
else if(condition2){
}
else if(condition3){
}
:
:
:
:
else{
}*/

let mark = 85
if(mark>=90)
{
    console.log("A")
}
else if(mark>=80)
{
    console.log("B")
}
else if(mark>=70)
{
    console.log("C")
}
else
{
    console.log("Failed")
}

//switch
/*switch(exprn){
 case value1:{
}
case value2:{
}
case valuen:{
}
default:{
}
}*/

let day = 3
switch(day)
{
        case 1:
        console.log("Monday")
        break;
        case 2:
        console.log("Tuesday")
        break;
        case 3:
        console.log("Wednesday")
        break;
        case 4:
        console.log("Thursday")
        break;
        case 5:
        console.log("Friday")
        break;
        case 6:
        console.log("Saturday")
        break;
        case 7:
        console.log("Sunday")
        break;
        default:
        console.log("Invalid Day")
}

//Task
//Check letter is a vowel
let letter = "E"
switch(letter){
case "A":
    console.log("Vowel")
    break
case "E":
    console.log("Vowel")
    break
case "I":
    console.log("Vowel")
    break
case "O":
    console.log("Vowel")
    break
case "U":
    console.log("Vowel")
    break
case "a":
    console.log("Vowel")
    break
case "e":
    console.log("Vowel")
    break
case "i":
    console.log("Vowel")
    break
case "o":
    console.log("Vowel")
    break
case "u":
    console.log("Vowel")
    break
default:
    console.log("Not Vowel")

}