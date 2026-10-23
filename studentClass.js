class Student
{
       constructor(name,mark1,mark2,mark3,mark4)
    {
    
         this.name = name;
         this.mark1 = mark1;
         this.mark2 = mark2;
         this.mark3 = mark3;
         this.mark4 = mark4;
       
    }
    
    displayAvgMark()
    {
        const avg = (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4
        console.log("Average mark of "+this.name+" : "+avg);
    }

}

const stud1 = new Student("John",30,20,25,35);
stud1.displayAvgMark();

const stud2 = new Student("Scott",22,20,10,45);
stud2.displayAvgMark();

const stud3 = new Student("Mary",50,48,47,48);
stud3.displayAvgMark();