class Student
{
   /* setDetails(id,name,grade)
    {
        //this.sid = 101;
        //this.sname = "John";
        //this.sgrade = "A";
        this.sid = id;
        this.sname = name;
        this.sgrade = grade;
    }*/

        //Constructor
        constructor(id,name,grade)
    {
        this.sid = id;
        this.sname = name;
        this.sgrade = grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.sgrade);
    }
}

//creating a Student object
//let stu = new Student();
//stu.setDetails();
//stu.setDetails(101,"John","A");
let stu = new Student(101,"John","A");//using constructor
stu.display();

//creating mutiple objects of the class
let stu1 = new Student(102,"David","A");
stu1.display();

let stu2 = new Student(103,"Smith","B");
stu2.display();

let stu3 = new Student(104,"Mary","C");
stu3.display();


