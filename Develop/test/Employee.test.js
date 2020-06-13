const Employee = require("../lib/Employee");

it("instantiate Employee instance", () => {
  const em = new Employee("toto", 10, "toto@gmail.com");
  expect(typeof (em)).toBe("object");
});

it("Set Employee name using ", () => {
  const name = "maurice";
  const em = new Employee(name, 10, "toto@gmail.com");
  expect(em.name).toBe(name);
});

it("Set Employee ID ", () => {
  const idtest = 100;
  const em = new Employee("toto", idtest, "toto@gmail.com")
  expect(em.id).toBe(idtest);
});

it("Set Employee email using ", () => {
  const emailtest = "email@email.com";
  const em = new Employee("toto", 100, emailtest);
  expect(em.email).toBe(emailtest);
});



describe("getName", () => {
  it("returns the Employe name", () => {
    expect(new Employee("maurice").getName()).toBe("maurice");
  });
});

describe("getID", () => {
  it("gets ID Using getID() method", () => {
    const getvalue = 10;
    const em = new Employee("toto", getvalue, "toto@gmail.com");
    expect(em.getId()).toBe(getvalue);

  })
});

describe("getEmail", () => {
  it("gets Email Using getEmail() method", () => {
    const getvalue = "email";
    const em = new Employee("toto", 10, getvalue);
    expect(em.getEmail()).toBe(getvalue);
  })
});





