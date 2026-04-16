# SauceDemo UI Automation Test Suite

## Project Overview
This project contains the UI automation test suite created for the QA Engineer technical assessment. The tests were implemented using **Cypress** and cover selected high-priority user flows on the SauceDemo web application.

Application under test: **https://www.saucedemo.com/**

## Scope of Automation
The automated scenarios were selected based on business criticality and the core ecommerce user journey. The goal was to cover the most important flows within the assessment scope rather than automate every possible scenario.

### Automated high-priority flows
- Successful login with valid credentials
- Invalid login with incorrect credentials
- Add product to cart
- View cart and verify selected item details
- Remove product from cart
- Successful checkout
- Checkout validation when a required field is missing

## Test Approach
The automation scope was prioritized around the main user path through the application:

1. User logs into the application
2. User adds a product to the cart
3. User views the cart
4. User removes a product from the cart
5. User completes checkout successfully
6. User is prevented from continuing checkout when required information is missing

This approach was chosen to ensure coverage of the most critical user-facing flows while also including negative validation coverage.

## How To Execute 

1. Navigate to the ui-automation folder
2. Install dependencies:
3. npm install
4. Run Cypress in interactive mode: npx cypress open
6. Or run tests in headless mode: npx cypress run

## Tools Used
- **Cypress**
- **JavaScript**
- **Node.js**
- **GitHub**

## Project Structure

```text
cypress/
  e2e/
    login.cy.js
    cart.cy.js
    view-cart.cy.js
    checkout.cy.js
  support/
    commands.js
cypress.config.js
package.json