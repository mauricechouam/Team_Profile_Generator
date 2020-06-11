const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, id, email, officenum) {
        super(name,id,email)
        this.officenum= officenum;
    }
    getRole() {
        return "Manager";
    }
    
    getOffice() {
        return this.officenum;
    }

}
module.export = Manager;