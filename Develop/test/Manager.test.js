const Manager = require("../lib/Manager");

it("can  set office number  with constructor", () => {
    const getvalue = "officenum";
    const ma = new Manager("toto",1, "toto@gmail.com", getvalue);
    expect(ma.officenum).toBe(getvalue);
});

it("getRole() return \"Manager\"", () => {
    const rolevalue = "Manager";
    const ma = new Manager("toto", 1, "toto@gmail.com", 12);
    expect(ma.getRole()).toBe(rolevalue);

})
it("gets Officename Using getOffice() method", () => {
    const getvalue = "officenum";
    const ma = new Manager("toto", 1, "toto@gmail.com", getvalue);
    expect(ma.getOffice()).toBe(getvalue);

})