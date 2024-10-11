function call(employees) {
  class Employee {
    constructor(name) {
      this.name = name;
      this.personalNumber = name.length;
    }
  
    print() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }

  const objs = employees.map((name) => new Employee(name));
  
  objs.forEach(o => o.print());
}

call(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
call(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
