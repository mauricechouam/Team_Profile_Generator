const Employee = require("../lib/Employee");

describe( "Employee class", () => {
  it("Characters that aren't digits or Employees are instantly visible", () => {
    expect(new Employee("?").visible).toBe(true);
  });

  it("toString returns _ for Employees", () => {
    expect(new Employee("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Employee("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Employee("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Employee("l").getSolution()).toBe("l");
    });
  });
});
