class Company{
    constructor(){
        this.departments = {};
    }

    checkInput(name, position, department){
        if (name === '' || name === undefined || name === null ||
            position === '' || position === undefined || position === null||
            department === '' || department === undefined || department === null){
            return true;
        }
    }

    addEmployee(name, salary, position, department){
        let newEmployee = {};

        if (this.checkInput(name, position, department)){
            throw new Error('Invalid input!');
        }
        if (salary <= 0){
             throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)){
            this.departments[department] = []
        }
        newEmployee.name = name;
        newEmployee.salary = Number(salary);
        newEmployee.position = position;

        this.departments[department].push(newEmployee);
        this.departments[department].sort((a, b) => {
            if (a.salary < b.salary){return 1} 
            else if (a.salary > b.salary){return -1};
            if (a.name > b.name){return 1} 
            else if (a.name < b.name){return -1}});
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    bestDepartment(){
        let highestAverage = 0;
        let besDept = '';
        let result = '';
    
        for (const key in this.departments){
            let currentSalary = 0;
            let currentDept = this.departments[key];
            for (let n of currentDept){
                currentSalary += Number(n.salary);
            }
            currentSalary = (currentSalary / currentDept.length).toFixed(2)
            if (currentSalary > highestAverage){
                highestAverage = currentSalary;
                besDept = key;
            }
        }
        result = `Best Department is: ${besDept}\nAverage salary: ${highestAverage}\n`
        for (let n of this.departments[besDept]){
            result += `${n.name} ${n.salary} ${n.position}\n`
        }
        return result.trim();
    }    
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
