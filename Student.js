"use strict";
class Student {
    id;
    name;
    isPassed;
    constructor(id, name, isPassed) {
        this.id = id;
        this.name = name;
        this.isPassed = isPassed;
    }
    displayStudent() {
        console.log(this.id + " , " + this.name + " , " + this.isPassed);
    }
}
const student = new Student(1, "Alice", true);
student.displayStudent();
