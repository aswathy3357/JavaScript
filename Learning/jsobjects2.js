let employee = 
{
    empname: "Scott",
    empid: 1,
    job: "Engineer",
    salary: 50000,
    bonus: function()
    {
        return ((this.salary * 10)/100);
    }


};

console.log(employee.empname);
console.log(employee.bonus());