describe("Cart Flow", () => {
  const user = {
    username: "standard_user",
    password: "secret_sauce",
  };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it("should add a product to cart and update the cart badge", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "1");

    cy.goToCart();

    cy.get('[data-test="inventory-item-name"]').should(
      "contain.text",
      "Sauce Labs Backpack"
    );
  });

  it("should remove a product from cart successfully", () => {
    cy.addBackpackToCart();
    cy.goToCart();

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get(".cart_item").should("not.exist");
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  });
});