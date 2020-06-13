const Engineer = require("../lib/Engineer");

it("can  set GITHUB account with constructor", () => {
    const gitvalue = "gitHube USer";
    const en = new Engineer("toto",1, "toto@gmail.com", gitvalue);
    expect(en.github).toBe(gitvalue);
});

it("getRole() return \"Engineer\"", () => {
    const rolevalue = "Engineer";
    const en = new Engineer("toto", 1, "toto@gmail.com", "githubuser");
    expect(en.getRole()).toBe(rolevalue);

});

it("get github using gitHub()method" ,() => {
    const gitvalue = "githubuser";
    const en = new Engineer("toto", 1, "toto@gmail.com", gitvalue);
    expect(en.getGitHub()).toBe(gitvalue);

})
