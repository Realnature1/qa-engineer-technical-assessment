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
});