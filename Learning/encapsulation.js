class Student
{
    constructor()
    {
       // let name,mark;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }

    getMark()
    {
        return this.mark;
    }
    setMark(mark)
    {
        this.mark = mark;
    }

}

let stu = new Student();
stu.setName("John");
stu.setMark(50);
console.log(stu.getName(),stu.getMark());
/*stu.name = "John";
stu.mark = 50;
console.log(stu.name,stu.mark);*/
