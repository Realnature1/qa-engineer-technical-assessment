describe("View Cart Flow", () => {
  const user = {
    username: "standard_user",
    password: "secret_sauce",
  };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it("should display correct product details in cart after adding an item", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "1");

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");

    cy.get('[data-test="inventory-item-name"]')
      .should("be.visible")
      .and("contain.text", "Sauce Labs Backpack");

    cy.get('[data-test="inventory-item-price"]')
      .should("be.visible")
      .and("contain.text", "$29.99");

    cy.get('[data-test="item-quantity"]')
      .should("be.visible")
      .and("contain.text", "1");
  });
});