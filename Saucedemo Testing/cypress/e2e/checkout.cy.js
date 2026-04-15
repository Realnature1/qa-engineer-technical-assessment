describe("Checkout Flow", () => {
  const user = {
    username: "standard_user",
    password: "secret_sauce",
  };

  const checkoutDetails = {
    firstName: "Nature",
    lastName: "Godwin",
    postalCode: "100001",
  };

  beforeEach(() => {
    cy.login(user.username, user.password);
  });

  it("should complete checkout successfully", () => {
    cy.addBackpackToCart();
    cy.goToCart();

    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");

    cy.get('[data-test="firstName"]').type(checkoutDetails.firstName);
    cy.get('[data-test="lastName"]').type(checkoutDetails.lastName);
    cy.get('[data-test="postalCode"]').type(checkoutDetails.postalCode);
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();

    cy.url().should("include", "/checkout-complete.html");
    cy.get('[data-test="complete-header"]').should(
      "contain.text",
      "Thank you for your order!"
    );
    cy.get('[data-test="complete-text"]').should("be.visible");
  });

  it("should show an error when checkout is attempted without postal code", () => {
    cy.addBackpackToCart();
    cy.goToCart();

    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");

    cy.get('[data-test="firstName"]').type(checkoutDetails.firstName);
    cy.get('[data-test="lastName"]').type(checkoutDetails.lastName);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Postal Code is required");

    cy.url().should("include", "/checkout-step-one.html");
  });
});