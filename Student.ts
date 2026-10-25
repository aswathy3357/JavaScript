class Student
{
    id : number;
    name : string;
    isPassed : boolean;

    constructor (id : number, name : string, isPassed : boolean)
    {
        this.id = id;
        this.name = name;
        this.isPassed = isPassed;
    }

    displayStudent()
    {
        console.log(this.id + " , " + this.name + " , " + this.isPassed);
    }
}

const student = new Student(1, "Alice", true);
student.displayStudent();