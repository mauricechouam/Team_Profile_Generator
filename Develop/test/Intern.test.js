const Intern = require("../lib/Intern");

it("can  set GITHUB account with constructor", () => {
    const getvalue = "schoolname";
    const int = new Intern("toto",1, "toto@gmail.com", getvalue);
    expect(int.schoolname).toBe(getvalue);
});

it("getRole() return \"Intern\"", () => {
    const rolevalue = "Intern";
    const int = new Intern("toto", 1, "toto@gmail.com", "schoolname");
    expect(int.getRole()).toBe(rolevalue);

})
it("gets Schoolnmae Using getSchool() method", () => {
    const getvalue = "schoolname";
    const int = new Intern("toto", 1,"toto@gmail.com", getvalue);
    expect(int.getSchool()).toBe(getvalue);

})
