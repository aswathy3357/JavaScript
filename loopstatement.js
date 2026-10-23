//for loop
// //for(initialize;condition;updation){
//}
//print 1 to 5

for (let i=1;i<=5;i++){
    console.log(i);
}
/*i=1 1<=5  2  print 1
2<=5 3 print 2
3<=5 4 print 3
4<=5 5 print 4
5<=5 6 print 5
6<=5  break*/
for (let i=1;i<=10;i++){
    console.log("Hello World")
}

//while loop
//if we do not know number of iterations, while can be used instead of for
/*initialize
while(condition){
//updation
}*/
let j=5;
while(j<=10){
console.log(j);
j++;
}

let originalPwd = "123"
let userEnteredPwd = "456"
while(userEnteredPwd!=originalPwd)
{
    console.log("Enter correct pwd")
    userEnteredPwd = "123"
}

//do while loop
//at least one time, we get an output
/*initilaize
do{
}while()*/

let p=3;
do{console.log(p)
p++}
while (p>=5)
