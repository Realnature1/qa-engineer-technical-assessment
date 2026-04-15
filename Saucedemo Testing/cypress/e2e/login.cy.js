describe("Login Flow", () => {
  const user = {
    username: "standard_user",
    password: "secret_sauce",
  };

  it("should log in successfully with valid standard_user credentials", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').should("be.visible").type(user.username);
    cy.get('[data-test="password"]').should("be.visible").type(user.password);
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("contain.text", "Products");
    cy.get(".inventory_list").should("be.visible");
  });

  it("should display an error message when login is attempted with invalid credentials", () => {
  cy.visit("/");

  cy.get('[data-test="username"]').should("be.visible").type("invalid_user");
  cy.get('[data-test="password"]').should("be.visible").type("wrong_password");
  cy.get('[data-test="login-button"]').click();

  cy.get('[data-test="error"]')
    .should("be.visible")
    .and(
      "contain.text",
      "Username and password do not match any user in this service"
    );

  cy.url().should("eq", "https://www.saucedemo.com/");
});
});